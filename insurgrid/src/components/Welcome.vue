<template>
  <div class="welcome">
    <h1>Welcome to InsurGrid</h1>
    <button id="carriers-btn">
      <router-link class="link" to="/carriers">Carriers</router-link>
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class Welcome extends Vue {}
</script>

<style scoped>
#carriers-btn {
  background: #ffffff;
  border-radius: 20px;
  padding: 10px;
}

.link {
  color: black;
  text-decoration: none;
}
</style>
