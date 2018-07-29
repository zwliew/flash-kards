<template>
  <div class=".container">
    <nav class="nav">
      <router-link to="/decks">Decks</router-link> |
      <router-link to="/account">Account</router-link>
    </nav>
    <transition 
      name="fade" 
      mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="stylus" scoped>
.container
  display flex
  flex-direction column
  justify-content center

.nav
  text-align center
  padding 16px
  background #eee
  text-transform uppercase
  > a
    text-decoration none
    color black
    padding 12px
    &:hover
      color secondary-color-dark
  .router-link-active
    border-bottom 4px solid secondary-color-dark
    color secondary-color-dark

.fade-enter-active, .fade-leave-active
  transition opacity .2s ease

.fade-enter, .fade-leave-active
  opacity 0

</style>
