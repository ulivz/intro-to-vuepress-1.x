<frontmatter>
  title: VuePress 1.x
  description: Vue SFC as source pages
</frontmatter>

<template>
  <div id="page">
    <div class="title">{{ $frontmatter.title }}</div>
    <div class="description">{{$frontmatter.description }}</div>
  </div>
</template>

<style lang="stylus">
  html, body
    font-size 10px

  #page
    display flex
    flex-direction column
    justify-content center
    align-content center
    width 100vw
    height 100vh
    background-color #000
    text-align center
    font-family "Abel Pro"
    .title
      font-size 14rem
      font-weight bold
      color darken(#3eaf7c, 10%)
    .description
      font-size 7rem
      color #999
</style>
