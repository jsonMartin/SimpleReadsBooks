import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_803928cb.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_69bb835f.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_6d1697c8.mjs');
const _page1  = () => import('./chunks/index_e0210fab.mjs');
const _page2  = () => import('./chunks/index_3037da84.mjs');
const _page3  = () => import('./chunks/index_028657a5.mjs');
const _page4  = () => import('./chunks/credits_d22773be.mjs');
const _page5  = () => import('./chunks/privacy_9c7aa116.mjs');
const _page6  = () => import('./chunks/index_ebb691a7.mjs');
const _page7  = () => import('./chunks/terms_931cf1e1.mjs');
const _page8  = () => import('./chunks/index_1f5eff2c.mjs');
const _page9  = () => import('./chunks/404_519b4eeb.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.1.4/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/products/index.astro", _page1],["src/pages/products/[id]/index.astro", _page2],["src/pages/contact/index.astro", _page3],["src/pages/credits.astro", _page4],["src/pages/privacy.astro", _page5],["src/pages/about/index.astro", _page6],["src/pages/terms.astro", _page7],["src/pages/home/index.astro", _page8],["src/pages/404.astro", _page9]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
