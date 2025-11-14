// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  // Em vez de gerar tudo estático, vamos rodar como servidor (SSR)
  output: 'server',

  // Adapter Node: gera um app Node pronto pra rodar no Coolify
  adapter: node({
    mode: 'standalone',
  }),
});
