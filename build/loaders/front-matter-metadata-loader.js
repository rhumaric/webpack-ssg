const fm = require('front-matter');
const ModuleMetadataPlugin = require('../plugins/moduleMetadata');

module.exports = function (content) {
  const { attributes, body } = fm(content);

  Object.assign(ModuleMetadataPlugin.getModuleMetadata(this), attributes);

  return body;
}