const exec = require('../lib/exec');

module.exports = function (content) {
  // TODO: Load template from external file
  //       `this.loadModule`
  // TODO: Allow content to be a module with an export (create an exec-loader)
  //       To which data will be passed
  const callback = this.async();
  const layout = '@/layouts/site.html';
  this.loadModule(layout, (err, layoutContent) => {
    if (err) {
      return callback(err);
    }
    const layoutHTML = exec(layoutContent, layout, this.context);
    callback(null, layoutHTML.replace('${content}', content));
  });
  return;
}