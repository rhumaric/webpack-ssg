// https://github.com/webpack/webpack.js.org/issues/1268#issuecomment-313513988
const Module = require("module");
module.exports = function (code, filename, context) {
  const module = new Module(filename, this);
  module.paths = Module._nodeModulePaths(context);
  module.filename = filename;
  module._compile(code, filename);
  return module.exports;
}