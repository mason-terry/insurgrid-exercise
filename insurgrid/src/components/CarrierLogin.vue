<template>
  <div class="carrier-login">
    <h1>Progressive Login</h1>
    <div>
      <input id="username" placeholder="Username" :value="username" />
    </div>
    <div>
      <input id="password" placeholder="Password" :value="password" />
    </div>
    <div>
      <p v-if="processing">Loading...</p>
      <button v-else @click="handleSubmit">Submit</button>
    </div>
    <div>
      <p v-if="error">Error logging in. Try again.</p>
      <a :href="pdf" target="_blank" v-if="pdf">Declaration Page</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapState } from "vuex";

@Options({
  props: {},
  methods: {
    ...mapActions("carriers", [
      "carrierLogin",
      "updateUsername",
      "updatePassword",
      "currentCarrier",
      "updateLoading",
    ]),
    async handleSubmit() {
      this.updateLoading(true);
      this.updateUsername(this.username);
      this.updatePassword(this.password);
      await this.carrierLogin();
    },
  },
  computed: {
    ...mapState("carriers", ["pdf", "loading", "error"]),
    carrierName() {
      return this.currentCarrier.name;
    },
    processing() {
      return this.loading;
    },
    errorMessage() {
      return this.error;
    },
  },
})
export default class CarrierLogin extends Vue {}
</script>

<style scoped>
#username {
  margin: 5px;
}

#password {
  margin: 5px;
}

button {
  margin: 5px;
}

a {
  margin: 5px;
}
</style>
