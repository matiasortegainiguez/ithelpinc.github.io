'use strict';

const build = require('@codification/cutwater-build-web');

build.tscEs6.setConfig({
  options: {
    ...build.tscEs6.options,
    module: 'esnext'
  }
});

build.initialize(require('gulp'));