import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_c849480a.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_e4236064.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_8c5b9ae6.mjs');
const _page1  = () => import('./chunks/index_a8eabc95.mjs');
const _page2  = () => import('./chunks/index_6f7f3dc5.mjs');
const _page3  = () => import('./chunks/index_ecc289ad.mjs');
const _page4  = () => import('./chunks/credits_3be10256.mjs');
const _page5  = () => import('./chunks/privacy_bc54ca30.mjs');
const _page6  = () => import('./chunks/index_bc7c1d31.mjs');
const _page7  = () => import('./chunks/terms_b4f3a4b0.mjs');
const _page8  = () => import('./chunks/index_65b99dbd.mjs');
const _page9  = () => import('./chunks/404_ccbd410d.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/products/index.astro", _page1],["src/pages/products/[id]/index.astro", _page2],["src/pages/contact/index.astro", _page3],["src/pages/credits.astro", _page4],["src/pages/privacy.astro", _page5],["src/pages/about/index.astro", _page6],["src/pages/terms.astro", _page7],["src/pages/home/index.astro", _page8],["src/pages/404.astro", _page9]]);
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
