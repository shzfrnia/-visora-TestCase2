const express = require('express');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.config.js');
const path = require('path');
const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/dev",
}));

app.use(webpackHotMiddleware(compiler, {
  publicPath: "/dev",
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
  reload: true,
}));

app.use(express.static(__dirname + "/dev"));

app.get('*', function (req, res)
{
  res.sendFile(path.resolve(__dirname, 'index.html'))
});

const server = app.listen(3001, function ()
{
  const host = server.address().address;
  const port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
