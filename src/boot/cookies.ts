import { Cookies } from 'quasar';
import { boot } from 'quasar/wrappers';

export default boot(({ ssrContext }) => {
  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies; // otherwise we're on client

  // "cookies" is equivalent to the global import as in non-SSR builds
});
