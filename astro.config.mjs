import { defineConfig } from 'astro/config';

// ANDA — statik site (GF2 "Teknik Dosya Disiplini")
export default defineConfig({
  site: 'https://www.andakimya.com',
  build: { format: 'directory' },
});
