# absolute-glob

> Make a glob pattern absolute and unixify it

[![npm status](http://img.shields.io/npm/v/absolute-glob.svg?style=flat-square)](https://www.npmjs.org/package/absolute-glob) [![Travis build status](https://img.shields.io/travis/vweevers/absolute-glob.svg?style=flat-square&label=travis)](http://travis-ci.org/vweevers/absolute-glob) [![AppVeyor build status](https://img.shields.io/appveyor/ci/vweevers/absolute-glob.svg?style=flat-square&label=appveyor)](https://ci.appveyor.com/project/vweevers/absolute-glob) [![Dependency status](https://img.shields.io/david/vweevers/absolute-glob.svg?style=flat-square)](https://david-dm.org/vweevers/absolute-glob)

## example

```js
var absolute = require('absolute-glob')

absolute() === '/';
absolute('foo') === '/foo';
absolute('\\foo/*.{js, css}') === '/foo/*.{js, css}';
absolute('C:\\**') === '/**';

// negative globs
absolute('!') === '!/';
absolute('!*.md') === '!/*.md';

```

## install

With [npm](https://npmjs.org) do:

```
npm install absolute-glob
```

## license

[MIT](http://opensource.org/licenses/MIT) © [Vincent Weevers](http://vincentweevers.nl)
