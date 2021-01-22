const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "soniox-web-voice.js",
    library: "sonioxWebVoice",
    libraryTarget: "var",
  },
};
