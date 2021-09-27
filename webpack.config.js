const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // The point where of start the app
  entry: './src/index',
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'index.bundle.js'
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
   port: 3000
 },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
      test: /\.(ts|js)x?$/,
      exclude: /nodeModules/,
      use: {
        loader: 'ts-loader'
      },
    },
    {
      test: /\.svg/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[name][ext][query]'
      }
    },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     }
   ]
 },
 resolve: {
  extensions: ['.tsx', '.ts', '.js'],
},
 plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}