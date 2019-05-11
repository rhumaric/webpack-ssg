const exec = require('../lib/exec');
const loaderUtils = require('loader-utils');
const ModuleMetadataPlugin = require('../plugins/moduleMetadata');

module.exports = function (content) {
  const options = loaderUtils.getOptions(this);
  const callback = this.async();
  const metadata = ModuleMetadataPlugin.getModuleMetadata(this);
  this.loadModule(metadata.layout || options.layout, (err, layoutContent) => {
    if (err) {
      return callback(err);
    }
    const module = exec(layoutContent, options.layout, this.context);
    if (typeof module == 'string') {
      const template = new Function('data', 'with(data) { return `' + module + '` }');
      callback(null, template({ ...metadata, content }));
    } else {
      callback(null, module({ ...metadata, content }));
    }
  });
  return;
}