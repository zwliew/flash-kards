<template>
  <div class="account">
    <h1 class="account__title">
      Account
    </h1>
    <div 
      v-if="user.uid" 
    >
      <img
        class="account__photo"
        :src="user.photo"
      >
      <p>
        {{ user.name }}
        <i 
          v-if="$store.getters.isAdmin" 
          class="material-icons account__badge"
        >star</i>
      </p>
      <Button @click="logout">
        Log out
      </Button>
    </div>
    <div
      v-show="!user.uid"
      id="firebaseui-auth-container"
    />
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
.account
  text-align center

.account__title
  margin 16px 0

.account__photo
  border-radius 50%
  max-width 128px
  max-height 128px

.account__badge
  color #fdd835
  vertical-align text-bottom
</style>
