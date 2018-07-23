<template>
  <div id="container">
    <div v-if="user.uid">
      <img id="user-photo" :src="user.photo">
      <p>{{ user.name }}</p>
      <Button @click="logout">Log out</Button>
    </div>
    <div v-else id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseui from 'firebaseui';
import Button from '../components/Button.js';

export default {
  components: {
    Button,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      this.$store.commit('SET_USER', {});
      firebase.auth().signOut();
      this.$router.push('/');
    },
  },
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    const component = this;
    ui.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl) {
          const user = authResult.user;
          component.$store.commit('SET_USER', {
            name: user.displayName,
            uid: user.uid,
            photo: user.photoURL
          });
          return true;
        },
      },
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: '/account',
    });
  },
};
</script>

<style lang="stylus" scoped>
#container
  text-align center

#user-photo
  border-radius 50%
  max-width 128px
  max-height 128px
</style>
