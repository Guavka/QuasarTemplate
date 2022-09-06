<template>
  <q-toggle
        v-model="darkModelRef"
        :checked-icon="checkedIcon"
        :color="color"
        :unchecked-icon="uncheckedIcon"
        :size="size"
      />
</template>

<script setup lang="ts">

export interface ThemeTogglerProps{
  checkedIcon?:string,
  uncheckedIcon?:string,
  color?:string,
  size?:string
}

withDefaults(defineProps<ThemeTogglerProps>(), {
  checkedIcon: 'dark_mode',
  color: 'green',
  size: 'xl',
  uncheckedIcon: 'light_mode',
});

const $q = useQuasar();
const darkModelRef = ref(false);

const cookieTheme = $q.cookies.get('isDark');
if (cookieTheme) {
  darkModelRef.value = cookieTheme === 'true';
}

watch(darkModelRef, () => {
  $q.dark.toggle();
  $q.cookies.set('isDark', String(darkModelRef.value));
});

</script>

<style scoped>

</style>
