<template>
  <div class="home">
    <Navigation></Navigation>
    <BDCorona></BDCorona>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Navigation from "../components/Navigation.vue";
import BDCorona from "../components/BDCorona.vue";

@Component({
  name: "Base",
  components: { Navigation, BDCorona }
})
export default class HomePage extends Vue {}
</script>

<style>
</style>