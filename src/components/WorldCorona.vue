<template>
  <div class="w-100 mt-5 world-corona">
    <div class="w-100 main-header">
      <h4 class="p-3">World Corona Update</h4>
    </div>
    <div class="container-fluid">
      <div class="row bd-update justify-content-center">
        <div class="col-md-3 col-sm-3 col-lg-3 col-xl-3">
          <div class="w-100 shadow pl-1 pr-1 pt-3 pb-3 mb-5 bg-white rounded">
            <div class="header pt-2 pb-1 mx-auto total-cases">
              <h6 class="text-center">Coronavirus Cases</h6>
            </div>
            <div class="container-fluid">
              <div class="row mt-3">
                <div class="col col-md-12 col-lg-12">
                  <p class="text-center">{{ globalCoronaData.confirmed }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 col-lg-3 col-xl-3">
          <div class="w-100 shadow pl-1 pr-1 pt-3 pb-3 mb-5 bg-white rounded">
            <div class="header pt-2 pb-1 mx-auto recover-case">
              <h6 class="text-center">Recovered</h6>
            </div>
            <div class="container-fluid">
              <div class="row mt-3">
                <div class="col col-md-12 col-lg-12">
                  <p class="text-center">{{ globalCoronaData.recovered }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 col-lg-3 col-xl-3">
          <div class="w-100 shadow pl-1 pr-1 pt-3 pb-3 mb-5 bg-white rounded">
            <div class="header pt-2 pb-1 mx-auto died-cases">
              <h6 class="text-center">Deaths</h6>
            </div>
            <div class="container-fluid">
              <div class="row mt-3">
                <div class="col col-md-12 col-lg-12">
                  <p class="text-center">{{ globalCoronaData.death }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "WorldCorona",
  components: {}
})
export default class WorldCorona extends Vue {
  @Prop() readonly globalCoronaData: any;

  mounted() {
    console.log(this.globalCoronaData);
  }
}
</script>

<style>
.bd-update p {
  font-size: 14px;
}

.header {
  width: 80%;
}

.total-cases {
  background: #737373;
  color: #fff;
}

.positive-case {
  background: #4db8ff;
  color: #fff;
}

.recover-case {
  background: #ff1a75;
  color: #fff;
}
.died-cases {
  background: #99cc00;
  color: #fff;
}
</style>