import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackDevConfig from './configs/webpack/dev.config'
import htmlTemplate from './configs/html/template'

const compiler = webpack(webpackDevConfig)
const app = express();

app
  .use('/static', express.static(path.resolve('./static')))
  .get('/', htmlTemplate())
  .use(webpackDevMiddleware(compiler, {publicPath: webpackDevConfig.output.publicPath}))
  .listen(3000);
