const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  externals: ["aws-sdk", "utf-8-validate", "bufferutil"],
  target: "node"
};
