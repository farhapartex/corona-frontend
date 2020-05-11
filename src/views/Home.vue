<template>
  <div class="home">
    <Navigation></Navigation>
    <BDCorona :bdCoronaData="bdCoronaData"></BDCorona>
    <WorldCorona :globalCoronaData="globalCoronaData"></WorldCorona>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Navigation from "../components/Navigation.vue";
import BDCorona from "../components/BDCorona.vue";
import WorldCorona from "../components/WorldCorona.vue";
import { BD_CORONA_INFO, GLOBAL_CORONA_INFO } from "../store/actions.names";

@Component({
  name: "Base",
  components: { Navigation, BDCorona, WorldCorona }
})
export default class HomePage extends Vue {
  @Action(BD_CORONA_INFO) bdCoronaInfo: any;
  @Action(GLOBAL_CORONA_INFO) globalCoronaInfo: any;

  bdCoronaData: any = [];
  globalCoronaData: any = [];

  getBdInfo() {
    this.bdCoronaInfo()
      .then((result: any) => {
        this.bdCoronaData = result;
      })
      .catch((e: any) => {
        // this.setErrorMessege("Login Failed! Username/Password is wrong");
      });
  }

  getGlobalInfo() {
    this.globalCoronaInfo()
      .then((result: any) => {
        this.globalCoronaData = result[0];
        console.log(this.globalCoronaData);
      })
      .catch((e: any) => {
        // this.setErrorMessege("Login Failed! Username/Password is wrong");
      });
  }

  mounted() {
    this.getBdInfo();
    this.getGlobalInfo();
  }
}
</script>

<style>
</style>