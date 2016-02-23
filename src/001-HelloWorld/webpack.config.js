var webpack = require('webpack');  

module.exports = {  
  entry: './app/app.tsx',
  output: {
    filename: './build/bundle.js'
  },
  // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.tsx', '.d.ts']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' },
      { test: /\.tsx$/, loader: 'ts' },
      { test: /\.d.ts/, loader: 'ts' }
    ]
  }
}