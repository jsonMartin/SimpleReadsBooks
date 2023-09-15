import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_fbf131ab.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_96dc6b5b.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_4e641694.mjs');
const _page1  = () => import('./chunks/index_d0bf5160.mjs');
const _page2  = () => import('./chunks/index_57d5cf8b.mjs');
const _page3  = () => import('./chunks/index_7ff00692.mjs');
const _page4  = () => import('./chunks/index_033f6ebe.mjs');
const _page5  = () => import('./chunks/credits_f2bd8b07.mjs');
const _page6  = () => import('./chunks/privacy_8343d917.mjs');
const _page7  = () => import('./chunks/index_fc2f70b7.mjs');
const _page8  = () => import('./chunks/terms_c4608055.mjs');
const _page9  = () => import('./chunks/index_405171ad.mjs');
const _page10  = () => import('./chunks/hero_5d81c2bc.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/products/index.astro", _page2],["src/pages/products/[id]/index.astro", _page3],["src/pages/contact/index.astro", _page4],["src/pages/credits.astro", _page5],["src/pages/privacy.astro", _page6],["src/pages/about/index.astro", _page7],["src/pages/terms.astro", _page8],["src/pages/home/index.astro", _page9],["src/pages/home/hero.astro", _page10]]);
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
