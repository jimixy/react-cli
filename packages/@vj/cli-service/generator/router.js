module.exports = (api, options) => {
  require('@vjcli/cli-plugin-router/generator')(api, {
    historyMode: options.routerHistoryMode
  })
}
