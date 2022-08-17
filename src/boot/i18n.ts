import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('../../locales/*.y(a)?ml', { eager: true }),
  )
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml');
      return [key.slice(14, yaml ? -5 : -4), value.default];
    }),
);

export default boot(({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);
});
