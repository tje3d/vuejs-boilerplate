const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PostcssPresetEnv = require('postcss-preset-env');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: isDev ? 'inline-source-map' : false,
  entry: {
    app: './src/index.ts'
  },
  output: {
    filename: '[hash].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [PostcssPresetEnv()]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    inline: true,
    port: 9000
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
