<template>
  <q-btn color="bgColor" :icon="btnIcon">
    <q-badge color="red" floating>4</q-badge>
    <q-menu transition-show="rotate" transition-hide="rotate">
      <q-list style="min-width: 100px">
        <q-item clickable>
          <q-item-section>Having fun</q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>Crazy for transitions</q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>Mind blown</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup lang="ts">
export interface GoPathBtnProps {
  isSquare?: boolean,
  bgColor?: string,
  btnIcon?: string,
  pathTo?: string
}

withDefaults(
  defineProps<GoPathBtnProps>(),
  {
    bgColor: 'primary',
    btnIcon: 'notifications',
    isSquare: true,
    pathTo: '/',
  },
);
</script>

<style scoped>
</style>
