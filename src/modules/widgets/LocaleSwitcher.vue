<template>
  <q-select v-model="locale" :options="localeOptions"
  :label="label" dense borderless
    emit-value map-options options-dense style="min-width: 120px" />
</template>

<script setup lang="ts">

export interface LocaleOptions {
  value: string,
  label: string
}
export interface LocaleSwitcherProps {
  localeOptions: LocaleOptions[],
  label?: string
}

withDefaults(defineProps<LocaleSwitcherProps>(), {
  label: 'Select language',
  localeOptions: () => [
    { value: 'en', label: 'EN' },
    { value: 'ru', label: 'RU' },
  ],
});

const { locale } = useI18n({ useScope: 'global' });
</script>

<style scoped>
</style>
