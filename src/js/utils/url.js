// export const buildUrl = (base, slug) => {
//   const normalizedBase = base.replace(/\/+$/, ''); // прибираємо слеш в кінці
//   const normalizedSlug = slug.replace(/^\/+|\/+$/g, ''); // прибираємо слеші з обох боків
//   return `${normalizedBase}/${normalizedSlug}/`;
// };

export const buildUrl = (base, slug) => {
  if (!base && !slug) {
    return '';
  }

  const safeBase = (base || '').toString();
  const safeSlug = (slug || '').toString();

  const normalizedBase = safeBase.replace(/\/+$/, '');
  const normalizedSlug = safeSlug.replace(/^\/+|\/+$/g, '');

  if (!normalizedBase && !normalizedSlug) {
    return '';
  }

  if (!normalizedBase) {
    return `/${normalizedSlug}/`;
  }
  if (!normalizedSlug) {
    return `${normalizedBase}/`;
  }

  return `${normalizedBase}/${normalizedSlug}/`;
};

// export const buildAbsoluteUrl = (base, path) => {
//   if (!path) return '';

//   if (/^https?:\/\//i.test(path)) return path;

//   const normalizedBase = base.replace(/\/+$/, '');
//   const normalizedPath = path.replace(/^\/+/, '');

//   return `${normalizedBase}/${normalizedPath}`;
// };

export const buildAbsUrl = (base, path) => {
  if (!base && !path) {
    return '';
  }

  const safeBase = (base || '').toString();
  const safePath = (path || '').toString();

  if (!safeBase && !safePath) {
    return '';
  }

  // якщо path вже абсолютний URL — повертаємо як є
  if (/^https?:\/\//i.test(safePath)) {
    return safePath;
  }

  const normalizedBase = safeBase.replace(/\/+$/, '');
  const normalizedPath = safePath.replace(/^\/+/, '');

  // якщо є тільки base
  if (!normalizedPath && normalizedBase) {
    return `${normalizedBase}/`;
  }

  // якщо є тільки path
  if (!normalizedBase && normalizedPath) {
    return `/${normalizedPath}`;
  }

  // якщо є обидва
  if (normalizedBase && normalizedPath) {
    return `${normalizedBase}/${normalizedPath}`;
  }

  return '';
};
