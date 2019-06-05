const { join } = require('path')

module.exports = (options, context) => ({
  /**
   * Add extra pages to current site.
   *
   * See: https://v1.vuepress.vuejs.org/plugin/option-api.html#additionalpages
   */
  additionalPages() {
    return {
      path: '/info/',
      filePath: join(__dirname, 'info.vue')
    }
  },

  /**
   * A function used to extend or modify the `$page` object
   *
   * See: https://v1.vuepress.vuejs.org/plugin/option-api.html#extendpagedata
   */
  extendPageData($page) {
    const { _content } = $page
    $page.charsCount = _content.length
  },

  /**
   * Register a extra command to enhance the CLI of vuepres
   *
   * See: https://v1.vuepress.vuejs.org/plugin/option-api.html#extendcli
   */
  extendCli(cli) {
    cli
      .command('view-info [targetDir]', '')
      .action(async (dir = '.') => {
        const table = require('text-table')
        const chalk = require('chalk')

        const pages = context.pages.filter(page => page.path !== '/info/')
        const totalCharsCount = pages.reduce((memo, page) => memo + page._content.length, 0)

        console.log(`  Info of ${context.siteConfig.title}`)
        console.log(`  ${chalk.gray(`A total of ${
          pages.length} articles, ${totalCharsCount} words.`)}`
        )

        console.log()

        const data = pages.map(({ title, _content }) => {
          return [`  ${title}`, chalk.gray(chalk.italic(`(${_content.length}')`))]
        })

        console.log(table(data))
        console.log()
      })
  }
})
