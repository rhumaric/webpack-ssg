const LOADER_CONTEXT_KEY = 'moduleMetadata';

class ModuleMetadataPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('ModuleMetadataPlugin__compilation', (compilation) => {
      compilation.hooks.normalModuleLoader.tap('ModuleMetadataPlugin__normalModuleLoader', (loaderContext, module) => {
        loaderContext[LOADER_CONTEXT_KEY] = {}
      });
    })
  }
}

ModuleMetadataPlugin.getModuleMetadata = function (loaderContext) {
  return loaderContext[LOADER_CONTEXT_KEY];
}

module.exports = ModuleMetadataPlugin;