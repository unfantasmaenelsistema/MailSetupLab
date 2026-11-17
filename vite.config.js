import { defineConfig } from 'vite';

// App estática (HTML + JS en línea; Lucide desde CDN con versión fija): Vite solo compila Tailwind y
// copia el logo. Base relativa: funciona en GitHub Pages (/MailSetupLab/) y en cualquier subcarpeta.
export default defineConfig({
  base: './',
});
