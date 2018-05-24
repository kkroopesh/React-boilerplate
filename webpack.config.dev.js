import webpack from 'webpack'
import path from 'path'

export default {
    mode: 'none',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
      filename: 'bundle.js',
      publicPath: '/',
    path: path.resolve(__dirname, './server')
  },
  module: {
    rules: [
      {
        test:  /\.js$/,
        include: path.join(__dirname, 'client'),
        //include: __dirname+'client',
        use: [{
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['react', 'es2015']
              }
        }]
      }
    ]
  },
  resolve: {
    extensions: [ '*','.js' ]
  }
}