<template>
  <q-layout view="lHh Lpr lFf" class="bglay">
    <q-card flat class="navbartop">
      <!--ini toolbarnya-->
      <div class="row q-pa-md flex flex-center">
        <div class="col">sample logo</div>
        <div class="col">sample</div>
        <div class="col">sample</div>
        <div class="col">sample author</div>
        <q-icon
          class="flex flex-center"
          name="menu"
          v-for="size in ['md']"
          :key="size"
          :size="size"
          @click="drawer = !drawer"
        ></q-icon>
      </div>
    </q-card>

    <q-drawer
      v-model="drawer"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="250"
      :breakpoint="500"
      class="menulogo"
    >
      <q-list class="q-pa-md q-gutter-md">
        <q-item>
          <q-item-section avatar>
            <q-icon
              name="double_arrow"
              class="logo"
              v-for="size in ['md']"
              :key="size"
              :size="size"
            />
          </q-item-section>
        </q-item>
        <q-item
          :to="{ name: 'author' }"
          clickable
          v-ripple
          class="menulink element1 shadow-10"
        >
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>Author Profile</q-item-section>
        </q-item>

        <q-item
          :to="{ name: 'qna' }"
          clickable
          v-ripple
          class="element2 menulink shadow-10"
        >
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>
          <q-item-section> QNA </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="element1 menulink shadow-10">
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>
          <q-item-section> Inbox </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="menulink element2 shadow-10">
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>
          <q-item-section> Inbox </q-item-section>
        </q-item>
        <q-separator class="bg-cyan-4" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import "bootstrap-icons/font/bootstrap-icons.css";

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
.bglay {
  background: #191825;
}

.navbartop {
  background: #191825;
  background-size: 100%;
}
.navbarmenu {
  background: #191825;
}
.textmenu {
  color: var(--text-menu);
  font-family: sans-serif;
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
  background: #91c8e4;
}
.element2 {
  border-radius: 20px 5px;
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

.menulink {
  align-items: center;
  height: 5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  color: var(--text-primary);
  filter: grayscale(5%) opacity(1);
  transition: var(--transition-speed);
}
.menulink:hover {
  filter: grayscale(0%) opacity(1);
  background: var(--bg-secondary);
  color: var(--text-secondary);
  transition: var(--transition-speed2);
  font-weight: 900;
}
</style>
