<template>
  <q-page class="q-pa-md bg-white">
    <div class="col">
      <q-item-label style="font-size: 20px" class="text-weight-bold text-dark">
        Dashboard
      </q-item-label>
    </div>

    <q-card
      class="my-card q-pa-md q-mt-lg q-mb-lg"
      v-if="$q.platform.is.mobile"
    >
      <div class="row q-gutter-sm">
        <div class="col">
          <q-card class="my-card" flat>
            <div class="col">
              <q-item-label
                style="font-size: 14px"
                class="text-weight-medium text-indigo-10"
                >Selamat datang di ABSENSI</q-item-label
              >
              <q-item-label class="text-caption text-grey"
                >Absensi dengan Iot.</q-item-label
              >
              <div class="q-gutter-sm q-mt-md items-start">
                <div class="col">
                  <q-card class="my-card bg-positive" flat>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label caption class="text-caption text-black"
                          >Total pengguna</q-item-label
                        >
                        <q-item-label
                          caption
                          style="font-size: 25px"
                          class="text-weight-bold q-mb-xs text-uppercase text-black"
                          >1000</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card>
                </div>

                <div class="col">
                  <q-card class="my-card bg-positive" flat>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label caption class="text-caption text-black"
                          >Total pengguna</q-item-label
                        >
                        <q-item-label
                          caption
                          style="font-size: 25px"
                          class="text-weight-bold q-mb-xs text-uppercase text-black"
                          >1000</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card>
                </div>

                <div class="col">
                  <q-card class="my-card bg-positive" flat>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label caption class="text-caption text-black"
                          >Total pengguna</q-item-label
                        >
                        <q-item-label
                          caption
                          style="font-size: 25px"
                          class="text-weight-bold q-mb-xs text-uppercase text-black"
                          >1000</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card>
                </div>

                <div class="col">
                  <q-card class="my-card bg-positive" flat>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label caption class="text-caption text-black"
                          >Total pengguna</q-item-label
                        >
                        <q-item-label
                          caption
                          style="font-size: 25px"
                          class="text-weight-bold q-mb-xs text-uppercase text-black"
                          >1000</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card>
                </div>

                <div class="col">
                  <q-card class="my-card bg-positive" flat>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label caption class="text-caption text-black"
                          >Total pengguna</q-item-label
                        >
                        <q-item-label
                          caption
                          style="font-size: 25px"
                          class="text-weight-bold q-mb-xs text-uppercase text-black"
                          >1000</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card>
                </div>
              </div>
            </div>
          </q-card>

          <!-- <LineChart /> -->
        </div>
      </div>
    </q-card>

    <q-card class="my-card q-pa-md q-mt-lg q-mb-lg" v-else>
      <div class="row q-gutter-sm">
        <div class="col">
          <q-card class="my-card" flat>
            <div class="col">
              <q-item-label
                style="font-size: 18px"
                class="text-weight-medium text-indigo-9"
                >Selamat datang di ABSENSI</q-item-label
              >
              <q-item-label
                style="font-size: 13px"
                class="text-caption text-grey"
                >Absensi dengan Iot.</q-item-label
              >
              <div class="row q-gutter-sm q-mt-md items-start">
                <div class="col">
                  <q-card class="my-card bg-positive" flat>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label caption class="text-caption text-black"
                          >Total Guru</q-item-label
                        >
                        <q-item-label
                          caption
                          style="font-size: 25px"
                          class="text-weight-bold q-mb-xs text-uppercase text-black"
                          >1000</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card>
                </div>

                <div class="col">
                  <q-card class="my-card bg-positive" flat>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label caption class="text-caption text-black"
                          >Total Siswa</q-item-label
                        >
                        <q-item-label
                          caption
                          style="font-size: 25px"
                          class="text-weight-bold q-mb-xs text-uppercase text-black"
                          >1000</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card>
                </div>

                <div class="col">
                  <q-card class="my-card bg-positive" flat>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label caption class="text-caption text-black"
                          >Total Alat</q-item-label
                        >
                        <q-item-label
                          caption
                          style="font-size: 25px"
                          class="text-weight-bold q-mb-xs text-uppercase text-black"
                          >1000</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card>
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </q-card>

    <div class="row q-gutter-md">
      <q-card class="flex flex-center col q-pa-md"><BarChart /></q-card>
      <q-card class="flex flex-center col"><DonutChart /></q-card>
    </div>
    <!-- <ChartLine /> -->
  </q-page>
</template>

<script>
import BarChart from "src/components/apexchart/BarChart.vue";
import DonutChart from "src/components/apexchart/DonutChart.vue";
export default {
  name: "IndexPage",
  components: {
    BarChart,
    DonutChart,
  },
};
</script>
