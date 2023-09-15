/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, f as renderTransition, F as Fragment, u as unescapeHTML } from '../astro_96dc6b5b.mjs';
import 'clsx';
import { $ as $$Layout, c as create_ssr_component, a as add_attribute, v as validate_component, b as Badge, d as Card, H as Heading, S as Span, C as CldImage, e as compute_rest_props, g as getContext, s as spread, f as escape_object, h as escape_attribute_value, i as Carousel, B as Button, T as Thumbnails, j as ButtonBack, M as Modal, L as Label, I as Input, k as Textarea } from './credits_3294e4e1.mjs';
/* empty css                           */import { B as ButtonAmazon, $ as $$Hero } from './hero_2c45f77e.mjs';
/* empty css                           */import { twMerge } from 'tailwind-merge';
/* empty css                           */
const $$Astro$6 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5><a${addAttribute(href, "href")} data-astro-cid-dohjnao5><h2 data-astro-cid-dohjnao5>${title}<span data-astro-cid-dohjnao5>&rarr;</span></h2><p data-astro-cid-dohjnao5>${body}</p></a></li>`;
}, "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/components/Card.astro", void 0);

const $$Astro$5 = createAstro();
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$5;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-j7pv25f6><svg class="astro-a" width="495" height="623" viewBox="0 0 495 623" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-j7pv25f6><path fill-rule="evenodd" clip-rule="evenodd" d="M167.19 364.254C83.4786 364.254 0 404.819 0 404.819C0 404.819 141.781 19.4876 142.087 18.7291C146.434 7.33701 153.027 0 162.289 0H332.441C341.703 0 348.574 7.33701 352.643 18.7291C352.92 19.5022 494.716 404.819 494.716 404.819C494.716 404.819 426.67 364.254 327.525 364.254L264.41 169.408C262.047 159.985 255.147 153.581 247.358 153.581C239.569 153.581 232.669 159.985 230.306 169.408L167.19 364.254ZM160.869 530.172C160.877 530.18 160.885 530.187 160.894 530.195L160.867 530.181C160.868 530.178 160.868 530.175 160.869 530.172ZM136.218 411.348C124.476 450.467 132.698 504.458 160.869 530.172C160.997 529.696 161.125 529.242 161.248 528.804C161.502 527.907 161.737 527.073 161.917 526.233C165.446 509.895 178.754 499.52 195.577 500.01C211.969 500.487 220.67 508.765 223.202 527.254C224.141 534.12 224.23 541.131 224.319 548.105C224.328 548.834 224.337 549.563 224.347 550.291C224.563 566.098 228.657 580.707 237.264 593.914C245.413 606.426 256.108 615.943 270.749 622.478C270.593 621.952 270.463 621.508 270.35 621.126C270.045 620.086 269.872 619.499 269.685 618.911C258.909 585.935 266.668 563.266 295.344 543.933C298.254 541.971 301.187 540.041 304.12 538.112C310.591 533.854 317.059 529.599 323.279 525.007C345.88 508.329 360.09 486.327 363.431 457.844C364.805 446.148 363.781 434.657 359.848 423.275C358.176 424.287 356.587 425.295 355.042 426.275C351.744 428.366 348.647 430.33 345.382 431.934C303.466 452.507 259.152 455.053 214.03 448.245C184.802 443.834 156.584 436.019 136.218 411.348Z" fill="url(#paint0_linear_1805_24383)" data-astro-cid-j7pv25f6></path><defs data-astro-cid-j7pv25f6><linearGradient id="paint0_linear_1805_24383" x1="247.358" y1="0" x2="247.358" y2="622.479" gradientUnits="userSpaceOnUse" data-astro-cid-j7pv25f6><stop stop-opacity="0.9" data-astro-cid-j7pv25f6></stop><stop offset="1" stop-opacity="0.2" data-astro-cid-j7pv25f6></stop></linearGradient></defs></svg><h1 data-astro-cid-j7pv25f6>Welcome to <span class="text-gradient" data-astro-cid-j7pv25f6>Astro</span></h1><p class="instructions" data-astro-cid-j7pv25f6>
To get started, open the directory <code data-astro-cid-j7pv25f6>src/pages</code> in your project.<br data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
</p><ul role="list" class="link-card-grid" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Card", $$Card, { "href": "https://docs.astro.build/", "title": "Documentation", "body": "Learn how Astro works and explore the official API docs.", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/integrations/", "title": "Integrations", "body": "Supercharge your project with new frameworks and libraries.", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/themes/", "title": "Themes", "body": "Explore a galaxy of community-built starter themes.", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/chat/", "title": "Community", "body": "Come say hi to our amazing Discord community. \u2764\uFE0F", "data-astro-cid-j7pv25f6": true })}</ul></main>` })}`;
}, "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/index.astro", void 0);

const $$file$5 = "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/index.astro";
const $$url$5 = "";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$5,
	file: $$file$5,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

/* src/components/AvailableInFormat.svelte generated by Svelte v4.2.0 */

const AvailableInFormat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { showText = true } = $$props;
	let { color = "green" } = $$props;
	let { divClass = "" } = $$props;
	if ($$props.showText === void 0 && $$bindings.showText && showText !== void 0) $$bindings.showText(showText);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);

	return `<div${add_attribute("class", divClass, 0)}>${showText
	? `<span class="text-xs font-light align-middle" data-svelte-h="svelte-1s6rzpl">Available in</span>`
	: ``} ${validate_component(Badge, "Badge").$$render($$result, { color }, {}, {
		default: () => {
			return `Hardcover`;
		}
	})} ${validate_component(Badge, "Badge").$$render($$result, { color }, {}, {
		default: () => {
			return `Paperback`;
		}
	})} ${validate_component(Badge, "Badge").$$render($$result, { color }, {}, {
		default: () => {
			return `Kindle`;
		}
	})}</div>`;
});

const products = {
  "hunnie-bunnys-garden": {
    "id": "hunnie-bunnys-garden",
    "title": "Hunnie Bunny's Garden",
    "description": "Hunnie Bunny’s Garden is an enchanting picture book that brings children closer to nature, instills valuable virtues and ignites a sense of responsibility towards our environment.\n\nThrough the endearing character of Hunnie Bunny, it’s a delightful blend of entertainment and education. This book also promotes discussions about nature, gardening, sustainability, and healthy eating. If you are looking for a children’s book that offers both a charming story and important life lessons, Hunnie Bunny’s Garden is the book for you!",
    "price": "20.99",
    "type": "book",
    "images": [
      {
        "title": 0,
        "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/Hunnie_Bunny_s_Garden_book_cover-front_for_website_kmqcj0.png"
      },
      {
        "title": 1,
        "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/Hunnie_Bunny_s_Garden_Page_2_for_website_avi9cm.png"
      },
      {
        "title": 2,
        "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/hunnie-bunnys-garden-page-1.png"
      },
      {
        "title": 3,
        "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/hunnie-bunny-book-cover-back.png"
      }
    ],
    "release_date": "2023-08-15",
    "disabled": false
  },
  "hunnie-bunnys-garden-mystery": {
    "id": "hunnie-bunnys-garden-mystery",
    "title": "Hunnie Bunny's Garden Mystery",
    "price": "20.99",
    "description": `Hunnie Bunny’s Garden Mystery is a charming tale that takes young readers on an adventure with Hunnie Bunny and her woodland friends.
 It not only entertains, but also teaches valuable lessons about friendship, communication, and understanding. It will inspire children to develop strong relationships, and approach life’s challenges with a positive and compassionate mindset.
 Through colorful illustrations and engaging storytelling, this book captivates young minds and leaves them with a heartwarming message.  `,
    "release_date": "2023-08-15",
    "disabled": false,
    "images": [
      {
        "title": 0,
        "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1694474872/Hunnie_Bunnys_Garden_Mystery_Book_Cover_Front_tcnuvs.png"
      },
      {
        "title": 1,
        "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1694474914/Hunnie_Bunnys_Garden_Mystery_Book_Cover_Back_hhjwwy.png"
      },
      {
        "title": 2,
        "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1694474999/Hunnie_Bunny_s_Garden_Mystery_Page_2_qs2ost.png"
      },
      {
        "title": 3,
        "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1694475000/Hunnie_Bunny_s_Garden_Mystery_Page_3_nrdtz0.png"
      },
      {
        "title": 4,
        "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1694475001/Hunnie_Bunny_s_Garden_Mystery_Page_4_elvp0m.png"
      }
    ]
  }
};
const getProduct = (id) => {
  debugger;
  return products[id];
};

const $$Astro$4 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$4;
  console.log("Products:", products);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Books & Products" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 class="text-5xl sm:text-6xl md:text-7xl text-center font-bold mt-4 md:mt-8">Books</h1><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 md:gap-8 justify-items-center mt-4 sm:mt-6 md:mt-10 mx-3 sm:mx-4 md:mx-6">${Object.values(products).map((product, i) => {
    return renderTemplate`${renderComponent($$result2, "Card", Card, { "padding": "none", "class": "h-fit" }, { "default": ($$result3) => renderTemplate`<a${addAttribute("/products/" + product.id, "href")} class="flex justify-center items-center"><img class="rounded-t-lg object-cover w-full"${addAttribute(product.images[0].src, "src")}${addAttribute("Product image" + i, "alt")} loading="lazy"${addAttribute(renderTransition($$result3, "uhj5q3gz", "", product.id), "data-astro-transition-scope")}></a><div class="px-5 py-5 pt-2"><h1 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.title}${renderComponent($$result3, "AvailableInFormat", AvailableInFormat, { "divClass": "pt-0 -mt-[8px]", "showText": false })}</h1><p class="text-sm text-gray-400 mt-1.5 sm:mt-3">${product.description.split("\n")[0]}</p><div class="flex justify-between items-center mt-5"><span class="text-xl font-medium text-gray-900 dark:text-white">
$${product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span><div${addAttribute(renderTransition($$result3, "7tho27qi", "", "amazon-button" + product.id), "data-astro-transition-scope")}>${renderComponent($$result3, "ButtonAmazon", ButtonAmazon, { "size": "xs" })}</div></div></div>` })}`;
  })}</div><h1 class="text-5xl sm:text-6xl md:text-7xl text-center font-bold mt-4 md:mt-10 mb-4 lg:mb-8">Products</h1>${renderComponent($$result2, "Heading", Heading, { "tag": "h1", "class": "mb-0 animate-bounce text-center", "customSize": "text-2xl font-extrabold sm:text-4xl md:text-5xl" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Span", Span, { "gradient": true }, { "default": ($$result4) => renderTemplate`Coming soon...` })}` })}${renderComponent($$result2, "CldImage", CldImage, { "width": 2100, "height": "100%", "aspectRatio": 2100 / 1500, "src": "hunnie-bunny-reading-a-book-to-mr-squirrel", "quality": 80, "class": "w-full !p-1 sm:!p-8 md:!p-24 md:!-mb-20 block !-mt-4 sm:!-mt-8 md:!-mt-24 !mb-0 !pb-0 !h-[100%] !object-contain" })}` })}`;
}, "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/products/index.astro", "self");

