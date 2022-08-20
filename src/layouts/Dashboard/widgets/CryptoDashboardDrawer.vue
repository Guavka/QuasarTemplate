<template>
<q-drawer show-if-above v-model="isLeftDrawerOpen" side="left" elevated>
      <!-- drawer content -->
    </q-drawer>
</template>

<script setup lang="ts">
import { useDashboardLayoutStore } from '../store/dashboardStore';

const store = useDashboardLayoutStore();
const isLeftDrawerOpen = ref(store.isLeftDrawerOpen);
</script>

<style scoped>

</style>
