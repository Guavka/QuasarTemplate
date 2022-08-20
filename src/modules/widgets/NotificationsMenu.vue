<template>
  <q-btn :color="bgColor" :icon="btnIcon">
    <q-badge :color="badgeColor" floating>{{menuItems.length}}</q-badge>
    <q-menu :transition-show="transitionShow" :transition-hide="transitionHide">
      <q-list style="`min-width: ${minWidth}`" >
        <q-item v-for="item in menuItems" :key="item.label">
          <q-item-section>{{item.label}}</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup lang="ts">
export type TransitionType ='flip-right'|'flip-left'|'scale'|'jump-down'|'jump-up'|'rotate'

export interface GoPathBtnProps {
  menuItems:Record<string, string>[],

  bgColor?: string,
  btnIcon?: string,
  badgeColor?:string
  transitionShow?:TransitionType,
  transitionHide?:TransitionType,
  minWidth?:string,
}

withDefaults(
  defineProps<GoPathBtnProps>(),
  {
    bgColor: 'primary',
    btnIcon: 'notifications',
    badgeColor: 'red',
    transitionShow: 'rotate',
    transitionHide: 'rotate',
    minWidth: '100px',
    menuItems: () => [
      { label: 'Having fun' },
      { label: 'Crazy for transitions' },
      { label: 'Mind blown' },
    ],
  },
);

</script>

<style scoped>
</style>
