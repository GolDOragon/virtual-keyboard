const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const isDevMode = process.env.NODE_ENV === 'development';
const isProdMode = !isDevMode;

const getFilename = (ext) =>
  isDevMode ? `[name].${ext}` : `[name].[hash].${ext}`;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProdMode) {
    config.minimizer = [
      new TerserWebpackPlugin(),
      new OptimizeCSSAssetsWebpackPlugin(),
    ];
  }
  return config;
};

const getJSLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['transform-class-properties'],
      },
    },
  ];

  if (isDevMode) loaders.push('eslint-loader');

  return loaders;
};

const getCSSLoaders = (addition) => {
  const loaders = [
    {
      loader: MiniCSSExtractPlugin.loader,
      options: {
        hmr: isDevMode,
        reloadAll: true,
      },
    },
    'css-loader',
  ];

  if (addition) loaders.push(addition);

  return loaders;
};

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['@babel/polyfill', './index.js'],
  },
  output: {
    filename: getFilename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, 'src'),
    },
  },
  devtool: isDevMode ? 'source-map' : '',
  optimization: optimization(),
  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [{ from: 'fonts', to: 'fonts' }],
    // }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['!assets'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'public', './index.html'),
      minify: {
        collapseWhitespace: isProdMode,
      },
    }),
    new MiniCSSExtractPlugin({
      filename: getFilename('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_module/,
        loader: getJSLoaders(),
      },
      {
        test: /\.css$/i,
        use: getCSSLoaders(),
      },
      {
        test: /\.s[ca]ss$/i,
        use: getCSSLoaders('sass-loader'),
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?p|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img',
            },
          },
        ],
      },
    ],
  },
};
