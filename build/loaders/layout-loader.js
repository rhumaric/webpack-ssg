const exec = require('../lib/exec');
const loaderUtils = require('loader-utils');

module.exports = function (content) {
  const options = loaderUtils.getOptions(this);
  const callback = this.async();
  this.loadModule(options.layout, (err, layoutContent) => {
    if (err) {
      return callback(err);
    }
    const layoutHTML = exec(layoutContent, options.layout, this.context);
    callback(null, layoutHTML.replace('${content}', content));
  });
  return;
}