<template>
  <div class="custom-layout">
    <header>
      <Content class="content" slot-key="title"/>
    </header>
    
    <main>
      <Content class="content" slot-key="left"/>
      <Content class="content" slot-key="right"/>
    </main>
  </div>
</template>

<style lang="stylus">
  .custom-layout
    font-size 30px
    height 100vh
    display flex
    flex-direction column
    background-color #000
    box-sizing border-box
    border 50px solid #000
    border-bottom 100px solid #000
    color #FFF
  
  .content
    padding 40px
  
  header
    flex 0 0 80px
  
  main
    flex 1
    display flex
    flex-direction row
    
    .content
      flex 1
      
      &.content__left
        color #DDD
        background-color darken(#3eaf7c, 10%)
        
      &.content__right
        color #FFF
        background-color darken(#3eaf7c, 30%)
</style>