const $$file$4 = "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/products/index.astro";
const $$url$4 = "/products";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$4,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

/* node_modules/flowbite-svelte-icons/dist/CaretLeftOutline.svelte generated by Svelte v4.2.0 */

const CaretLeftOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["size","role","strokeLinecap","strokeLinejoin","strokeWidth","ariaLabel"]);
	const ctx = getContext("iconCtx") ?? {};

	const sizes = {
		xs: "w-3 h-3",
		sm: "w-4 h-4",
		md: "w-5 h-5",
		lg: "w-6 h-6",
		xl: "w-8 h-8"
	};

	let { size = ctx.size || "md" } = $$props;
	let { role = ctx.role || "img" } = $$props;
	let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
	let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
	let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
	let { ariaLabel = "caret left outline" } = $$props;
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
	if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0) $$bindings.strokeLinecap(strokeLinecap);
	if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0) $$bindings.strokeLinejoin(strokeLinejoin);
	if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);

	return `<svg${spread(
		[
			{ xmlns: "http://www.w3.org/2000/svg" },
			{ fill: "none" },
			escape_object($$restProps),
			{
				class: escape_attribute_value(twMerge('shrink-0', sizes[size], $$props.class))
			},
			{ role: escape_attribute_value(role) },
			{
				"aria-label": escape_attribute_value(ariaLabel)
			},
			{ viewBox: "0 0 10 16" }
		],
		{}
	)}><path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M7.293 2.18 1.707 7.474a.923.923 0 0 0-.293.67c0 .251.106.492.293.67l5.586 5.294a1.046 1.046 0 0 0 1.09.205.99.99 0 0 0 .448-.349.913.913 0 0 0 .169-.526V2.85a.913.913 0 0 0-.169-.527.99.99 0 0 0-.448-.349 1.051 1.051 0 0 0-.578-.053 1.018 1.018 0 0 0-.512.259Z"></path></svg> `;
});

