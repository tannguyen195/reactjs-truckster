const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(less)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        }
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'raw-loader' },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                "@primary-color": "#f32126",
                "@font-family": "'Nunito Sans', sans-serif",
                "@heading-color": "#212121",
              },
            }
          }],

      },
      {
        test: /\.(jpe?g|png)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-loader?pngScale=2'
      },
      {
        test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
        loader: "imports-loader?this=>window"
      }

    );
    return config;
  },
};

