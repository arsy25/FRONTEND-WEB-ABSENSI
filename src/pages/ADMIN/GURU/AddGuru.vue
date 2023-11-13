<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md q-mb-md" v-if="$q.platform.is.desktop">
      <div class="text-weight-bold text-h5">Halaman penambahan Guru</div>
      <div class="text-blue-5">Silahkan tambahkan data Guru</div>
    </q-card>
    <q-card class="q-pa-md">
      <div class="text-h6 text-weight-bold">Form pendaftaran</div>
      <div class="text-blue-5">
        Selalu cek data Guru dengan tepat agar tidak terjadi kesalahan pengisian
        data
      </div>
      <q-form @submit="onSubmit">
        <div class="q-mt-md items-start row q-col-gutter-md">
          <div class="q-col-xs-12 q-col-md-4">
            <q-input
              class="col"
              color="blue"
              standout="bg-blue-5 text-white"
              dense
              v-model="form.NAMA"
              label="Nama Guru"
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
              v-model="form.NOMOR_TELEPON"
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
              v-model="form.ALAMAT"
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
              v-model="form.NIK"
              label="NIK"
              mask="################"
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
          </div>
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
    NAMA: null,
    PASSWORD: null,
    NOMOR_TELEPON: null,
    ALAMAT: null,
    NIK: null,
    isPwd: true,
  };
};
export default {
  name: "IndexPage",

  data() {
    return {
      form: model(),
      isPwd: true,
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
