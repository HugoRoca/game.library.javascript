let WebpackStripLoader = require('strip-loader');
let devConfig = require('./webpack.config.js');
let stripLoader = {
 test: [/\.js$/, /\.es6$/],
 exclude: /node_modules/,
 loader: WebpackStripLoader.loader('console.log')
}
devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;
