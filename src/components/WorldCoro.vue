<template>
  <div class="w-100 mt-5 world-corona">
    <div class="w-100 main-header">
      <h4 class="p-3">World Corona Update</h4>
    </div>
    <div class="container-fluid"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "WorldCorona",
  components: {}
})
export default class WorldCorona extends Vue {
  @Prop() readonly bdCoronaData: any;

  mounted() {
    console.log(this.bdCoronaData);
  }
}
</script>

<style>
</style>