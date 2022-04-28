const HOSTS = ['www.'];
const TLDS = ['org', 'us', 'nyc', 'net', 'co.in'];

const createAuxiliaryDomains = (): string[] => {
  const domains: string[] = TLDS.map(tld => `ithelpinc.${tld}`);
  domains.push('it-help.net');
  const rval: string[] = [...domains];
  domains.forEach(domain => HOSTS.forEach(host => rval.push(`${host}${domain}`)));
  rval.push('www.ithelpinc.com');
  return rval;
};

export const AUXILIARY_DOMAINS: string[] = createAuxiliaryDomains();
export const toHostedZoneDomain = (domainName: string): string => {
  const parts: string[] = domainName.split('.');
  const index: number = parts.includes('ithelpinc') ? parts.indexOf('ithelpinc') : parts.indexOf('it-help');
  return parts.slice(index, parts.length).join('.') + '.';
};
