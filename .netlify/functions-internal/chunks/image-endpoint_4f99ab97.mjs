export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/image-endpoint_4d83abc2.mjs').then(n => n.i);

export { page };
