const path = require('path');
const webpack = require('webpack');
const vendorModules = require('./vendorModules');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    r16: vendorModules
  },
  resolve: {
		extensions: ['.js', '.jsx', '.json', '.less', '.css'],
		modules: [__dirname, 'node_modules']
	},
  mode: 'production',
  optimization: {
    splitChunks: false,
    minimize: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
          compress: {
            // drop_console: true,
            // pure_funcs: ["console.log"],
            ecma: 6,
            passes: 2,
            unsafe_math: true,
          },
        },
        extractComments: {
          condition: true,
          banner: false,
        },
      })
    ],
    noEmitOnErrors: true
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, 'vendorManifest.json')
    })
  ],
  output: {
    path: __dirname + '/rel',
    filename: '[name].js',
    publicPath: '/',
    library: '[name]'
  }
};