/* node_modules/flowbite-svelte-icons/dist/CaretRightOutline.svelte generated by Svelte v4.2.0 */

const CaretRightOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["size","role","strokeLinecap","strokeLinejoin","strokeWidth","ariaLabel"]);
	const ctx = getContext("iconCtx") ?? {};

	const sizes = {
		xs: "w-3 h-3",
		sm: "w-4 h-4",
		md: "w-5 h-5",
		lg: "w-6 h-6",
		xl: "w-8 h-8"
	};

	let { size = ctx.size || "md" } = $$props;
	let { role = ctx.role || "img" } = $$props;
	let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
	let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
	let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
	let { ariaLabel = "caret right outline" } = $$props;
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
	if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0) $$bindings.strokeLinecap(strokeLinecap);
	if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0) $$bindings.strokeLinejoin(strokeLinejoin);
	if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);

	return `<svg${spread(
		[
			{ xmlns: "http://www.w3.org/2000/svg" },
			{ fill: "none" },
			escape_object($$restProps),
			{
				class: escape_attribute_value(twMerge('shrink-0', sizes[size], $$props.class))
			},
			{ role: escape_attribute_value(role) },
			{
				"aria-label": escape_attribute_value(ariaLabel)
			},
			{ viewBox: "0 0 10 16" }
		],
		{}
	)}><path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="m2.707 14.108 5.586-5.294a.923.923 0 0 0 .293-.67.923.923 0 0 0-.293-.67L2.707 2.18a1.018 1.018 0 0 0-.512-.26 1.051 1.051 0 0 0-.578.054.99.99 0 0 0-.448.35A.913.913 0 0 0 1 2.85v10.588c0 .187.059.37.169.526a.99.99 0 0 0 .448.35c.183.07.384.09.578.053a1.02 1.02 0 0 0 .512-.26Z"></path></svg> `;
});

