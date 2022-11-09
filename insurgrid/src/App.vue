<template>
  <img
    alt="InsurGrid logo"
    height="30"
    src="https://uploads-ssl.webflow.com/617892070bc7e35f30380d8e/61a660c545e9df335f4b992f_InsurGrid%20Logo%20(Black).svg"
  />
  <router-view></router-view>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
