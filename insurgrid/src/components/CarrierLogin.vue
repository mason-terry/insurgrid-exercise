<template>
  <div class="carrier-login">
    <h1>{{ carrierName }} Login</h1>
    <input id="username" placeholder="Username" :value="username" />
    <input id="password" placeholder="Password" :value="password" />
    <button @click="handleSubmit">Submit</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions } from "vuex";

@Options({
  props: {},
  methods: {
    ...mapActions("carriers", [
      "carrierLogin",
      "updateUsername",
      "updatePassword",
      "currentCarrier",
    ]),
    async handleSubmit() {
      this.updateUsername(this.username);
      this.updatePassword(this.password);
      await this.carrierLogin();
    },
  },
  computed: {
    carrierName() {
      return this.currentCarrier.name;
    },
  },
})
export default class CarrierLogin extends Vue {}
</script>

<style scoped></style>
