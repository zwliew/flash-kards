<template>
  <div :class="$style.account">
    <h1 :class="$style.account__title">My account</h1>
    <div v-if="user !== null">
      <img :class="$style.account__photo" :src="user.photoUrl" />
      <p>
        {{ user.name }}
        <i
          v-if="user.isAdmin"
          :class="$style.account__badge"
          class="material-icons-round"
        >star</i>
      </p>
      <Button @click="logout">Log out</Button>
    </div>
    <div v-show="user === null" id="firebaseui-auth-container" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';
import Button from '@/components/Button.vue';

@Component({
  components: {
    Button,
  },
})
export default class Account extends Vue {
  get user() {
    return this.$store.state.user;
  }

  private mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult(authResult) {
          return false;
        },
      },
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    });
  }

  private logout() {
    firebase.auth().signOut();
  }
}
</script>

<style lang="scss" module>
.account {
  text-align: center;

  &__title {
    margin: 16px 0;
  }

  &__photo {
    border-radius: 50%;
    max-width: 128px;
    max-height: 128px;
  }

  &__badge {
    color: #fdd835;
    vertical-align: text-bottom;
  }
}
</style>
