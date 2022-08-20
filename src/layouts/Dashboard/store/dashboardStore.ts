import { defineStore } from 'pinia';

export const useDashboardLayoutStore = defineStore('dashboardLayoutStore', () => {
  const isLeftDrawerOpenState = ref(false);
  const isLeftDrawerOpen = computed(() => isLeftDrawerOpenState);
  function toggleLeftDrawer() { isLeftDrawerOpenState.value = !isLeftDrawerOpenState.value; }

  const isRightDrawerOpenState = ref(false);
  const isRightDrawerOpen = computed(() => isRightDrawerOpenState);
  function toggleRightDrawer() { isRightDrawerOpenState.value = !isRightDrawerOpenState.value; }

  return {
    isLeftDrawerOpen,
    isRightDrawerOpen,

    toggleLeftDrawer,
    toggleRightDrawer,
  };
});
