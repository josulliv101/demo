const path = require("path");

module.exports = {
  title: "Demo App",
  components: () => ["./packages/ui-[a-zA-Z]*/src/components/**/[a-zA-Z]*.js"],
  styleguideComponents: {
    // Need to wrap components with MUI theme.
    Wrapper: path.join(__dirname, "apps", "styleguide", "Wrapper")
  },
  styleguideDir: "./apps/styleguide/public",
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!@demo).+\\.js$/,
          loader: "babel-loader",
          query: {
            presets: [
              "@babel/preset-react",
              ["@babel/preset-env", { modules: "auto" }]
            ],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          }
        }
      ]
    },
    resolve: {
      alias: {
        "@demo": path.resolve(__dirname, "packages")
      }
    }
  },
  pagePerSection: true
};
