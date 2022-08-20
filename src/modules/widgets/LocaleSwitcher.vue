<template>
   <q-select
    v-model="locale"
    :options="localeOptions"
    :label="$t('header.localeSelect.title')"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 120px"
  />
</template>

<script setup lang="ts">
import { localeOptions } from 'boot/i18n';

const { locale } = useI18n({ useScope: 'global' });
</script>

<style scoped>

</style>
