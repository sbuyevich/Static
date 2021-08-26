const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


module.exports = options => {
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      publicPath: "http://localhost:4444/",
      uniqueName: "react-app"
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/react', '@babel/env']
              }
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
          name: "react-app",
          library: { type: "var", name: "react_app" },
          filename: "remoteEntry.js",
          exposes: {
              './web-components': './app.js',
          },        

          shared: ["react", "react-dom"]
        })
    ],
    devServer: {
      port: 4444
    }
  }
}