/* node_modules/flowbite-svelte-icons/dist/CheckSolid.svelte generated by Svelte v4.2.0 */

const CheckSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["size","role","ariaLabel"]);
	const ctx = getContext("iconCtx") ?? {};

	const sizes = {
		xs: "w-3 h-3",
		sm: "w-4 h-4",
		md: "w-5 h-5",
		lg: "w-6 h-6",
		xl: "w-8 h-8"
	};

	let { size = ctx.size || "md" } = $$props;
	let { role = ctx.role || "img" } = $$props;
	let { ariaLabel = "check solid" } = $$props;
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);

	return `<svg${spread(
		[
			{ xmlns: "http://www.w3.org/2000/svg" },
			{ fill: "currentColor" },
			escape_object($$restProps),
			{
				class: escape_attribute_value(twMerge('shrink-0', sizes[size], $$props.class))
			},
			{ role: escape_attribute_value(role) },
			{
				"aria-label": escape_attribute_value(ariaLabel)
			},
			{ viewBox: "0 0 17 12" }
		],
		{}
	)}><path fill="currentColor" d="M5.667 11.875h-.015a1 1 0 0 1-.714-.314L.272 6.6a1 1 0 1 1 1.456-1.372l3.959 4.207 8.6-8.643a1 1 0 1 1 1.418 1.41l-9.33 9.378a.991.991 0 0 1-.708.295Z"></path></svg> `;
});

/* node_modules/flowbite-svelte-icons/dist/ExclamationCircleSolid.svelte generated by Svelte v4.2.0 */

const ExclamationCircleSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["size","role","ariaLabel"]);
	const ctx = getContext("iconCtx") ?? {};

	const sizes = {
		xs: "w-3 h-3",
		sm: "w-4 h-4",
		md: "w-5 h-5",
		lg: "w-6 h-6",
		xl: "w-8 h-8"
	};

	let { size = ctx.size || "md" } = $$props;
	let { role = ctx.role || "img" } = $$props;
	let { ariaLabel = "exclamation circle solid" } = $$props;
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);

	return `<svg${spread(
		[
			{ xmlns: "http://www.w3.org/2000/svg" },
			{ fill: "currentColor" },
			escape_object($$restProps),
			{
				class: escape_attribute_value(twMerge('shrink-0', sizes[size], $$props.class))
			},
			{ role: escape_attribute_value(role) },
			{
				"aria-label": escape_attribute_value(ariaLabel)
			},
			{ viewBox: "0 0 20 20" }
		],
		{}
	)}><path fill="currentColor" d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"></path></svg> `;
});

/* node_modules/flowbite-svelte-icons/dist/PenSolid.svelte generated by Svelte v4.2.0 */

const PenSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["size","role","ariaLabel"]);
	const ctx = getContext("iconCtx") ?? {};

	const sizes = {
		xs: "w-3 h-3",
		sm: "w-4 h-4",
		md: "w-5 h-5",
		lg: "w-6 h-6",
		xl: "w-8 h-8"
	};

	let { size = ctx.size || "md" } = $$props;
	let { role = ctx.role || "img" } = $$props;
	let { ariaLabel = "pen solid" } = $$props;
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);

	return `<svg${spread(
		[
			{ xmlns: "http://www.w3.org/2000/svg" },
			{ fill: "currentColor" },
			escape_object($$restProps),
			{
				class: escape_attribute_value(twMerge('shrink-0', sizes[size], $$props.class))
			},
			{ role: escape_attribute_value(role) },
			{
				"aria-label": escape_attribute_value(ariaLabel)
			},
			{ viewBox: "0 0 20 20" }
		],
		{}
	)}><path fill="currentColor" d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z"></path></svg> `;
});

/* src/pages/products/[id]/_Carousel.svelte generated by Svelte v4.2.0 */

const css = {
	code: "#carousel-wrapper img{object-fit:contain !important;height:100% !important;width:fit-content !important;border-radius:0.25rem !important}#carousel-wrapper button > img{object-fit:cover !important}",
	map: null
};

const Carousel_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { images } = $$props;
	let index = 0;
	if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
	$$result.css.add(css);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `<div class="max-w-4xl space-y-4">${validate_component(Carousel, "Carousel").$$render(
			$$result,
			{
				images,
				classSlide: "flex items-center justify-center h-[100%] w-[100%] !rounded-none !bg-transparent",
				class: "w-[100%] !h-[300px] sm:!h-[400px] !rounded-none !bg-transparent",
				index
			},
			{
				index: $$value => {
					index = $$value;
					$$settled = false;
				}
			},
			{
				default: ({ Indicators, Controls }) => {
					return `${validate_component(Controls, "Controls").$$render($$result, {}, {}, {
						default: ({ changeSlide, ControlButton }) => {
							return `${validate_component(Button, "Button").$$render(
								$$result,
								{
									pill: true,
									class: "p-2 absolute top-1/2 -translate-y-1/2 left-4 font-bold opacity-70"
								},
								{},
								{
									default: () => {
										return `${validate_component(CaretLeftOutline, "CaretLeftOutline").$$render($$result, { class: "pr-[4px]" }, {}, {})}`;
									}
								}
							)} ${validate_component(Button, "Button").$$render(
								$$result,
								{
									pill: true,
									class: "p-2 absolute top-1/2 -translate-y-1/2 right-4 font-bold opacity-70"
								},
								{},
								{
									default: () => {
										return `${validate_component(CaretRightOutline, "CaretRightOutline").$$render($$result, { class: "pl-[4px]" }, {}, {})}`;
									}
								}
							)}`;
						}
					})}`;
				}
			}
		)} ${validate_component(Thumbnails, "Thumbnails").$$render(
			$$result,
			{
				class: "bg-transparent gap-3",
				images,
				index
			},
			{
				index: $$value => {
					index = $$value;
					$$settled = false;
				}
			},
			{
				default: ({ Thumbnail, image, selected }) => {
					return `${validate_component(Thumbnail, "Thumbnail").$$render(
						$$result,
						Object.assign({}, image, { selected }, {
							class: "rounded-md shadow-xl hover:outline hover:outline-primary-500"
						}),
						{},
						{}
					)}`;
				}
			}
		)} </div>`;
	} while (!$$settled);

	return $$rendered;
});

function wrapTextInParagraphTags(text) {
  return text.split("\n").map((line) => `<p>${line}</p>`).join("");
}

