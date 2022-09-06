<template>
  <q-header reveal class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense flat round :icon="menuIcon" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        <q-img :src="logoSrc" style="max-width: 40px;" />
        {{ $t('header.title') }}
      </q-toolbar-title>

      <ThemeToggler/>
      <LocaleSwitcher :label="$t('header.localeSelect.title')" :locale-options="localeOptions"/>
      <GoPathBtn />
      <NotificationsMenu />
      <AccountMenu />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { localeOptions } from 'boot/i18n';
import { useDashboardLayoutStore } from '../store/dashboardStore';

export interface CryptoDashboardHeaderProps {
  menuIcon?: string,
  logoSrc?: string,
}

withDefaults(
  defineProps<CryptoDashboardHeaderProps>(),
  {
    menuIcon: 'menu',
    logoSrc: 'shinigami.ico',
  },
);

const { toggleLeftDrawer } = useDashboardLayoutStore();
</script>

<style scoped>
</style>
