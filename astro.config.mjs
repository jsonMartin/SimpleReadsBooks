import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify/functions";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), mdx()],
  // output: 'hybrid',
  // output: "server",

  // adapter: netlify({
  //   edgeMiddleware: true
  // }),

  // redirects: {
  //   "/": "/home"
  // },
  // build: {
  //   rollupOptions: {
  //     external: 'flowbite'
  //     // https://rollupjs.org/configuration-options/
  //   },
  // }
});