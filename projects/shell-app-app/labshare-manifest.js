module.exports = {
  type: 'app',
  modules: [
    {
      name: '@labshare/shell-app',
      path: '@labshare/shell-app',
      manifest: {
        defaultIcon: 'icon-lsi-info-fill',
        entryModule: 'ShellAppModule',
        description: 'Description for shell-app',
        consumeEvents: [],
        emitEvents: [],
        name: 'shell-app'
      }
    }
  ]
};
