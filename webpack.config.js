const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleTracker = require("webpack-bundle-tracker");
const workbox = require("workbox-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const preprocess = require('svelte-preprocess');
const path = require("path");
const uuid4 = require("uuid4");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";
const cacheHash = uuid4();

let plugins = [
  new BundleTracker({
    path: __dirname,
    filename: "./webpack-stats.json",
  }),
  new MiniCssExtractPlugin({
    filename: "[name].css",
  }),
];

if (prod) {
  plugins = plugins.concat([
    new workbox.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      inlineWorkboxRuntime: true,
      // here, we set the navigateFallback to '/',
      // so that any missing urls are handled by react-router
      navigateFallback: "/",
      additionalManifestEntries: [
        { url: "/", revision: cacheHash },
        { url: "/manifest.json", revision: cacheHash },
        { url: "/static/images/my_app_icon.png", revision: cacheHash },
      ],
    }),
    new CompressionPlugin(),
  ]);
}

module.exports = {
  entry: {
    bundle: ["./svelte-app/main.ts"],
  },
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
    },
    extensions: [".mjs", ".js", ".svelte", "ts"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    path: __dirname + "/svelte-app/dist",
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
    publicPath: prod ? "" : "http://localhost:3000/",
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: false,
            preprocess: preprocess({
              scss: {
                includePaths: ['src'],
              },
              postcss: {
                plugins: [require('autoprefixer')],
              },
            }),
          },
        },
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  mode,
  plugins,
  devtool: prod ? false : "source-map",
};