const $$Astro$3 = createAstro();
function getStaticPaths() {
  return [{ params: { id: "hunnie-bunnys-garden" } }, { params: { id: "hunnie-bunnys-garden-mystery" } }];
}
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  const { id } = Astro2.params;
  const product = getProduct(id);
  const isBook = product?.type === "book";
  return renderTemplate`<!--
          // <Carousel
          //   client:load
          //   images={product.images}
          //   showCaptions={false}
          //   showIndicators={false}
          //   classSlide="flex items-center justify-center h-[100%] w-[100%] !rounded-none !bg-transparent"
          //   classDiv="w-[100%] !h-[300px] sm:!h-[400px] !rounded-none !bg-transparent"
          //   classImg="!bg-none rounded-md animate-[fadeIn_.2s_ease-in-out_1] h-full"
          //   classThumb="p-0 rounded-md shadow-xl hover:outline hover:outline-primary-500"
          //   classThumbDiv="bg-transparent"
          //   thumbBtnClass="m-2"
          //   indicatorDivClass="bg-gray-500"
          //   indicatorClass="bg-purple-500"
          // /> --><!-- ID: {id} --><!-- product: {JSON.stringify(product)} -->${product ? renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": product.title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-1 w-full justiy-center items-center justify-items-center"><div id="carousel-wrapper" class="dark m-2 sm:m-6 md:m-10"${addAttribute(renderTransition($$result2, "li6hphhb", "", product.id), "data-astro-transition-scope")}>${renderComponent($$result2, "Carousel", Carousel_1, { "images": product.images, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/products/[id]/_Carousel.svelte", "client:component-export": "default" })}</div><div class="bg-gray-100 p-8 sm:p-10 md:p-16 prose prose-sm sm:prose-xs sm:m-5 md:m-8 lg:m-10"><h1 class="text-2xl sm:text-3xl">${product.title}</h1>${isBook ? renderTemplate`<div class="pt-0 mt-[-20px]"><span class="text-xs font-light align-middle">Available in </span>${renderComponent($$result2, "Badge", Badge, { "color": "green" }, { "default": ($$result3) => renderTemplate`Hardcover` })}${renderComponent($$result2, "Badge", Badge, { "color": "green" }, { "default": ($$result3) => renderTemplate`Paperback` })}${renderComponent($$result2, "Badge", Badge, { "color": "green" }, { "default": ($$result3) => renderTemplate`Kindle` })}</div>` : null}${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(wrapTextInParagraphTags(product.description))}` })}<h2 class="p-0 mt-[5px]">$${product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h2><div${addAttribute(renderTransition($$result2, "tps3gu27", "", "amazon-button" + product.id), "data-astro-transition-scope")}>${renderComponent($$result2, "ButtonAmazon", ButtonAmazon, { "fullWidth": true })}</div></div></div>` })}` : renderTemplate`<div class="text-center pt-2"><h1 class="text-3xl sm:text-4xl text-center text-red-500 flex flex-row justify-center items-center">${renderComponent($$result, "ExclamationCircleSolid", ExclamationCircleSolid, { "class": "inline-block w-6 h-6 sm:w-8 sm:h-8 mr-2" })}
No product found
</h1><h6 class="text-md text-center">We couldn't find a match based on the provided product ID.</h6>${renderComponent($$result, "ButtonBack", ButtonBack, {})}</div>`}`;
}, "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/products/[id]/index.astro", "self");

const $$file$3 = "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/products/[id]/index.astro";
const $$url$3 = "/products/[id]";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$3,
	file: $$file$3,
	getStaticPaths,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

/* src/pages/contact/_Page.svelte generated by Svelte v4.2.0 */

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let isEmailValid;
	let isSubjectValid;
	let isMessageValid;
	let isFormValid;
	const form = { email: "", subject: "", message: "" };

	const isValidEmail = email => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
		return re.test(String(email).toLowerCase());
	};

	let confirmModal = false;

	let $$settled;
	let $$rendered;

	do {
		$$settled = true;
		isEmailValid = isValidEmail(form.email);
		isSubjectValid = form.subject.length > 3;
		isMessageValid = form.message.length > 5;
		isFormValid = isEmailValid && isSubjectValid && isMessageValid;

		$$rendered = `${validate_component(Modal, "Modal").$$render(
			$$result,
			{
				size: "xs",
				autoclose: true,
				open: confirmModal
			},
			{
				open: $$value => {
					confirmModal = $$value;
					$$settled = false;
				}
			},
			{
				default: () => {
					return `<div class="text-center">${validate_component(CheckSolid, "CheckSolid").$$render(
						$$result,
						{
							class: "mx-auto mb-4 w-14 h-14 text-green-600 dark:text-green-400"
						},
						{},
						{}
					)} <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-zjgr5a">Your message has been sent successfully.
			<br><br>
			We will get back to you soon 😊</h3> ${validate_component(Button, "Button").$$render($$result, { color: "green", class: "mr-2" }, {}, {
						default: () => {
							return `OK`;
						}
					})}</div>`;
				}
			}
		)} ${($$result.head += '<!-- HEAD_svelte-rg684o_START -->' + `${($$result.title = `<title>Contact</title>`, "")}` + '<!-- HEAD_svelte-rg684o_END -->', "")} <section class="bg-white dark:bg-gray-900"><div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md !pt-8"><h2 class="mb-4 text-5xl sm:text-6xl md:text-7xl tracking-tight font-bold text-center text-gray-900 dark:text-white" data-svelte-h="svelte-1onfpeg">Contact Us</h2> <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl" data-svelte-h="svelte-7mldmu">Have any questions or comments? Let us know how we can help.</p> <form id="contact-form" name="contact" method="POST" class="space-y-8"><div><label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" data-svelte-h="svelte-18o4z4r">Your email</label> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
			default: () => {
				return `${validate_component(Input, "Input").$$render(
					$$result,
					{
						type: "email",
						name: "email",
						placeholder: "yourname@gmail.com",
						size: "md",
						color: form.email.length === 0
						? 'base'
						: isEmailValid ? 'green' : 'red',
						value: form.email
					},
					{
						value: $$value => {
							form.email = $$value;
							$$settled = false;
						}
					},
					{
						left: () => {
							return `<svg slot="left" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>`;
						}
					}
				)}`;
			}
		})}</div> <div><label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" data-svelte-h="svelte-15spobe">Subject</label> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
			default: () => {
				return `${validate_component(Input, "Input").$$render(
					$$result,
					{
						type: "text",
						name: "subject",
						placeholder: "Subject",
						size: "md",
						color: form.subject.length === 0
						? 'base'
						: isSubjectValid ? 'green' : 'red',
						value: form.subject
					},
					{
						value: $$value => {
							form.subject = $$value;
							$$settled = false;
						}
					},
					{
						left: () => {
							return `${validate_component(PenSolid, "PenSolid").$$render($$result, { slot: "left", class: "w-5 h-5" }, {}, {})}`;
						}
					}
				)}`;
			}
		})}</div> <div class="sm:col-span-2"><label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400" data-svelte-h="svelte-1tpugrs">Your message</label> ${validate_component(Textarea, "Textarea").$$render(
			$$result,
			{
				type: "text",
				name: "message",
				id: "message",
				rows: "6",
				placeholder: "Leave a comment...",
				value: form.message
			},
			{
				value: $$value => {
					form.message = $$value;
					$$settled = false;
				}
			},
			{}
		)}</div> <button type="submit"${add_attribute("class", 'py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' + ' ' + (!isFormValid && 'opacity-40'), 0)} color="primary" ${!isFormValid ? "disabled" : ""}>Send message</button></form></div></section>`;
	} while (!$$settled);

	return $$rendered;
});

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Page", Page, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/contact/_Page.svelte", "client:component-export": "default" })}` })}`;
}, "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/contact/index.astro", void 0);

const $$file$2 = "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/contact/index.astro";
const $$url$2 = "/contact";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  console.log("Hello from ASTRO");
  console.log((Object.assign({"PUBLIC_VITE_PUBLIC_CLOUDINARY_CLOUD_NAME":"simple-reads-books","BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":undefined,"ASSETS_PREFIX":undefined},{})));
  debugger;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Simple Reads Books" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<article class="prose prose-lg sm:prose-xl md:prose-2xl w-full m-auto max-w-4xl p-2 !pb-0 md:p-0 pt-5 md:pt-8"><h1 class="text-center font-bold text-5xl sm:text-6xl md:text-7xl">About Us</h1><div>${renderComponent($$result2, "CldImage", CldImage, { "width": 896, "height": "100%", "aspectRatio": 2956 / 4016, "class": "sm:float-right sm:rounded-bl-[75px] align-bottom rounded-br-[50px] rounded-bl-[50px] sm:!w-fit !max-h-[50vh] !object-contain", "src": "author-portrait-photo", "alt": "Author portrait", "data-astro-transition-scope": renderTransition($$result2, "xnb6lmhq", "", "hunnie-bunnys-garden") })}<p class="font-medium -mt-[30px]">Welcome to Simple Reads Books!<br></p><p class="font-medium">My name is Deborah Martin and I am the author of the Hunnie Bunny book series.</p><p>
I have always enjoyed writing children’s stories and decided to finally publish Hunnie Bunny’s Garden after my grandson’s birth In August of 2022. Even
        though I wrote Hunnie Bunny’s Garden in 1985 when my son was two years old, I never forgot about the story and recently was able to find the perfect
        illustrator to bring the story to life.
</p><p>
Growing up in Roanoke, Virginia, we had lots of pets, including cats, dogs, bunnies, birds and fish, all at the same time. So, it was natural for me to
        write about animals as I grew older. I believe that children learn empathy, respect and responsibility when pets are part of the family.
</p><p>
Horses have always been my first love and true passion, and I was fortunate to buy my first horse when I was in college. Some of my best years were
        spent showing my thoroughbred mare in hunter shows.
</p><p>
When I moved to California, I gave up riding to raise my family and didn’t buy another horse until our son went off to college. I now have three horses,
        a chestnut Appendix Quarter horse gelding named Crimson Sky, a black German warmblood gelding named San Fransisko, and a bay Oldenburg gelding named
        Santana. All three are trained in dressage and have done extremely well at shows with their professional rider.
</p><p>
Besides my horses, I have two other four-legged children: a fifteen-year-old Bluepoint Balinese cat named Zoie (who is quite the diva in our house) and
        an eight-year-old Bluepoint Birman/Siamese mix named Rascal (who definitely lives up to his name). They are wonderful companions, and my home wouldn’t
        be the same without them!
</p><p>I hope you will join the Simple Reads Books community and share my books with your family and friends. Enjoy!</p><h2>Mission Statement</h2><p>
Simple Reads Books is dedicated to presenting children’s stories with a positive message using colorful illustrations to build self-esteem and a love of
        animals and nature.
</p></div></article>` })}`;
}, "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/about/index.astro", "self");

const $$file$1 = "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/about/index.astro";
const $$url$1 = "/about";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

/* src/pages/home/_ComingSoon.svelte generated by Svelte v4.2.0 */

const ComingSoon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<section class="w-full font-[Itim]"><div class="bg-[rgba(0,102,204,0.44)] p-2.5 flex flex-row items-center justify-between w-full relative">${validate_component(CldImage, "CldImage").$$render(
		$$result,
		{
			width: 472,
			height: "100%",
			aspectRatio: 2100 / 1500,
			class: "hidden sm:flex col-span-3 !max-w-[20%] !h-fit   animate-[rotateSlow_1s_ease-in_infinite]",
			src: "mr-squirrel-sitting",
			alt: "Mr. Frog sitting"
		},
		{},
		{}
	)} <div class="flex flex-row gap-2.5 items-center justify-center col-span-6 m-auto" data-svelte-h="svelte-rv2nkz"><div class="flex flex-col gap-0 items-center justify-start"><div class="text-gray-900 text-center relative self-stretch"><span><p class="text-xl md:text-2xl lg:text-3xl text-normal text-shadow-sm mb-5">Coming Soon!</p> <div class="mt-30"><span class="md:text-xl lg:text-2xl">Hunnie Bunny’s Garden Mystery
								<br>
								Hunnie Bunny’s Special Gift
								<br>
								Hunnie Bunny’s Christmas Wish</span></div></span></div></div></div> ${validate_component(CldImage, "CldImage").$$render(
		$$result,
		{
			width: 382,
			height: "100%",
			aspectRatio: 252 / 191,
			class: "hidden sm:flex col-span-3 !max-w-[20%] !h-fit animate-[bouncefrog_1s_ease-in_infinite]",
			src: "mr-frog-sitting",
			alt: "Mr. Frog sitting"
		},
		{},
		{}
	)}</div></section>`;
});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  console.log("Hello from ASTRO");
  console.log((Object.assign({"PUBLIC_VITE_PUBLIC_CLOUDINARY_CLOUD_NAME":"simple-reads-books","BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":undefined,"ASSETS_PREFIX":undefined},{_:process.env._,})));
  debugger;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hello from Astro" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="w-full py-10 md:py-20 px-4 md:px-5 bg-[#009933] bg-opacity-40 flex-col justify-start items-center inline-flex font-[Itim]"><div class="justify-start items-center inline-flex"><div class="self-stretch justify-between items-start gap-2.5 inline-flex"><div class="text-center text-gray-900 lg:text-4xl xs:text-normal sm:text-2xl md:text-3xl font-normal md:px-10">
Simple Reads Books encourages children to explore nature through entertaining stories filled with colorful illustrations
</div></div></div></section>${renderComponent($$result2, "Hero", $$Hero, { "data-astro-transition-scope": renderTransition($$result2, "f7nhjhav", "slide", "image") })}${renderComponent($$result2, "ComingSoon", ComingSoon, {})}` })}`;
}, "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/home/index.astro", "self");

const $$file = "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/home/index.astro";
const $$url = "/home";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$4 as a, index$3 as b, index$2 as c, index$1 as d, index as e, index$5 as i };
