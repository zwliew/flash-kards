<template>
  <div :class="$style.app">
    <nav :class="$style.nav">
      <router-link
        :to="{ name: 'decks' }"
        :class="$style.routerLink"
        :active-class="$style.routerLinkActive"
      >Decks</router-link>|
      <router-link
        :to="{ name: 'account' }"
        :class="$style.routerLink"
        :active-class="$style.routerLinkActive"
      >Account</router-link>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss" module>
.app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

.nav {
  text-align: center;
  padding: 16px;
  background: #eee;
  text-transform: uppercase;
}

.routerLink {
  text-decoration: none;
  color: black;
  padding: 12px;

  &:hover {
    color: $secondary-color-dark;
  }

  &:focus {
    color: $secondary-color-dark;
  }

  &Active {
    border-bottom: 4px solid $secondary-color-dark;
    color: $secondary-color-dark;
  }
}
</style>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

<style lang="scss">
body,
h1,
p {
  margin: 0;
}

textarea {
  font-family: inherit;
}
</style>
