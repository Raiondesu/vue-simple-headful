import { Configuration } from 'webpack';

import merge = require('webpack-merge');
import common = require('./webpack.common');

const dev: Configuration = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../docs'
  }
}

export = merge(common, dev);
