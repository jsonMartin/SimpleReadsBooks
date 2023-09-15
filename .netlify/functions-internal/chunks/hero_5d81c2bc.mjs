export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/hero_2c45f77e.mjs').then(n => n.h);

export { page };
