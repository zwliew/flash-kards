<template>
  <div :class="$style.app">
    <div :class="$style.app__main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <nav :class="$style.app__nav">
      <router-link
        :to="{ name: 'decks' }"
        :class="$style.app__routerLink"
        :active-class="$style.app__routerLinkActive"
      >Decks</router-link>|
      <router-link
        :to="{ name: 'account' }"
        :class="$style.app__routerLink"
        :active-class="$style.app__routerLinkActive"
      >Account</router-link>
    </nav>
  </div>
</template>

<style lang="scss" module>
.app {
  font-family: Roboto, Helvetica, Arial, sans-serif;

  &__main {
    margin-bottom: 52px;
  }

  &__nav {
    background: #eee;
    bottom: 0;
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    padding: 16px;
    position: fixed;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }

  &__routerLink {
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
