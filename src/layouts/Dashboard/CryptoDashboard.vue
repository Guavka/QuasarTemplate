<template>
  <q-layout view="lHh lpR lFf">

    <CryptoDashboardHeader/>

    <CryptoDashboardDrawer/>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup lang="ts">

</script>
