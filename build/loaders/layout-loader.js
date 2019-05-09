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
    const layoutHTML = exec(layoutContent, options.layout, this.context);
    // Make the HTML into a JS template literal
    const template = new Function('data', 'with(data) { return `' + layoutHTML + '` }');
    callback(null, template({ ...metadata, content }));
  });
  return;
}