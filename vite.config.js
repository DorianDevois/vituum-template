import { defineConfig } from 'vite';
import vituum from 'vituum';
import handlebars from '@vituum/vite-plugin-handlebars';
import { handlebarsHelpers } from './src/js/helpers/handlebars/index.js';
import { globalContext } from './src/data/create-context';

export default defineConfig({
  plugins: [
    vituum(),
    handlebars({
      data: [],
      // 👇 глобальні дані (доступні всюди в HBS)
      globals: {
        ...globalContext,
      },
      partials: {
        directory: 'src/partials',
        extname: false, // {{> head}} замість {{'path/to/head.hbs'}}
      },
      // 👇 ТУТ ДОДАЄМО HELPERS
      helpers: handlebarsHelpers,
      // helpers: {
      //   fallback: (value, defaultValue) => {
      //     return value || defaultValue;
      //   },
      //   buildUrl: (base, slug) => {
      //     if (!base && !slug) {
      //       return '';
      //     }

      //     const safeBase = (base || '').toString();
      //     const safeSlug = (slug || '').toString();

      //     const normalizedBase = safeBase.replace(/\/+$/, '');
      //     const normalizedSlug = safeSlug.replace(/^\/+|\/+$/g, '');

      //     if (!normalizedBase && !normalizedSlug) {
      //       return '';
      //     }

      //     if (!normalizedBase) {
      //       return `/${normalizedSlug}/`;
      //     }
      //     if (!normalizedSlug) {
      //       return `${normalizedBase}/`;
      //     }

      //     return `${normalizedBase}/${normalizedSlug}/`;
      //   },
      //   absoluteUrl: (base, path) => {
      //     if (!path) return '';

      //     // якщо вже абсолютний URL — нічого не робимо
      //     if (/^https?:\/\//i.test(path)) {
      //       return path;
      //     }

      //     const normalizedBase = base.replace(/\/+$/, '');
      //     const normalizedPath = path.replace(/^\/+/, '');

      //     return `${normalizedBase}/${normalizedPath}`;
      //   },
      // },
    }),
  ],
});
