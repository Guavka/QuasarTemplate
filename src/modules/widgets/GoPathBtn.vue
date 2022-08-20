<template>
  <q-btn :square="isSquare" :color="bgColor" :icon="btnIcon" :to="pathTo"/>
</template>

<script setup lang="ts">
export interface GoPathBtnProps{
  isSquare?:boolean,
  bgColor?:string,
  btnIcon?:string,
  pathTo?:string
}

withDefaults(
  defineProps<GoPathBtnProps>(),
  {
    bgColor: 'primary',
    btnIcon: 'directions',
    isSquare: true,
    pathTo: '/',
  },
);
</script>

<style scoped>

</style>
