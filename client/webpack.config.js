const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
   mode: "development",
   entry: path.resolve(__dirname, "./src/index.js"),
   output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "images/[hash][ext]",
      clean: true,
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "./public/index.html",
         filename: "index.html",
      }),
   ],
   devServer: {
      static: {
         directory: path.resolve(__dirname, "dist"),
      },
      port: 3000,
      open: true,
      hot: true,
      proxy: {
         "/api": {
            target: "https://zeniark.herokuapp.com",
         },
      },
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, "src"),
            exclude: path.resolve(__dirname, "node_modules"),
            use: [
               {
                  loader: "babel-loader",
                  options: {
                     presets: [
                        [
                           "@babel/preset-env",
                           {
                              targets: "defaults",
                           },
                        ],
                        "@babel/preset-react",
                     ],
                  },
               },
            ],
         },
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
         {
            test: /\.s[ca]ss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
         },
         {
            test: /\.(jpg|png|jpeg|gif|svg)$/,
            type: "asset/resource",
         },
      ],
   },
   // optimization: {
   //    splitChunks: {
   //       chunks: "all",
   //    },
   // },
};
