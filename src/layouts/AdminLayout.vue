<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
  />
  <q-layout view="lHh Lpr lFf" class="bglay">
    <q-header none style="background: transparent; color: #91c8e4">
      <!--ini toolbarnya-->
      <div class="row q-pa-md flex flex-center">
        <div class="col title">ABSENSI</div>
        <q-icon
          class="flex flex-center cursor-pointer"
          name="menu"
          v-for="size in ['md']"
          :key="size"
          :size="size"
          @click="drawer = !drawer"
        ></q-icon>
      </div>
    </q-header>

    <q-drawer
      v-model="drawer"
      :mini="miniState"
      @mouseover="miniState = false"
      :width="300"
      class="menulogo"
    >
      <q-list class="q-gutter-md">
        <q-item-label header>
          <q-card
            class="q-pa-sm text-white"
            style="
              background-image: url('images/banner.jpg');
              background-repeat: no-repeat;
              background-size: cover;
            "
          >
            <q-item class="q-mb-md">
              <q-item-section side>
                <q-avatar rounded size="48px">
                  <img src="images/demeter.jpg" />
                  <q-badge floating color="light-green"></q-badge>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-white text-weight-bold"
                  >DEMETER</q-item-label
                >
                <q-item-label caption class="text-white"
                  ><q-badge color="green-9"
                    >superadmin@gmail.com</q-badge
                  ></q-item-label
                >
              </q-item-section>
            </q-item>
          </q-card>
        </q-item-label>

        <q-expansion-item expand-separator>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                rounded
                class="shadow-1 element1"
                icon="person"
                size="md"
              />
            </q-item-section>

            <q-item-section class="textmenutitle">Guru</q-item-section>
          </template>

          <q-item
            clickable
            :to="{ name: 'guru' }"
            v-ripple
            style="background: #232135"
          >
            <q-item-section avatar> </q-item-section>

            <q-item-section class="textmenu"> Semua Guru </q-item-section>
          </q-item>
          <q-item
            clickable
            :to="{ name: 'add_guru' }"
            v-ripple
            style="background: #232135"
          >
            <q-item-section avatar></q-item-section>

            <q-item-section class="textmenu"> Daftarkan Guru </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item expand-separator>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                rounded
                class="shadow-1 element2"
                icon="people"
                size="md"
              />
            </q-item-section>

            <q-item-section class="textmenutitle">Siswa</q-item-section>
          </template>

          <q-item
            clickable
            :to="{ name: 'siswa' }"
            v-ripple
            style="background: #232135"
          >
            <q-item-section avatar> </q-item-section>

            <q-item-section class="textmenu"> Semua Siswa </q-item-section>
          </q-item>
          <q-item
            clickable
            :to="{ name: 'add_siswa' }"
            v-ripple
            style="background: #232135"
          >
            <q-item-section avatar></q-item-section>

            <q-item-section class="textmenu"> Daftarkan Siswa </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item expand-separator>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                rounded
                class="shadow-1 element1"
                icon="devices"
                size="md"
              />
            </q-item-section>

            <q-item-section class="textmenutitle">Perangkat</q-item-section>
          </template>

          <q-item
            clickable
            :to="{ name: 'perangkat' }"
            v-ripple
            style="background: #232135"
          >
            <q-item-section avatar> </q-item-section>

            <q-item-section class="textmenu"> Semua Perangkat </q-item-section>
          </q-item>
          <q-item
            clickable
            :to="{ name: 'add_perangkat' }"
            v-ripple
            style="background: #232135"
          >
            <q-item-section avatar></q-item-section>

            <q-item-section class="textmenu">
              Daftarkan Perangkat
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      drawer: false,
      miniState: true,
    };
  },
};
</script>
<style>
:root {
  font-size: 20px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  --text-primary: #131111;
  --text-secondary: #ffffff;
  --text-menu: #91c8e4;
  --bg-primary: #23232e;
  --bg-secondary: #07191d;
  --transition-speed: 700ms;
  --transition-speed2: 200ms;
}

.title {
  color: #91c8e4;
  font-family: cursive;
  font-size: 20px;
}

.bglay {
  background: #191825;
}

.navbarmenu {
  background: #191825;
}
.textmenu {
  color: var(--text-menu);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 300;
}
.textmenutitle {
  color: var(--text-menu);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 18px;
}
.btn {
  border-radius: 20px 5px;
  background: transparent;
  transition: var(--transition-speed);
}
.btn:hover {
  filter: grayscale(0%) opacity(1);
  font-weight: 600;
  background: #91c8e4;
  color: #191825;
}
.element1 {
  border-radius: 5px 20px 5px;
  height: 40px;
  background: #91c8e4;
}
.element2 {
  border-radius: 20px 5px;
  height: 40px;
  background: #91c8e4;
}

.logo {
  transform: rotate(0deg);
  transition: transform var(--transition-speed2);
  color: #91c8e4;
}
.menulogo {
  background: #191825;
}
.menulogo:hover .logo {
  transform: rotate(-180deg);
}
</style>
