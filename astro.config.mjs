import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://newmecorlu.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
