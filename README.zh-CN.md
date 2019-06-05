# Intro to VuePress 1.x

# 时间

2019 年 6 月 8 日 16:30 - 17:10

# 地点

上海交通大学(徐汇校区) 文治堂


# 引言

VuePress 是 Vue.js 官方推出的静态网站生成器，诞生之初，它主要是为了支持 Vue 及其子项目的文档需求。去年底，1.x 的计划悄然开启，历经数月打磨，终于临近面世。本次演讲，除了正式宣布 VuePress 1.x 的发布，更多的是分享一些实实在在的干货：如何书写 VuePress 插件、主题，以及如何使用 VuePress 来打造个人博客。

# 目录

1. Self Introduction (1 min)

2. History of VuePress（5 min）

2. Features of VuePress 1.x（12 min）
  1. Plugin API
  1. Permalinks
  1. Markdown Slot
  1. Vue SFC as source page
  1. Blogging；
  1. Theme Inheritance；
  1. Others；

3. How to ... ? (20 min)
  1. Write a VuePress plugin; (5 min)
  1. Write a VuePress theme; (5 min)
  1. Blogging with VuePress; (10 min)

4. Summary (2 min)

5. Announcement (1 min)

# 内容

## Self Introduction

- 真山 · ACF（蚂蚁金服微贷前端团队） ·  VuePress 维护者
- Github：ulivz
- Twitter：_ulivz

> 大家下午好，我是来自蚂蚁金服微贷前端（ACF） 的前端真山，今天我给大家分享的主题，是 VuePress 1.x。今天我将从 VuePress 的发展历史、1.0 的主要特性，1.0 的实战干货三方面来让大家近距离地感受


## Chapter 1. History of VuePress

### VuePress 是什么？

- 画一张图来描述（ Mardkown  ---> Vue ）

### 大事记

