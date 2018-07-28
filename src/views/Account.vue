<template>
  <div class="container">
    <h1>Account</h1>
    <div v-if="user.uid" class="photo-container">
      <img
        class="photo"
        :src="user.photo">
      <p>{{ user.name }} <font-awesome-icon 
        v-if="$store.getters.isAdmin" 
        class="badge" 
        icon="star" /></p>
      <Button @click="logout">Log out</Button>
    </div>
    <div
      v-show="!user.uid"
      id="firebaseui-auth-container" />
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseui from 'firebaseui';
import Button from '../components/Button.vue';

export default {
  components: {
    Button,
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    const component = this;
    ui.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult(authResult) {
          return false;
        },
      },
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
    });
  },
  methods: {
    logout() {
      this.$router.push('/');
      firebase.auth().signOut();
    },
  },
};
</script>

<style lang="stylus" scoped>
.container
  text-align center

.photo-container
  padding 16px

  .photo
    border-radius 50%
    max-width 128px
    max-height 128px

.badge
  color #fdd835
</style>
