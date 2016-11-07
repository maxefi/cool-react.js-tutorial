require('babel-core/register');
//ignore those as non js
['.css', '.less', '.scss', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
require('babel-polyfill');
require('server.js');
