<template>
  <div class="carriers">
    <h1>Carriers</h1>
    <div v-for="carrier in carriers" v-bind:key="carrier.id">
      <button @click="selectCarrier">
        {{ carrier.name }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapState } from "vuex";

@Options({
  props: {},
  methods: {
    ...mapActions("carriers", ["getCarriers", "updateCurrentCarrier"]),
    selectCarrier() {
      this.updateCurrentCarrier(this.currentCarrier);
      this.$router.push("/carrier");
    },
  },
  computed: {
    ...mapState("carriers", ["carriers", "currentCarrier"]),
  },
  async created() {
    await this.getCarriers();
  },
})
export default class Carriers extends Vue {}
</script>

<style scoped></style>
