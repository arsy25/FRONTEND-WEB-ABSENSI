<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md q-mb-md">
      <div class="text-weight-bold text-h5">HALAMAN DAFTAR ADMIN</div>
      <div class="text-italic">INI ADALAH HALAMAN DAFTAR ADMIN</div>
    </q-card>

    <q-card class="q-pa-md">
      <q-table
        class="q-pa-md"
        flat
        bordered
        dense
        :rows="rows"
        :columns="columns"
        :pagination="pagination"
        row-key="name"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props">
              {{ props.row.NAMA }}
            </q-td>
            <q-td key="password" :props="props"> {{ props.row.PASSWORD }}</q-td>
            <q-td key="nomor_telepon" :props="props">
              {{ props.row.NOMOR_TELEPON }}</q-td
            >
            <q-td key="alamat" :props="props"> {{ props.row.ALAMAT }}</q-td>
            <q-td key="nik" :props="props"> {{ props.row.NIK }}</q-td>
            <q-td key="action" :props="props" class="q-gutter-xs">
              <q-btn color="blue" @click="this.editdata(props.row)">edit</q-btn>
              <q-btn color="red" @click="this.deletedata(props.row)"
                >delete</q-btn
              >
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>
    <q-dialog
      v-model="deletenotif"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-teal text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">HAPUS DATA</div>
        </q-card-section>

        <q-card-section class="q-pt-none"> yakin dek? </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn
            @click="this.deletedialogdata(this.GUID)"
            flat
            label="OK"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog
      v-model="editnotif"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-teal text-white" style="width: 900px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">EDIT DATA</div>
        </q-card-section>
        <q-form @submit="onEdit">
          <q-card-section class="q-pt-none">
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
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn type="submit" flat label="OK" v-close-popup />
            <q-btn flat label="cancel" v-close-popup />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
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
  };
};
export default {
  name: "IndexPage",
  data() {
    return {
      deletenotif: false,
      editnotif: false,
      GUID: null,
      form: model(),
      rows: [],
      columns: [
        {
          name: "name",
          label: "Nama Guru",
          align: "left",
          field: "name",
        },

        { name: "password", label: "Password", field: "password" },
        {
          name: "nomor_telepon",
          label: "No Telepon",
          field: "nomor_telepon",
        },
        { name: "alamat", label: "Alamat", field: "alamat" },
        { name: "nik", label: "NIK", field: "nik" },
        { name: "action", label: "Edit", field: "action" },
      ],
      pagination: {
        sortBy: "desc",
        descending: false,
        rowsPerPage: 10,
      },
    };
  },
  created() {
    this.getDaftarAdmin();
  },
  methods: {
    deletedata(DATA) {
      this.deletenotif = true;
      this.GUID = DATA.GUID;
      // console.log(this.GUID)
      //
    },
    deletedialogdata() {
      this.$axios
        .delete(`/admin/${this.GUID}`)
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            this.getDaftarAdmin();
          }
        })
        .catch(() => this.$commonErrorNotif());
    },

    editdata(DATA) {
      this.form.NAMA = DATA.NAMA;
      this.form.PASSWORD = DATA.PASSWORD;
      this.form.NOMOR_TELEPON = DATA.NOMOR_TELEPON;
      this.form.ALAMAT = DATA.ALAMAT;
      this.GUID = DATA.GUID;
      this.editnotif = true;
    },
    onEdit() {
      this.onUpdate();
    },
    onUpdate() {
      // console.log(this.form)
      this.$axios
        .put(`/admin/${this.GUID}`, this.form)
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            console.log(response.data);
            this.getDaftarAdmin();
          }
        })
        .catch(() => this.$commonErrorNotif());
    },

    getDaftarAdmin: async function () {
      await this.$axios
        .get("admin/getByStatusAll")
        .finally(() => this.$q.loading.hide())
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            this.rows = response.data.data;
          }
        })
        .catch(() => this.$commonErrorNotif());
    },
    confirm() {
      $q.dialog({
        title: "Confirm",
        message: "Would you like to turn on the wifi?",
        cancel: true,
        persistent: true,
      })
        .onOk(() => {
          // console.log('>>>> OK')
        })
        .onOk(() => {
          // console.log('>>>> second OK catcher')
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    },
  },
};
</script>
