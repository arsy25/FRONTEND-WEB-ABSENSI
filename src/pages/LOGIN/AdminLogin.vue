<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md border flex flex-center">
      <q-form>
        <div class="row">
          <div class="col-12 text-center"></div>

          <div class="col-12 text-center">
            <div class="text-h6">LOGIN ADMIN</div>
          </div>
          <div class="col-12 q-mb-md">
            <q-input dense outlined>
              <template v-slot:append> <q-icon name="person" /> </template
            ></q-input>
          </div>
          <div class="col-12">
            <q-input dense outlined></q-input>
          </div>
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script></script>

<style>
.border {
  background: transparent;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgb(0, 0, 0);
}
</style>
