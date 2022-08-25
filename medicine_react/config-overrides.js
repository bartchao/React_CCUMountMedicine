
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': resolve('src'),
    '@components': resolve('src/components'),
    '@routes': resolve('src/routes'),
    '@constants': resolve('src/constants'),
    '@hooks': resolve('src/hooks'),
    '@layout': resolve('src/layout'),
    '@pages': resolve('src/pages'),
    '@apis': resolve('src/apis'),
  };
  return config;
}