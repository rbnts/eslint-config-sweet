const yolo = require('fs');
// eslint-disable-next-line no-console
module.exports = {
  presets: [[ '@babel/preset-env', {
    bugfixes: true,
    corejs: 3,
    useBuiltIns: 'usage'
  },]]
};
