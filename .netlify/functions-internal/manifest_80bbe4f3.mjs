import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_96dc6b5b.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3fc75ea0.js"}],"styles":[{"type":"external","src":"/_astro/index.57909e80.css"},{"type":"inline","content":".link-card[data-astro-cid-dohjnao5]{list-style:none;display:flex;padding:1px;background-color:#23262d;background-image:none;background-size:400%;border-radius:7px;background-position:100%;transition:background-position .6s cubic-bezier(.22,1,.36,1);box-shadow:inset 0 0 0 1px #ffffff1a}.link-card[data-astro-cid-dohjnao5]>a[data-astro-cid-dohjnao5]{width:100%;text-decoration:none;line-height:1.4;padding:calc(1.5rem - 1px);border-radius:8px;color:#fff;background-color:#23262d;opacity:.8}h2[data-astro-cid-dohjnao5]{margin:0;font-size:1.25rem;transition:color .6s cubic-bezier(.22,1,.36,1)}p[data-astro-cid-dohjnao5]{margin-top:.5rem;margin-bottom:0}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within){background-position:0;background-image:var(--accent-gradient)}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within) h2[data-astro-cid-dohjnao5]{color:rgb(var(--accent-light))}main[data-astro-cid-j7pv25f6]{margin:auto;padding:1rem;width:800px;max-width:calc(100% - 2rem);color:#fff;font-size:20px;line-height:1.6}.astro-a[data-astro-cid-j7pv25f6]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}h1[data-astro-cid-j7pv25f6]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:1em}.text-gradient[data-astro-cid-j7pv25f6]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.instructions[data-astro-cid-j7pv25f6]{margin-bottom:2rem;border:1px solid rgba(var(--accent-light),25%);background:linear-gradient(rgba(var(--accent-dark),66%),rgba(var(--accent-dark),33%));padding:1.5rem;border-radius:8px}.instructions[data-astro-cid-j7pv25f6] code[data-astro-cid-j7pv25f6]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-j7pv25f6] strong[data-astro-cid-j7pv25f6]{color:rgb(var(--accent-light))}.link-card-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:0}\n.text-shadow{text-shadow:#009933 1px 0 10px}.text-shadow-sm{text-shadow:#fff 1px 0 10px}.text-shadow-black-sm{text-shadow:#000 1px 0 35px}html{height:100vh;background-image:linear-gradient(to bottom,rgba(128,0,0,.9),rgba(128,70,0,.9),rgba(128,128,0,.9),rgba(70,128,0,.9),rgba(0,128,70,.9),rgba(0,0,128,.9),rgba(75,0,130,.9));background-attachment:fixed}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3fc75ea0.js"}],"styles":[{"type":"external","src":"/_astro/index.57909e80.css"},{"type":"inline","content":".text-shadow{text-shadow:#009933 1px 0 10px}.text-shadow-sm{text-shadow:#fff 1px 0 10px}.text-shadow-black-sm{text-shadow:#000 1px 0 35px}html{height:100vh;background-image:linear-gradient(to bottom,rgba(128,0,0,.9),rgba(128,70,0,.9),rgba(128,128,0,.9),rgba(70,128,0,.9),rgba(0,128,70,.9),rgba(0,0,128,.9),rgba(75,0,130,.9));background-attachment:fixed}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/products","type":"page","pattern":"^\\/products\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/products/index.astro","pathname":"/products","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3fc75ea0.js"}],"styles":[{"type":"external","src":"/_astro/index.57909e80.css"},{"type":"inline","content":".text-shadow{text-shadow:#009933 1px 0 10px}.text-shadow-sm{text-shadow:#fff 1px 0 10px}.text-shadow-black-sm{text-shadow:#000 1px 0 35px}html{height:100vh;background-image:linear-gradient(to bottom,rgba(128,0,0,.9),rgba(128,70,0,.9),rgba(128,128,0,.9),rgba(70,128,0,.9),rgba(0,128,70,.9),rgba(0,0,128,.9),rgba(75,0,130,.9));background-attachment:fixed}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n#carousel-wrapper img{-o-object-fit:contain!important;object-fit:contain!important;height:100%!important;width:-moz-fit-content!important;width:fit-content!important;border-radius:.25rem!important}#carousel-wrapper button>img{-o-object-fit:cover!important;object-fit:cover!important}\n"}],"routeData":{"route":"/products/[id]","type":"page","pattern":"^\\/products\\/([^/]+?)\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/products/[id]/index.astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3fc75ea0.js"}],"styles":[{"type":"external","src":"/_astro/index.57909e80.css"},{"type":"inline","content":".text-shadow{text-shadow:#009933 1px 0 10px}.text-shadow-sm{text-shadow:#fff 1px 0 10px}.text-shadow-black-sm{text-shadow:#000 1px 0 35px}html{height:100vh;background-image:linear-gradient(to bottom,rgba(128,0,0,.9),rgba(128,70,0,.9),rgba(128,128,0,.9),rgba(70,128,0,.9),rgba(0,128,70,.9),rgba(0,0,128,.9),rgba(75,0,130,.9));background-attachment:fixed}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/index.astro","pathname":"/contact","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3fc75ea0.js"}],"styles":[{"type":"external","src":"/_astro/index.57909e80.css"},{"type":"inline","content":".text-shadow{text-shadow:#009933 1px 0 10px}.text-shadow-sm{text-shadow:#fff 1px 0 10px}.text-shadow-black-sm{text-shadow:#000 1px 0 35px}html{height:100vh;background-image:linear-gradient(to bottom,rgba(128,0,0,.9),rgba(128,70,0,.9),rgba(128,128,0,.9),rgba(70,128,0,.9),rgba(0,128,70,.9),rgba(0,0,128,.9),rgba(75,0,130,.9));background-attachment:fixed}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/credits","type":"page","pattern":"^\\/credits\\/?$","segments":[[{"content":"credits","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/credits.astro","pathname":"/credits","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3fc75ea0.js"}],"styles":[{"type":"external","src":"/_astro/index.57909e80.css"},{"type":"inline","content":".text-shadow{text-shadow:#009933 1px 0 10px}.text-shadow-sm{text-shadow:#fff 1px 0 10px}.text-shadow-black-sm{text-shadow:#000 1px 0 35px}html{height:100vh;background-image:linear-gradient(to bottom,rgba(128,0,0,.9),rgba(128,70,0,.9),rgba(128,128,0,.9),rgba(70,128,0,.9),rgba(0,128,70,.9),rgba(0,0,128,.9),rgba(75,0,130,.9));background-attachment:fixed}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/privacy","type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3fc75ea0.js"}],"styles":[{"type":"external","src":"/_astro/index.57909e80.css"},{"type":"inline","content":".text-shadow{text-shadow:#009933 1px 0 10px}.text-shadow-sm{text-shadow:#fff 1px 0 10px}.text-shadow-black-sm{text-shadow:#000 1px 0 35px}html{height:100vh;background-image:linear-gradient(to bottom,rgba(128,0,0,.9),rgba(128,70,0,.9),rgba(128,128,0,.9),rgba(70,128,0,.9),rgba(0,128,70,.9),rgba(0,0,128,.9),rgba(75,0,130,.9));background-attachment:fixed}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3fc75ea0.js"}],"styles":[{"type":"external","src":"/_astro/index.57909e80.css"},{"type":"inline","content":".text-shadow{text-shadow:#009933 1px 0 10px}.text-shadow-sm{text-shadow:#fff 1px 0 10px}.text-shadow-black-sm{text-shadow:#000 1px 0 35px}html{height:100vh;background-image:linear-gradient(to bottom,rgba(128,0,0,.9),rgba(128,70,0,.9),rgba(128,128,0,.9),rgba(70,128,0,.9),rgba(0,128,70,.9),rgba(0,0,128,.9),rgba(75,0,130,.9));background-attachment:fixed}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/terms","type":"page","pattern":"^\\/terms\\/?$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.astro","pathname":"/terms","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3fc75ea0.js"}],"styles":[{"type":"external","src":"/_astro/index.57909e80.css"},{"type":"inline","content":".text-shadow{text-shadow:#009933 1px 0 10px}.text-shadow-sm{text-shadow:#fff 1px 0 10px}.text-shadow-black-sm{text-shadow:#000 1px 0 35px}html{height:100vh;background-image:linear-gradient(to bottom,rgba(128,0,0,.9),rgba(128,70,0,.9),rgba(128,128,0,.9),rgba(70,128,0,.9),rgba(0,128,70,.9),rgba(0,0,128,.9),rgba(75,0,130,.9));background-attachment:fixed}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/home","type":"page","pattern":"^\\/home\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home/index.astro","pathname":"/home","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.57909e80.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/home/hero","type":"page","pattern":"^\\/home\\/hero\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}],[{"content":"hero","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home/hero.astro","pathname":"/home/hero","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/about/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/contact/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/contact/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/credits.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/credits@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/home/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/home/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/privacy.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/privacy@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/products/[id]/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/products/[id]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/products/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/products/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/terms.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/terms@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/home/hero.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/home/hero@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/privacy.astro":"chunks/pages/privacy_0ab4db76.mjs","/src/pages/terms.astro":"chunks/pages/terms_2b634f04.mjs","\u0000@astrojs-manifest":"manifest_80bbe4f3.mjs","\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js":"chunks/image-endpoint_4e641694.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_d0bf5160.mjs","\u0000@astro-page:src/pages/products/index@_@astro":"chunks/index_57d5cf8b.mjs","\u0000@astro-page:src/pages/products/[id]/index@_@astro":"chunks/index_7ff00692.mjs","\u0000@astro-page:src/pages/contact/index@_@astro":"chunks/index_033f6ebe.mjs","\u0000@astro-page:src/pages/credits@_@astro":"chunks/credits_f2bd8b07.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"chunks/privacy_8343d917.mjs","\u0000@astro-page:src/pages/about/index@_@astro":"chunks/index_fc2f70b7.mjs","\u0000@astro-page:src/pages/terms@_@astro":"chunks/terms_c4608055.mjs","\u0000@astro-page:src/pages/home/index@_@astro":"chunks/index_405171ad.mjs","\u0000@astro-page:src/pages/home/hero@_@astro":"chunks/hero_5d81c2bc.mjs","/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_b93fd1c9.mjs","/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/components/ButtonBack.svelte":"_astro/ButtonBack.d78352a7.js","/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/layouts/_EmailSubscribeModal.svelte":"_astro/_EmailSubscribeModal.0bb22896.js","/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/products/[id]/_Carousel.svelte":"_astro/_Carousel.ada268ad.js","/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/contact/_Page.svelte":"_astro/_Page.1b339653.js","/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/layouts/_Footer.svelte":"_astro/_Footer.ff737c3a.js","@astrojs/svelte/client.js":"_astro/client.ef651e53.js","/astro/hoisted.js?q=0":"_astro/hoisted.3fc75ea0.js","/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/components/NavBar.svelte":"_astro/NavBar.f1d3669c.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.4d9c6cca.css","/_astro/index.66446ddc.css","/_astro/index.b0b9be6c.css","/_astro/index.57909e80.css","/_astro/index.dd9d6f38.css","/favicon.svg","/_astro/Button.1a458816.js","/_astro/ButtonBack.d78352a7.js","/_astro/Input.eeed0bf3.js","/_astro/Modal.7a14131c.js","/_astro/NavBar.f1d3669c.js","/_astro/ToolbarButton.02e5d9dc.js","/_astro/_Carousel.ada268ad.js","/_astro/_EmailSubscribeModal.0bb22896.js","/_astro/_Footer.ff737c3a.js","/_astro/_Page.1b339653.js","/_astro/client.ef651e53.js","/_astro/hoisted.3fc75ea0.js","/_astro/index.eca9c475.js","/_astro/layoutStore.47a98a10.js","/_astro/tw-merge.3b9a44cf.js","/images/banner.png","/images/dcm-author.png","/images/goodreads-icon.png","/images/hunnie-bunny-2-transparent.png","/images/hunnie-bunny-peering-over.png","/images/hunnie-bunny-reading-a-book-to-mr-squirrel.png","/images/hunnie-bunny-reading-book.png","/images/hunnie-bunny-reading.png","/images/hunnie-bunnys-garden-book-cover-back-1.png","/images/hunnie-bunnys-garden-book-cover-front-1.png","/images/hunnie-bunnys-garden-book-cover.png","/images/hunnie-bunnys-garden-mockup.png","/images/hunnie-bunnys-garden-page-1.png","/images/hunnie-bunnys-garden-page-2.png","/images/logo.png","/images/mr_frog_sitting.png","/images/mr_frog_sitting.svg","/images/mr_squirrel_sitting.png","/images/mr_squirrel_sitting.svg"]});

export { manifest };
