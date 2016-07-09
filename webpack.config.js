var path = require('path');

module.exports = {
  entry:'./src/components/run.js',
  output: {
    path: __dirname + '/dist/scripts',
    publicPath: '/scripts/',
    filename: "app.js"
  },
  resolve: {
    alias: {
      config: path.join(__dirname, 'src', 'config', (process.env.NODE_ENV || 'development'))
    }
  },
   module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets:['es2015', 'react']
      }
    },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }]
   }
};