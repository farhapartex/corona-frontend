<template>
  <div class="home">
    <Navigation></Navigation>
    <BDCorona :bdCoronaData="bdCoronaData"></BDCorona>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Navigation from "../components/Navigation.vue";
import BDCorona from "../components/BDCorona.vue";
import { BD_CORONA_INFO } from "../store/actions.names";

@Component({
  name: "Base",
  components: { Navigation, BDCorona }
})
export default class HomePage extends Vue {
  @Action(BD_CORONA_INFO) bdCoronaInfo: any;
  bdCoronaData: any = [];

  mounted() {
    this.bdCoronaInfo()
      .then((result: any) => {
        this.bdCoronaData = result;
      })
      .catch((e: any) => {
        // this.setErrorMessege("Login Failed! Username/Password is wrong");
      });
  }
}
</script>

<style>
</style>