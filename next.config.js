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
        use: ['babel-loader', 'raw-loader', 'less-loader'],

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
      { test: /\.svg$/, loader: 'svg-loader?pngScale=2' }

    );
    return config;
  },
};

