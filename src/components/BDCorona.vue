<template>
  <div class="w-100 mt-5 bd-corona">
    <div class="w-100 main-header">
      <h4 class="p-3">Bangladesh Corona Update</h4>
    </div>
    <div class="container-fluid">
      <div class="row bd-update">
        <div class="col col-md-3 col-lg-3 col-xl-3">
          <div class="w-100 shadow pl-1 pr-1 pt-3 pb-3 mb-5 bg-white rounded">
            <div class="header pt-2 pb-1 mx-auto test-conduct">
              <h6 class="text-center">Test Conducted</h6>
            </div>
            <div class="container-fluid">
              <div class="row mt-3">
                <div class="col-md-6 col-lg-6">
                  <p class="text-center">Today Tested</p>
                  <p class="text-center">{{bdCoronaData[0].tested}}</p>
                </div>
                <div class="col-md-6 col-lg-6">
                  <p class="text-center">Total Tested</p>
                  <p class="text-center">{{bdCoronaData[0].total_tested}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-md-3 col-lg-3 col-xl-3">
          <div class="w-100 shadow pl-1 pr-1 pt-3 pb-3 mb-5 bg-white rounded">
            <div class="header pt-2 pb-1 mx-auto positive-case">
              <h6 class="text-center">Positive Cases</h6>
            </div>
            <div class="container-fluid">
              <div class="row mt-3">
                <div class="col-md-6 col-lg-6">
                  <p class="text-center">Today Positive</p>
                  <p class="text-center">{{bdCoronaData[0].patient}}</p>
                </div>
                <div class="col-md-6 col-lg-6">
                  <p class="text-center">Total Positive</p>
                  <p class="text-center">{{bdCoronaData[0].total_patient}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-md-3 col-lg-3 col-xl-3">
          <div class="w-100 shadow pl-1 pr-1 pt-3 pb-3 mb-5 bg-white rounded">
            <div class="header pt-2 pb-1 mx-auto patient-died">
              <h6 class="text-center">Patient Died</h6>
            </div>
            <div class="container-fluid">
              <div class="row mt-3">
                <div class="col-md-6 col-lg-6">
                  <p class="text-center">Today Died</p>
                  <p class="text-center">{{bdCoronaData[0].died}}</p>
                </div>
                <div class="col-md-6 col-lg-6">
                  <p class="text-center">Total Died</p>
                  <p class="text-center">{{bdCoronaData[0].total_died}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-md-3 col-lg-3 col-xl-3">
          <div class="w-100 shadow pl-1 pr-1 pt-3 pb-3 mb-5 bg-white rounded">
            <div class="header pt-2 pb-1 mx-auto patient-recover">
              <h6 class="text-center">Patient Recover</h6>
            </div>

            <div class="container-fluid">
              <div class="row mt-3">
                <div class="col-md-6 col-lg-6">
                  <p class="text-center">Today Recovered</p>
                  <p class="text-center">{{bdCoronaData[0].recovered}}</p>
                </div>
                <div class="col-md-6 col-lg-6">
                  <p class="text-center">Total Recovered</p>
                  <p class="text-center">{{bdCoronaData[0].total_recovered}}</p>
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
  name: "BDCorona",
  components: {}
})
export default class BDCorona extends Vue {
  @Prop() readonly bdCoronaData: any;

  mounted() {
    console.log(this.bdCoronaData);
  }
}
</script>

<style>
.bd-update p {
  font-size: 14px;
}

.col .header {
  width: 80%;
}

.col .test-conduct {
  background: #ff6666;
  color: #fff;
}

.col .positive-case {
  background: #4db8ff;
  color: #fff;
}

.col .patient-died {
  background: #66ff99;
  color: #fff;
}
.col .patient-recover {
  background: #ffb366;
  color: #fff;
}
</style>