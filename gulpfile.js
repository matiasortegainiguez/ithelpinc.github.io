require('dotenv').config();

const del = require('del');
const gulp = require('gulp');
const run = require('gulp-run-command').default;

const paths = {
  temp: 'temp',
  packages: 'packages',
  lambda: 'packages/lambda',
  lambdaDist: 'packages/lambda/dist',
  site: 'packages/site',
  siteDist: 'packages/site/dist',
  siteTemplates: 'packages/site/templates'
};

const domainNames = (stage) => {
  if (stage !== 'prod') {
    return 'beta.ithelpinc.com';
  } else {
    const rval = [];
    rval.push('it-help.net');
    rval.push('www.it-help.net');
    ['com', 'org', 'net', 'us', 'nyc', 'co.in'].forEach(tld => {
      rval.push(`ithelpinc.${tld}`);
      rval.push(`www.ithelpinc.${tld}`);
    })
    return rval.join(',');
  }
}

const vars = {
  stage: process.env.STAGE,
  profile: process.env.PROFILE ? ` --profile ${process.env.PROFILE}` : '',
  artifactBucket: process.env.ARTIFACT_BUCKET,
  domainNames: domainNames(process.env.STAGE),
  certificateId: process.env.CERTIFICATE_ID,
  recaptchaEnabled: process.env.RECAPTCHA_ENABLED,
  recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
  formEmailAddress: process.env.FORM_EMAIL_ADDRESS,
  siteBucket: `${process.env.SITE_BUCKET}-${process.env.STAGE}`,
  templateBucket: `${process.env.SITE_BUCKET}-${process.env.STAGE}-templates`,
  stackName: `${process.env.STACK_NAME}-${process.env.STAGE}`,
  shortTermIncludes: `--include "*.html"`,
  shortTermExcludes: `--exclude "*.html"`,
};

const clean = () => {
  return del([paths.temp]);
};
exports.clean = clean;

const configureTemp = () => {
  return gulp
    .src('cloudformation.yaml', {
      read: false,
    })
    .pipe(gulp.dest(paths.temp));
};
exports.configureTemp = configureTemp;

const packageCloudFormation = () => {
  return run(`aws cloudformation package \
  --template cloudformation.yaml \
  --s3-bucket ${vars.artifactBucket} \
  --output-template ${paths.temp}/packaged-sam.yaml${vars.profile}`)();
};
exports.packageCloudFormation = packageCloudFormation;

const package = gulp.series(configureTemp, packageCloudFormation);
exports.package = package;

const deployCloudformation = () => {
  return run(`aws cloudformation deploy \
--template-file ${paths.temp}/packaged-sam.yaml \
--stack-name ${vars.stackName} \
--parameter-overrides \
Stage=${vars.stage} \
SiteBucketName=${vars.siteBucket} \
TemplateBucketName=${vars.templateBucket} \
ArtifactBucketName=${vars.artifactBucket} \
"DomainNames=${vars.domainNames}" \
CertificateId=${vars.certificateId} \
RecaptchaEnabled=${vars.recaptchaEnabled} \
RecaptchaSecretKey=${vars.recaptchaSecretKey} \
FormEmailAddress=${vars.formEmailAddress} \
--capabilities CAPABILITY_IAM CAPABILITY_AUTO_EXPAND \
--no-fail-on-empty-changeset${vars.profile}`)();
};
exports.deployCloudformation = deployCloudformation;

const deployTemplates = () => {
  return run(`aws s3 cp ${paths.siteTemplates} s3://${vars.templateBucket} \
  --recursive${vars.profile}`)();
};
exports.deployTemplates = deployTemplates;

const deploySiteShortTermAssets = () => {
  return run(`aws s3 cp ${paths.siteDist} s3://${vars.siteBucket}/assets \
  ${vars.shortTermIncludes} --recursive --metadata-directive REPLACE \
  --cache-control "max-age=900"${vars.profile}`)();
};
exports.deploySiteShortTermAssets = deploySiteShortTermAssets;

const deploySiteLongTermAssets = () => {
  return run(`aws s3 cp ${paths.siteDist} s3://${vars.siteBucket}/assets \
  ${vars.shortTermExcludes} --recursive --metadata-directive REPLACE \
  --cache-control "max-age=31536000"${vars.profile}`)();
};
exports.deploySiteLongTermAssets = deploySiteLongTermAssets;

const syncSiteFiles = () => {
  return run(`aws s3 sync ${paths.siteDist} s3://${vars.siteBucket}/assets \
  --delete${vars.profile}`)();
};
exports.syncSiteFiles = syncSiteFiles;

const deploySite = gulp.series(gulp.parallel(deploySiteShortTermAssets, deploySiteLongTermAssets, deployTemplates), syncSiteFiles);
exports.deploySite = deploySite;

const deploy = gulp.series(package, deployCloudformation, deploySite);
exports.deploy = deploy;