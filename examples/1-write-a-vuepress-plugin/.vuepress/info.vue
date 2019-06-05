<template>
  <div id="info">
    <h1 id="title">Info of {{ $title }}</h1>
    <div id="sub-title">
      A total of {{ pages.length }} articles, {{ totalCharsCount }} words.
    </div>
    
    <div id="content">
      <div
        class="ui-page"
        v-for="page in pages"
      >
        <a class="title" :href="page.path">
          {{ page.title }}
          <span class="chars-count">
            ({{ page.charsCount }}')
          </span>
        </a>
        <div class="link">{{ page.path }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      pages() {
        return this.$site.pages.filter(page => page.path !== '/info/')
      },

      totalCharsCount() {
        return this.pages.reduce((memo, page) => memo + page.charsCount, 0)
      }
    }
  }
</script>

<style lang="stylus">
  #info
    width 100vw
    min-height 100vh
    background-color #000
    color darken(#3eaf7c, 10%)
    padding 100px
    box-sizing border-box
  
  #title
    font-family "PT Serif"
    font-size 100px
    margin 0
  
  #sub-title
    font-family "initial"
    font-size 36px
    color #999
    font-weight 200
    margin-bottom 30px
  
  #content
    .ui-page
      margin-bottom 20px
      
    .title
      font-weight 400
      letter-spacing 2px
      font-size 40px
      
      .chars-count
        font-style italic
        font-size 0.7em
        color #999
        
  .link
    font-size 1.5em
    font-family Serif
    color #999
</style>