- 2018 年 4 月 4 日，Evan You 提交了第一个 commit，[refs](https://github.com/vuejs/vuepress/commit/db62430a7ce2e5dc7f85594e94b22c861e32f002)；
- 2018 年 4 月 14 日，ULIVZ 提交了第一个 MR_（__feat: dropdown Items in Navbar__）_，[refs](https://github.com/vuejs/vuepress/pull/13)；
- 2018 年 4 月 15 日，支持 `i18n`, [refs](https://github.com/vuejs/vuepress/pull/48)；
- 2018 年 4 月 24 日，支持 `Algolia DocSearch`；
- 2018 年 5 月 19 日，[Vue Test Utils](https://ssr.vuejs.org/) 迁移到 VP，[refs](https://github.com/vuejs/vue-test-utils/pull/627)；
- 2018 年 5 月 22 日，[Vue SSR Guide](https://ssr.vuejs.org/) 迁移到 VP，[refs](https://github.com/vuejs/vue-ssr-docs/commit/95ee63c415df2478c832baaabdeb770253f6b1b1)；
- 2018 年 5 月 23 日，[Vue Router](https://ssr.vuejs.org/) 迁移到 VP，[refs](https://github.com/vuejs/vue-router/pull/2208)；
- 2018 年 5 月 25 日，[VueX](https://vuex.vuejs.org/) 迁移到 VP，[refs](https://github.com/vuejs/vuex/pull/1277)；
- 2018 年 6 月 5 日，[Vue CLI](https://cli.vuejs.org/) 迁移到 VP, [refs](https://github.com/vuejs/vue-cli/commit/4e922055e4e7127e468baba1a57652deafaf4e9d);
- 2018 年 7 月 14 日，支持 ServiceWorker updatePopup，[refs](https://github.com/vuejs/vuepress/pull/533)；
- 2018 年 8 月，开始 VuePress 1.x 的开发；
- 2018 年 9 月 27 日，发布 [1.0.0-alpha.1](https://github.com/vuejs/vuepress/compare/v0.14.4...v1.0.0-alpha.1) ；
- 2019 年 6 月 8 日，历经大半年，在发布了 48 个内测版本后，正式进入 beta （公开测试）阶段，进入 RC 发布  [1.0.0-beta.1](https://github.com/vuejs/vuepress/compare/v0.14.4...v1.0.0-alpha.1)，开始收集反馈；
- 2019 年 7 月，发布 1.0.0；

### 数据

> 以下数据，截止于 2019.6.1

- Star：12733
- Used By: 6781
- Downloads：20000/month
- Plugins: ~100 in NPM

## Chapter 2. Features of VuePress 1.x （12 min）

### Plugin API（3min）

VuePress 0.x 可以理解为一个纯粹的文档生成工具，它最大的亮点在于将 Vue SFC 强大的编程能力巧妙地和 Markdown 这一文档书写语言语言结合了起来。然而，0.x 的 VuePress 的就像是一个巨大的黑盒，但凡想要新增特性，可能需要通过修改核心源码实现。除此之外，用户也无法去实现一些本不应该由核心实现但却有用的特性，种种限制，大大地限制了 VuePress 的使用场景。

1.0 最大的更改在于引入了插件 API，同时将很多核心代码使用插件 API 进行了重构。目前官方推出的主要核心插件有

- [@vuepress/plugin-search](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-search)：将搜索的功能完全独立出来；
- [@vuepress/plugin-google-analytics](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-google-analytics)：集成 GA；
- [@vuepress/plugin-pwa](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-pwa)：集成了 Service Worker 以及 SW 更新时自动弹出的 Popup；
- [@vuepress/plugin-blog](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-blog)：博客插件；
- ...

社区也有一些比较高质量的插件：

- [vuepress-plugin-yuque](https://github.com/ulivz/vuepress-plugin-yuque)：Input: Yuque Repo, Output: VuePress Site!
- [vuepress-plugin-export](https://github.com/ulivz/vuepress-plugin-export)：将 VuePress 站点导出为 PDF；
- [vuepress-plugin-dehydrate]()：去掉 VuePress 的 PreRender；
- ...

基本上，只要你的想象力足够丰富，你能够用 VuePress 的插件 API 实现大多数你想要实现的功能。

那么 VuePress 引入了哪些插件 API 呢？主要是以下几类：

1. 声明周期类：
  1. ready
  1. updated
  1. generated
2. Webpack 相关：
  1. chainWebpack
  1. define
  1. alias
  1. beforeDevServer
  1. afterDevServer
3. Markdown 相关：
  1. extendMarkdown
  1. chainMarkdown
4. Page Management 类：
  1. extendPageData：给页面注入元数据，**这里需要代码示例来演示该 API 的作用**；
  1. clientDynamicModules：**这里需要代码示例来演示该 API 的作用**
  1. additionalPages：**这里需要代码示例来演示该 API 的作用**
5. UI 类：
  1. globalUIComponents
6. CLI 类：
  1. extendCli

### Permalinks（2min）
[https://v1.vuepress.vuejs.org/zh/guide/permalinks.html#%E8%83%8C%E6%99%AF](https://v1.vuepress.vuejs.org/zh/guide/permalinks.html#%E8%83%8C%E6%99%AF)

### Markdown Slot

Markdown 文件是元数据（页面内容、配置等）的提供者，而布局组件负责消费他们。我们可以通过 frontmatter 来定义一些普通数据类型的元数据，但对于 Markdown / HTML 这种涉及到编译前后差异的复杂元数据，frontmatter 却无能能力。<br />Markdown 插槽便解决了这一类问题。

### Vue SFC as source pages

Markdown 的表现力已经很强大，但有的时候，我们还是想使用纯 Vue 组件来开发站点中的某一个或多个页面，这个时候，你可以直接使用 Vue 组件，此时，这个页面将不存在 Layout 的概念，你完全像开发应用一样来 "设计" 你的页面。

### Blogging


### Theme Inheritance

我们有两个主要的理由来支持这个特性：

VuePress 为开发者提供了一个默认主题，它能在大多数场景下满足了文档编写者的需求。即便如此，仍然还是会有不少用户选择将其 eject 出来进行修改，即使他们可能只是想要修改其中的某个组件。

在 0.x 中，主题的入口只需要一个 Layout.vue，所以我们可以通过包装另一个主题的 Layout.vue 来实现简单的拓展。

到了 1.x 中，一个主题的元素开始变得复杂，我们开始有了主题级别的配置，它支持为主题添加插件、自定义 GlobalLayout 等。除此之外，我们还有一些引入了主题开发的 目录结构的约定，如 styles/index.styl，在这样的背景下，我们无法使用 0.x 的方式来实现继承了。

因此，我们需要提供一种合理、可靠的主题继承方案。

### Others

- 增加更多约定
- 全局布局组件
- 自定义 HTML 模板
- Node.js API

## Chapter 1. How to ... ? 

### Write a VuePress plugin



### Write a VuePress theme



### Blogging with VuePress





