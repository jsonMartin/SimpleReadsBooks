import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_b9e82044.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_96dc6b5b.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_3a9a13b1.mjs');
const _page1  = () => import('./chunks/index_41dcb94e.mjs');
const _page2  = () => import('./chunks/index_c162c75d.mjs');
const _page3  = () => import('./chunks/index_973df8ca.mjs');
const _page4  = () => import('./chunks/index_90fbdf07.mjs');
const _page5  = () => import('./chunks/credits_fbbede01.mjs');
const _page6  = () => import('./chunks/privacy_5ae68197.mjs');
const _page7  = () => import('./chunks/index_cd064348.mjs');
const _page8  = () => import('./chunks/terms_ed99c532.mjs');
const _page9  = () => import('./chunks/index_8a463db1.mjs');
const _page10  = () => import('./chunks/hero_c1293569.mjs');
const _page11  = () => import('./chunks/404_4fe21769.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/products/index.astro", _page2],["src/pages/products/[id]/index.astro", _page3],["src/pages/contact/index.astro", _page4],["src/pages/credits.astro", _page5],["src/pages/privacy.astro", _page6],["src/pages/about/index.astro", _page7],["src/pages/terms.astro", _page8],["src/pages/home/index.astro", _page9],["src/pages/home/hero.astro", _page10],["src/pages/404.astro", _page11]]);
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
