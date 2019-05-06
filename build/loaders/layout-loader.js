module.exports = function (content) {
  // TODO: Load template from external file
  //       `this.loadModule`
  // TODO: Allow content to be a module with an export (create an exec-loader)
  //       To which data will be passed
  return `
    <html>
      <head>
        <title>It works</title>
      </head>
      <body>
        <header>
          Woohhhooo!
        </header>
        ${content}
      </body>
    </html>
  `;
}