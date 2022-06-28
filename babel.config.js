module.exports = {
  // presets: [["@babel/preset-env", { modules: "commonjs", loose: true }]],
  plugins: [
    [
      "@babel/plugin-transform-modules-commonjs",
      { importInterop: "node", loose: true, strict: true },
    ],
    ["babel-plugin-add-import-extension", { extension: "js" }],
  ],
};
