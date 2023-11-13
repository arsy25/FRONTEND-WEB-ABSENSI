<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md q-mb-md" v-if="$q.platform.is.desktop">
      <div class="text-weight-bold text-h5">Halaman penambahan Siswa</div>
      <div class="text-blue-5">Silahkan tambahkan data Siswa</div>
    </q-card>
    <q-card class="q-pa-md">
      <div class="text-h6 text-weight-bold">Form pendaftaran</div>
      <div class="text-blue-5">
        Selalu cek data Siswa dengan tepat agar tidak terjadi kesalahan
        pengisian data
      </div>
      <q-form @submit="onSubmit">
        <div class="q-mt-md items-start row q-col-gutter-md">
          <div class="q-col-xs-12 q-col-md-4">
            <q-input
              class="col"
              color="blue"
              standout="bg-blue-5 text-white"
              dense
              v-model="form.nama"
              label="Nama Siswa"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
          </div>
          <div class="q-col-xs-12 q-col-md-4">
            <q-input
              class="col"
              color="teal"
              standout="bg-blue-5 text-white"
              dense
              v-model="form.no_telepon"
              label="No Telepon"
              mask="#############"
            >
              <template v-slot:prepend>
                <q-icon name="phone" />
              </template>
            </q-input>
          </div>
          <div class="q-col-xs-12 q-col-md-4">
            <q-input
              class="col"
              color="teal"
              standout="bg-blue-5 text-white"
              dense
              v-model="form.nis"
              label="NIS"
              mask="#############"
            >
              <template v-slot:prepend>
                <q-icon name="phone" />
              </template>
            </q-input>
          </div>
          <div class="q-col-xs-12 q-col-md-4">
            <q-input
              class="col"
              color="teal"
              standout="bg-blue-5 text-white"
              dense
              v-model="form.alamat"
              label="Alamat"
            >
              <template v-slot:prepend>
                <q-icon name="map" />
              </template>
            </q-input>
          </div>
          <div class="q-col-xs-12 q-col-md-4">
            <q-input
              class="col"
              color="teal"
              standout="bg-blue-5 text-white"
              dense
              v-model="form.tgl_lahir"
              label="Tanggal Lahir"
              mask="################"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
          </div>
          <!-- <div class="q-col-xs-12 q-col-md-4">
            <q-input
              class="col"
              color="teal"
              standout="bg-blue-5 text-white"
              dense
              :type="isPwd ? 'password' : 'text'"
              hint="Silahkan isi password yang kuat"
              v-model="form.PASSWORD"
              label="Password"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div> -->
        </div>
        <div class="q-mt-md">
          <q-btn label="Submit" type="submit" color="blue-5 text-black" />
        </div> </q-form
    ></q-card>
  </q-page>
</template>

<script>
const model = () => {
  return {
    nama: null,
    nis: null,
    no_telepon: null,
    alamat: null,
    tgl_lahir: null,
    // isPwd: true,
  };
};
export default {
  name: "IndexPage",

  data() {
    return {
      form: model(),
      // isPwd: true,
    };
  },
  methods: {
    onSubmit() {
      this.onCreate();
    },
    async onCreate() {
      // console.log(this.form)
      await this.$axios
        .post("guru/create", this.form)
        .finally()
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            this.$successNotif(response.data.message, "positive");
            this.$router.push({ name: "DaftarAdmin" });
          }
        });
    },
  },
};
</script>
