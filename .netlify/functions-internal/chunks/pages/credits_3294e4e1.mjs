/* empty css                           */import { twMerge, twJoin } from 'tailwind-merge';
import styleToCss from 'style-object-to-css-string';
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, m as maybeRenderHead, e as renderSlot } from '../astro_96dc6b5b.mjs';
import 'clsx';
import { atom } from 'nanostores';
import { getTransformations } from '@cloudinary-util/util';
import { constructCloudinaryUrl, transformationPlugins } from '@cloudinary-util/url-loader';
import { transformProps } from '@unpic/core';
/* empty css                           *//* empty css                           */
const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/node_modules/astro/components/ViewTransitions.astro", void 0);

/** @returns {void} */
function noop() {}

const identity = (x) => x;

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

/** @returns {boolean} */
function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || (a && typeof a === 'object') || typeof a === 'function';
}

function subscribe(store, ...callbacks) {
	if (store == null) {
		for (const callback of callbacks) {
			callback(undefined);
		}
		return noop;
	}
	const unsub = store.subscribe(...callbacks);
	return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

/** @returns {{}} */
function compute_rest_props(props, keys) {
	const rest = {};
	keys = new Set(keys);
	for (const k in props) if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];
	return rest;
}

/** @returns {{}} */
function compute_slots(slots) {
	const result = {};
	for (const key in slots) {
		result[key] = true;
	}
	return result;
}

function set_store_value(store, ret, value) {
	store.set(value);
	return ret;
}

/** @type {typeof globalThis} */
const globals =
	typeof window !== 'undefined'
		? window
		: typeof globalThis !== 'undefined'
		? globalThis
		: // @ts-ignore Node typings have this
		  global;

/**
 * @template T
 * @param {string} type
 * @param {T} [detail]
 * @param {{ bubbles?: boolean, cancelable?: boolean }} [options]
 * @returns {CustomEvent<T>}
 */
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
	return new CustomEvent(type, { detail, bubbles, cancelable });
}

/**
 * @typedef {Node & {
 * 	claim_order?: number;
 * 	hydrate_init?: true;
 * 	actual_end_child?: NodeEx;
 * 	childNodes: NodeListOf<NodeEx>;
 * }} NodeEx
 */

/** @typedef {ChildNode & NodeEx} ChildNodeEx */

/** @typedef {NodeEx & { claim_order: number }} NodeEx2 */

/**
 * @typedef {ChildNodeEx[] & {
 * 	claim_info?: {
 * 		last_index: number;
 * 		total_claimed: number;
 * 	};
 * }} ChildNodeArray
 */

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

function get_current_component() {
	if (!current_component) throw new Error('Function called outside component initialization');
	return current_component;
}

/**
 * Creates an event dispatcher that can be used to dispatch [component events](/docs#template-syntax-component-directives-on-eventname).
 * Event dispatchers are functions that can take two arguments: `name` and `detail`.
 *
 * Component events created with `createEventDispatcher` create a
 * [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).
 * These events do not [bubble](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture).
 * The `detail` argument corresponds to the [CustomEvent.detail](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail)
 * property and can contain any type of data.
 *
 * The event dispatcher can be typed to narrow the allowed event names and the type of the `detail` argument:
 * ```ts
 * const dispatch = createEventDispatcher<{
 *  loaded: never; // does not take a detail argument
 *  change: string; // takes a detail argument of type string, which is required
 *  optional: number | null; // takes an optional detail argument of type number
 * }>();
 * ```
 *
 * https://svelte.dev/docs/svelte#createeventdispatcher
 * @template {Record<string, any>} [EventMap=any]
 * @returns {import('./public.js').EventDispatcher<EventMap>}
 */
function createEventDispatcher() {
	const component = get_current_component();
	return (type, detail, { cancelable = false } = {}) => {
		const callbacks = component.$$.callbacks[type];
		if (callbacks) {
			// TODO are there situations where events could be dispatched
			// in a server (non-DOM) environment?
			const event = custom_event(/** @type {string} */ (type), detail, { cancelable });
			callbacks.slice().forEach((fn) => {
				fn.call(component, event);
			});
			return !event.defaultPrevented;
		}
		return true;
	};
}

/**
 * Associates an arbitrary `context` object with the current component and the specified `key`
 * and returns that object. The context is then available to children of the component
 * (including slotted content) with `getContext`.
 *
 * Like lifecycle functions, this must be called during component initialisation.
 *
 * https://svelte.dev/docs/svelte#setcontext
 * @template T
 * @param {any} key
 * @param {T} context
 * @returns {T}
 */
function setContext(key, context) {
	get_current_component().$$.context.set(key, context);
	return context;
}

/**
 * Retrieves the context that belongs to the closest parent component with the specified `key`.
 * Must be called during component initialisation.
 *
 * https://svelte.dev/docs/svelte#getcontext
 * @template T
 * @param {any} key
 * @returns {T}
 */
function getContext(key) {
	return get_current_component().$$.context.get(key);
}

// general each functions:

function ensure_array_like(array_like_or_iterator) {
	return array_like_or_iterator?.length !== undefined
		? array_like_or_iterator
		: Array.from(array_like_or_iterator);
}

const _boolean_attributes = /** @type {const} */ ([
	'allowfullscreen',
	'allowpaymentrequest',
	'async',
	'autofocus',
	'autoplay',
	'checked',
	'controls',
	'default',
	'defer',
	'disabled',
	'formnovalidate',
	'hidden',
	'inert',
	'ismap',
	'loop',
	'multiple',
	'muted',
	'nomodule',
	'novalidate',
	'open',
	'playsinline',
	'readonly',
	'required',
	'reversed',
	'selected'
]);

/**
 * List of HTML boolean attributes (e.g. `<input disabled>`).
 * Source: https://html.spec.whatwg.org/multipage/indices.html
 *
 * @type {Set<string>}
 */
const boolean_attributes = new Set([..._boolean_attributes]);

/** @typedef {typeof _boolean_attributes[number]} BooleanAttributes */

/** regex of all html void element names */
const void_element_names =
	/^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;

/**
 * @param {string} name
 * @returns {boolean}
 */
function is_void(name) {
	return void_element_names.test(name) || name.toLowerCase() === '!doctype';
}

const invalid_attribute_name_character =
	/[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

/** @returns {string} */
function spread(args, attrs_to_add) {
	const attributes = Object.assign({}, ...args);
	if (attrs_to_add) {
		const classes_to_add = attrs_to_add.classes;
		const styles_to_add = attrs_to_add.styles;
		if (classes_to_add) {
			if (attributes.class == null) {
				attributes.class = classes_to_add;
			} else {
				attributes.class += ' ' + classes_to_add;
			}
		}
		if (styles_to_add) {
			if (attributes.style == null) {
				attributes.style = style_object_to_string(styles_to_add);
			} else {
				attributes.style = style_object_to_string(
					merge_ssr_styles(attributes.style, styles_to_add)
				);
			}
		}
	}
	let str = '';
	Object.keys(attributes).forEach((name) => {
		if (invalid_attribute_name_character.test(name)) return;
		const value = attributes[name];
		if (value === true) str += ' ' + name;
		else if (boolean_attributes.has(name.toLowerCase())) {
			if (value) str += ' ' + name;
		} else if (value != null) {
			str += ` ${name}="${value}"`;
		}
	});
	return str;
}

/** @returns {{}} */
function merge_ssr_styles(style_attribute, style_directive) {
	const style_object = {};
	for (const individual_style of style_attribute.split(';')) {
		const colon_index = individual_style.indexOf(':');
		const name = individual_style.slice(0, colon_index).trim();
		const value = individual_style.slice(colon_index + 1).trim();
		if (!name) continue;
		style_object[name] = value;
	}
	for (const name in style_directive) {
		const value = style_directive[name];
		if (value) {
			style_object[name] = value;
		} else {
			delete style_object[name];
		}
	}
	return style_object;
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

function escape_attribute_value(value) {
	// keep booleans, null, and undefined for the sake of `spread`
	const should_escape = typeof value === 'string' || (value && typeof value === 'object');
	return should_escape ? escape(value, true) : value;
}

/** @returns {{}} */
function escape_object(obj) {
	const result = {};
	for (const key in obj) {
		result[key] = escape_attribute_value(obj[key]);
	}
	return result;
}

/** @returns {string} */
function each(items, fn) {
	items = ensure_array_like(items);
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(items[i], i);
	}
	return str;
}

function validate_component(component, name) {
	if (!component || !component.$$render) {
		if (name === 'svelte:component') name += ' this={...}';
		throw new Error(
			`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
		);
	}
	return component;
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/** @returns {string} */
function add_attribute(name, value, boolean) {
	if (value == null || (boolean && !value)) return '';
	const assignment = boolean && value === true ? '' : `="${escape(value, true)}"`;
	return ` ${name}${assignment}`;
}

/** @returns {string} */
function style_object_to_string(style_object) {
	return Object.keys(style_object)
		.filter((key) => style_object[key])
		.map((key) => `${key}: ${escape_attribute_value(style_object[key])};`)
		.join(' ');
}

const subscriber_queue = [];

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 *
 * https://svelte.dev/docs/svelte-store#writable
 * @template T
 * @param {T} [value] initial value
 * @param {import('./public.js').StartStopNotifier<T>} [start]
 * @returns {import('./public.js').Writable<T>}
 */
function writable(value, start = noop) {
	/** @type {import('./public.js').Unsubscriber} */
	let stop;
	/** @type {Set<import('./private.js').SubscribeInvalidateTuple<T>>} */
	const subscribers = new Set();
	/** @param {T} new_value
	 * @returns {void}
	 */
	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (stop) {
				// store is ready
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}

	/**
	 * @param {import('./public.js').Updater<T>} fn
	 * @returns {void}
	 */
	function update(fn) {
		set(fn(value));
	}

	/**
	 * @param {import('./public.js').Subscriber<T>} run
	 * @param {import('./private.js').Invalidator<T>} [invalidate]
	 * @returns {import('./public.js').Unsubscriber}
	 */
	function subscribe(run, invalidate = noop) {
		/** @type {import('./private.js').SubscribeInvalidateTuple<T>} */
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set, update) || noop;
		}
		run(value);
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0 && stop) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}

/* node_modules/flowbite-svelte/dist/utils/Frame.svelte generated by Svelte v4.2.0 */

const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, [
		"tag","color","rounded","border","shadow","transition","params","node","use","options","role"
	]);

	const null_transition = () => ({ duration: 0 });

	const noop = () => {
		
	};

	setContext('background', true);
	let { tag = $$restProps.href ? 'a' : 'div' } = $$props;
	let { color = 'default' } = $$props;
	let { rounded = false } = $$props;
	let { border = false } = $$props;
	let { shadow = false } = $$props;
	let { transition = null_transition } = $$props;
	let { params = {} } = $$props;
	let { node = undefined } = $$props;
	let { use = noop } = $$props;
	let { options = {} } = $$props;
	let { role = undefined } = $$props;

	// your script goes here
	const bgColors = {
		gray: 'bg-gray-50 dark:bg-gray-800',
		red: 'bg-red-50 dark:bg-gray-800',
		yellow: 'bg-yellow-50 dark:bg-gray-800 ',
		green: 'bg-green-50 dark:bg-gray-800 ',
		indigo: 'bg-indigo-50 dark:bg-gray-800 ',
		purple: 'bg-purple-50 dark:bg-gray-800 ',
		pink: 'bg-pink-50 dark:bg-gray-800 ',
		blue: 'bg-blue-50 dark:bg-gray-800 ',
		light: 'bg-gray-50 dark:bg-gray-700',
		dark: 'bg-gray-50 dark:bg-gray-800',
		default: 'bg-white dark:bg-gray-800',
		dropdown: 'bg-white dark:bg-gray-700',
		navbar: 'bg-white dark:bg-gray-900',
		navbarUl: 'bg-gray-50 dark:bg-gray-800',
		form: 'bg-gray-50 dark:bg-gray-700',
		primary: 'bg-primary-50 dark:bg-gray-800 ',
		orange: 'bg-orange-50 dark:bg-orange-800',
		none: ''
	};

	const textColors = {
		gray: 'text-gray-800 dark:text-gray-300',
		red: 'text-red-800 dark:text-red-400',
		yellow: 'text-yellow-800 dark:text-yellow-300',
		green: 'text-green-800 dark:text-green-400',
		indigo: 'text-indigo-800 dark:text-indigo-400',
		purple: 'text-purple-800 dark:text-purple-400',
		pink: 'text-pink-800 dark:text-pink-400',
		blue: 'text-blue-800 dark:text-blue-400',
		light: 'text-gray-700 dark:text-gray-300',
		dark: 'text-gray-700 dark:text-gray-300',
		default: 'text-gray-500 dark:text-gray-400',
		dropdown: 'text-gray-700 dark:text-gray-200',
		navbar: 'text-gray-700 dark:text-gray-200',
		navbarUl: 'text-gray-700 dark:text-gray-400',
		form: 'text-gray-900 dark:text-white',
		primary: 'text-primary-800 dark:text-primary-400',
		orange: 'text-orange-800 dark:text-orange-400',
		none: ''
	};

	const borderColors = {
		gray: 'border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800',
		red: 'border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800',
		yellow: 'border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800',
		green: 'border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800',
		indigo: 'border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800',
		purple: 'border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800',
		pink: 'border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800',
		blue: 'border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800',
		light: 'border-gray-500 divide-gray-500',
		dark: 'border-gray-500 divide-gray-500',
		default: 'border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700',
		dropdown: 'border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600',
		navbar: 'border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700',
		navbarUl: 'border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700',
		form: 'border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700',
		primary: 'border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ',
		orange: 'border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800',
		none: ''
	};

	let divClass;
	if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
	if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
	if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
	if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
	if ($$props.params === void 0 && $$bindings.params && params !== void 0) $$bindings.params(params);
	if ($$props.node === void 0 && $$bindings.node && node !== void 0) $$bindings.node(node);
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
	if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
	color = color ?? 'default'; // for cases when undefined

	{
		setContext('color', color);
	}

	divClass = twMerge(bgColors[color], textColors[color], rounded && 'rounded-lg', border && 'border', borderColors[color], shadow && 'shadow-md', $$props.class);

	return `${(tag$1 => {
		return tag$1
		? `<${tag}${spread(
				[
					escape_object($$restProps),
					{ class: escape_attribute_value(divClass) },
					{ role: escape_attribute_value(role) }
				],
				{}
			)}${add_attribute("this", node, 0)}>${is_void(tag$1)
			? ''
			: `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? '' : `</${tag$1}>`}`
		: '';
	})(tag)} `;
});

/*
Adapted from https://github.com/mattdesl
Distributed under MIT License https://github.com/mattdesl/eases/blob/master/LICENSE.md
*/

/**
 * https://svelte.dev/docs/svelte-easing
 * @param {number} t
 * @returns {number}
 */
function quintOut(t) {
	return --t * t * t * t * t + 1;
}

/**
 * Animates the opacity of an element from 0 to the current opacity for `in` transitions and from the current opacity to 0 for `out` transitions.
 *
 * https://svelte.dev/docs/svelte-transition#fade
 * @param {Element} node
 * @param {import('./public').FadeParams} [params]
 * @returns {import('./public').TransitionConfig}
 */
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
	const o = +getComputedStyle(node).opacity;
	return {
		delay,
		duration,
		easing,
		css: (t) => `opacity: ${t * o}`
	};
}

/* node_modules/flowbite-svelte/dist/toolbar/ToolbarButton.svelte generated by Svelte v4.2.0 */

const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["color","name","ariaLabel","size","href"]);
	const background = getContext('background');
	let { color = 'default' } = $$props;
	let { name = undefined } = $$props;
	let { ariaLabel = undefined } = $$props;
	let { size = 'md' } = $$props;
	let { href = undefined } = $$props;

	const colors = {
		dark: 'text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600',
		gray: 'text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300',
		red: 'text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300',
		yellow: 'text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300',
		green: 'text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300',
		indigo: 'text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300',
		purple: 'text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300',
		pink: 'text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300',
		blue: 'text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300',
		primary: 'text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300',
		default: 'focus:ring-gray-400'
	};

	const sizing = {
		xs: 'm-0.5 rounded-sm focus:ring-1 p-0.5',
		sm: 'm-0.5 rounded focus:ring-1 p-0.5',
		md: 'm-0.5 rounded-lg focus:ring-2 p-1.5',
		lg: 'm-0.5 rounded-lg focus:ring-2 p-2.5'
	};

	let buttonClass;

	const svgSizes = {
		xs: 'w-3 h-3',
		sm: 'w-3.5 h-3.5',
		md: 'w-5 h-5',
		lg: 'w-5 h-5'
	};

	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);

	buttonClass = twMerge(
		'focus:outline-none whitespace-normal',
		sizing[size],
		colors[color],
		color === 'default' && (background
		? 'hover:bg-gray-100 dark:hover:bg-gray-600'
		: 'hover:bg-gray-100 dark:hover:bg-gray-700'),
		$$props.class
	);

	return `${href
	? `<a${spread(
			[
				{ href: escape_attribute_value(href) },
				escape_object($$restProps),
				{
					class: escape_attribute_value(buttonClass)
				},
				{
					"aria-label": escape_attribute_value(ariaLabel ?? name)
				}
			],
			{}
		)}>${name
		? `<span class="sr-only">${escape(name)}</span>`
		: ``} ${slots.default
		? slots.default({ svgSize: svgSizes[size] })
		: ``}</a>`
	: `<button${spread(
			[
				{ type: "button" },
				escape_object($$restProps),
				{
					class: escape_attribute_value(buttonClass)
				},
				{
					"aria-label": escape_attribute_value(ariaLabel ?? name)
				}
			],
			{}
		)}>${name
		? `<span class="sr-only">${escape(name)}</span>`
		: ``} ${slots.default
		? slots.default({ svgSize: svgSizes[size] })
		: ``}</button>`} `;
});

/* node_modules/flowbite-svelte/dist/utils/CloseButton.svelte generated by Svelte v4.2.0 */

const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["name"]);
	let { name = 'Close' } = $$props;
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);

	return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name }, $$restProps, { class: twMerge('ml-auto', $$props.class) }), {}, {
		default: ({ svgSize }) => {
			return `<svg${add_attribute("class", svgSize, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
		}
	})} `;
});

/* node_modules/flowbite-svelte/dist/indicators/Indicator.svelte generated by Svelte v4.2.0 */

const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$slots = compute_slots(slots);
	let { color = 'gray' } = $$props;
	let { rounded = false } = $$props;
	let { size = 'md' } = $$props;
	let { border = false } = $$props;
	let { placement = undefined } = $$props;
	let { offset = true } = $$props;

	const colors = {
		gray: 'bg-gray-200',
		dark: 'bg-gray-900 dark:bg-gray-700',
		blue: 'bg-blue-600',
		orange: 'bg-orange-600',
		green: 'bg-green-500',
		red: 'bg-red-500',
		purple: 'bg-purple-500',
		indigo: 'bg-indigo-500',
		yellow: 'bg-yellow-300',
		teal: 'bg-teal-500',
		none: ''
	};

	const sizes = {
		xs: 'w-2 h-2',
		sm: 'w-2.5 h-2.5',
		md: 'w-3 h-3',
		lg: 'w-3.5 h-3.5',
		xl: 'w-6 h-6'
	};

	const placements = {
		// top
		'top-left': 'top-0 left-0',
		'top-center': 'top-0 left-1/2 -translate-x-1/2',
		'top-right': 'top-0 right-0',
		// center
		'center-left': 'top-1/2 -translate-y-1/2 left-0',
		center: 'top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2',
		'center-right': 'top-1/2 -translate-y-1/2 right-0',
		// bottom
		'bottom-left': 'bottom-0 left-0',
		'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
		'bottom-right': 'bottom-0 right-0'
	};

	const offsets = {
		// top
		'top-left': '-translate-x-1/3 -translate-y-1/3',
		'top-center': '-translate-y-1/3',
		'top-right': 'translate-x-1/3 -translate-y-1/3',
		// center
		'center-left': '-translate-x-1/3',
		center: '',
		'center-right': 'translate-x-1/3',
		// bottom
		'bottom-left': '-translate-x-1/3 translate-y-1/3',
		'bottom-center': 'translate-y-1/3',
		'bottom-right': 'translate-x-1/3 translate-y-1/3'
	};

	let dotClass;
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
	if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
	if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0) $$bindings.offset(offset);
	dotClass = twMerge('flex-shrink-0', rounded ? 'rounded' : 'rounded-full', border && 'border-2 border-white dark:border-gray-800', sizes[size], colors[color], $$slots.default && 'inline-flex items-center justify-center', placement && 'absolute ' + placements[placement], placement && offset && offsets[placement], $$props.class);
	return `<div${add_attribute("class", dotClass, 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});

/* node_modules/flowbite-svelte/dist/badges/Badge.svelte generated by Svelte v4.2.0 */
const baseClass = 'font-medium inline-flex items-center justify-center px-2.5 py-0.5';

const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["color","large","dismissable"]);
	let { color = 'primary' } = $$props;
	let { large = false } = $$props;
	let { dismissable = false } = $$props;

	const colors = {
		primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300',
		blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
		dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
		gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
		red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
		green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
		yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
		indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
		purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
		pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
		none: ''
	};

	const borderedColors = {
		primary: 'bg-primary-100 text-primary-800 dark:bg-gray-700 dark:text-primary-400 border-primary-400 dark:border-primary-400',
		blue: 'bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400 dark:border-blue-400',
		dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-500 dark:border-gray-500',
		red: 'bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400 dark:border-red-400',
		green: 'bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400 dark:border-green-400',
		yellow: 'bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-300',
		indigo: 'bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400',
		purple: 'bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400 dark:border-purple-400',
		pink: 'bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400 dark:border-pink-400',
		none: ''
	};

	const hoverColors = {
		primary: 'hover:bg-primary-200',
		blue: 'hover:bg-blue-200',
		dark: 'hover:bg-gray-200',
		red: 'hover:bg-red-200',
		green: 'hover:bg-green-200',
		yellow: 'hover:bg-yellow-200',
		indigo: 'hover:bg-indigo-200',
		purple: 'hover:bg-purple-200',
		pink: 'hover:bg-pink-200',
		none: ''
	};

	let badgeClass;

	let open = true;
	const dispatch = createEventDispatcher();

	const close = e => {
		e.stopPropagation();
		open = false;
	};

	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.large === void 0 && $$bindings.large && large !== void 0) $$bindings.large(large);
	if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0) $$bindings.dismissable(dismissable);

	{
		{
			if (dismissable) $$restProps.transition = $$restProps.transition ?? fade;
		}
	}

	badgeClass = twMerge(
		baseClass,
		large ? 'text-sm' : 'text-xs',
		$$restProps.border
		? `border ${borderedColors[color]}`
		: colors[color],
		$$restProps.href && hoverColors[color],
		$$restProps.rounded ? 'rounded-full' : 'rounded',
		$$props.class
	);

	{
		dispatch(open ? 'open' : 'close');
	}

	return `${open
	? `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: badgeClass }), {}, {
			default: () => {
				return `${slots.default ? slots.default({}) : ``} ${dismissable
				? `${slots["close-button"]
					? slots["close-button"]({ close })
					: ` ${validate_component(CloseButton, "CloseButton").$$render(
							$$result,
							{
								color,
								size: large ? 'sm' : 'xs',
								name: "Remove badge",
								class: "ml-1.5 -mr-1.5"
							},
							{},
							{}
						)} `}`
				: ``}`;
			}
		})}`
	: ``} `;
});

/* node_modules/flowbite-svelte/dist/buttons/Button.svelte generated by Svelte v4.2.0 */

const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["pill","outline","size","href","type","color","shadow"]);
	const group = getContext('group');
	let { pill = false } = $$props;
	let { outline = false } = $$props;
	let { size = group ? 'sm' : 'md' } = $$props;
	let { href = undefined } = $$props;
	let { type = 'button' } = $$props;
	let { color = group ? outline ? 'dark' : 'alternative' : 'primary' } = $$props;
	let { shadow = false } = $$props;

	const colorClasses = {
		alternative: 'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus:text-primary-700 dark:focus:text-white dark:hover:text-white',
		blue: 'text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700',
		dark: 'text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700',
		green: 'text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700',
		light: 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600',
		primary: 'text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700',
		purple: 'text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700',
		red: 'text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700',
		yellow: 'text-white bg-yellow-400 hover:bg-yellow-500 ',
		none: ''
	};

	const coloredFocusClasses = {
		alternative: 'focus:ring-gray-200 dark:focus:ring-gray-700',
		blue: 'focus:ring-blue-300 dark:focus:ring-blue-800',
		dark: 'focus:ring-gray-300 dark:focus:ring-gray-700',
		green: 'focus:ring-green-300 dark:focus:ring-green-800',
		light: 'focus:ring-gray-200 dark:focus:ring-gray-700',
		primary: 'focus:ring-primary-300 dark:focus:ring-primary-800',
		purple: 'focus:ring-purple-300 dark:focus:ring-purple-900',
		red: 'focus:ring-red-300 dark:focus:ring-red-900',
		yellow: 'focus:ring-yellow-300 dark:focus:ring-yellow-900',
		none: ''
	};

	const coloredShadowClasses = {
		alternative: 'shadow-gray-500/50 dark:shadow-gray-800/80',
		blue: 'shadow-blue-500/50 dark:shadow-blue-800/80',
		dark: 'shadow-gray-500/50 dark:shadow-gray-800/80',
		green: 'shadow-green-500/50 dark:shadow-green-800/80',
		light: 'shadow-gray-500/50 dark:shadow-gray-800/80',
		primary: 'shadow-primary-500/50 dark:shadow-primary-800/80',
		purple: 'shadow-purple-500/50 dark:shadow-purple-800/80',
		red: 'shadow-red-500/50 dark:shadow-red-800/80 ',
		yellow: 'shadow-yellow-500/50 dark:shadow-yellow-800/80 ',
		none: ''
	};

	const outlineClasses = {
		alternative: 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800',
		blue: 'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600',
		dark: 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600',
		green: 'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600',
		light: 'text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600',
		primary: 'text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600',
		purple: 'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500',
		red: 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600',
		yellow: 'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400',
		none: ''
	};

	const sizeClasses = {
		xs: 'px-3 py-2 text-xs',
		sm: 'px-4 py-2 text-sm',
		md: 'px-5 py-2.5 text-sm',
		lg: 'px-5 py-3 text-base',
		xl: 'px-6 py-3.5 text-base'
	};

	const hasBorder = () => outline || color === 'alternative' || color === 'light';
	let buttonClass;
	if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0) $$bindings.pill(pill);
	if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0) $$bindings.outline(outline);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);

	buttonClass = twMerge(
		'text-center font-medium',
		group ? 'focus:ring-2' : 'focus:ring-4',
		group && 'focus:z-10',
		group || 'focus:outline-none',
		'inline-flex items-center justify-center ' + sizeClasses[size],
		outline ? outlineClasses[color] : colorClasses[color],
		color === 'alternative' && (group
		? 'dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600'
		: 'dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-700'),
		outline && color === 'dark' && (group
		? 'dark:text-white dark:border-white'
		: 'dark:text-gray-400 dark:border-gray-700'),
		coloredFocusClasses[color],
		hasBorder() && group && 'border-l-0 first:border-l',
		group
		? pill && 'first:rounded-l-full last:rounded-r-full' || 'first:rounded-l-lg last:rounded-r-lg'
		: pill && 'rounded-full' || 'rounded-lg',
		shadow && 'shadow-lg',
		shadow && coloredShadowClasses[color],
		$$props.disabled && 'cursor-not-allowed opacity-50',
		$$props.class
	);

	return `${(tag => {
		return tag
		? `<${href ? 'a' : 'button'}${spread(
				[
					{
						type: escape_attribute_value(href ? undefined : type)
					},
					{ href: escape_attribute_value(href) },
					{
						role: escape_attribute_value(href ? 'link' : 'button')
					},
					escape_object($$restProps),
					{
						class: escape_attribute_value(buttonClass)
					}
				],
				{}
			)}>${is_void(tag)
			? ''
			: `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? '' : `</${tag}>`}`
		: '';
	})(href ? 'a' : 'button')} `;
});

/* node_modules/flowbite-svelte/dist/buttongroups/ButtonGroup.svelte generated by Svelte v4.2.0 */

const ButtonGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["size","divClass"]);
	let { size = 'md' } = $$props;
	let { divClass = 'inline-flex rounded-lg shadow-sm' } = $$props;
	setContext('group', { size });
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);

	return `<div${spread(
		[
			escape_object($$restProps),
			{
				class: escape_attribute_value(twMerge(divClass, $$props.class))
			},
			{ role: "group" }
		],
		{}
	)}>${slots.default ? slots.default({}) : ``}</div> `;
});

/* node_modules/flowbite-svelte/dist/cards/Card.svelte generated by Svelte v4.2.0 */

const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let innerPadding;
	let $$restProps = compute_rest_props($$props, ["href","horizontal","reverse","img","padding","size"]);
	let { href = undefined } = $$props;
	let { horizontal = false } = $$props;
	let { reverse = false } = $$props;
	let { img = undefined } = $$props;
	let { padding = 'lg' } = $$props;
	let { size = 'sm' } = $$props;

	const paddings = {
		none: 'p-0',
		sm: 'p-4 sm:p-6 md:p-8',
		md: 'p-4 sm:p-5',
		lg: 'p-4 sm:p-6',
		xl: 'p-4 sm:p-8'
	};

	const sizes = {
		xs: 'max-w-xs',
		sm: 'max-w-sm',
		md: 'max-w-lg',
		lg: 'max-w-2xl',
		xl: 'max-w-screen-xl'
	};
	let cardClass;
	let imgClass;
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0) $$bindings.horizontal(horizontal);
	if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0) $$bindings.reverse(reverse);
	if ($$props.img === void 0 && $$bindings.img && img !== void 0) $$bindings.img(img);
	if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	innerPadding = paddings[padding];

	cardClass = twMerge(
		'flex',
		sizes[size],
		reverse ? 'flex-col-reverse' : 'flex-col',
		horizontal && (reverse
		? 'md:flex-row-reverse md:max-w-xl'
		: 'md:flex-row md:max-w-xl'),
		href && 'hover:bg-gray-100 dark:hover:bg-gray-700',
		!img && innerPadding,
		$$props.class
	);

	imgClass = twMerge(reverse ? 'rounded-b-lg' : 'rounded-t-lg', horizontal && 'object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none', horizontal && (reverse ? 'md:rounded-r-lg' : 'md:rounded-l-lg'));

	return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: href ? 'a' : 'div' }, { rounded: true }, { shadow: true }, { border: true }, { href }, $$restProps, { class: cardClass }), {}, {
		default: () => {
			return `${img
			? `<img${add_attribute("class", imgClass, 0)}${add_attribute("src", img, 0)} alt=""> <div${add_attribute("class", innerPadding, 0)}>${slots.default ? slots.default({}) : ``}</div>`
			: `${slots.default ? slots.default({}) : ``}`}`;
		}
	})} `;
});

/* node_modules/flowbite-svelte/dist/carousels/ControlButton.svelte generated by Svelte v4.2.0 */

const ControlButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { forward } = $$props;
	let { name } = $$props;
	let buttonCls;
	if ($$props.forward === void 0 && $$bindings.forward && forward !== void 0) $$bindings.forward(forward);
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	buttonCls = twMerge('flex absolute top-0 z-30 justify-center items-center px-4 h-full group focus:outline-none text-white dark:text-gray-300', forward ? 'right-0' : 'left-0', $$props.class);

	return `<button type="button"${add_attribute("class", buttonCls, 0)}>${slots.default
	? slots.default({})
	: ` <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">${forward
		? `<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`
		: `<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`} <span class="sr-only">${escape(name)}</span></span> `}</button> `;
});

/* node_modules/flowbite-svelte/dist/carousels/Controls.svelte generated by Svelte v4.2.0 */

const Controls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $state, $$unsubscribe_state;
	const state = getContext('state');
	$$unsubscribe_state = subscribe(state, value => $state = value);

	function changeSlide(forward) {
		return function (ev) {
			if (ev.isTrusted) set_store_value(state, $state.index = forward ? $state.index + 1 : $state.index - 1, $state);
		};
	}

	$$unsubscribe_state();

	return ` ${slots.default
	? slots.default({ ControlButton, changeSlide })
	: ` ${validate_component(ControlButton, "ControlButton").$$render(
			$$result,
			{
				name: "Previous",
				forward: false,
				class: twJoin($$props.class)
			},
			{},
			{}
		)} ${validate_component(ControlButton, "ControlButton").$$render(
			$$result,
			{
				name: "Next",
				forward: true,
				class: twJoin($$props.class)
			},
			{},
			{}
		)} `}`;
});

/* node_modules/flowbite-svelte/dist/carousels/Indicators.svelte generated by Svelte v4.2.0 */

const Indicators = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $state, $$unsubscribe_state;
	let { activeClass = 'opacity-100' } = $$props;
	let { inactiveClass = 'opacity-60' } = $$props;
	const state = getContext('state');
	$$unsubscribe_state = subscribe(state, value => $state = value);
	if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
	if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0) $$bindings.inactiveClass(inactiveClass);
	$$unsubscribe_state();

	return `<div${add_attribute("class", twMerge('flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2', $$props.class), 0)}>${each($state.images, (_, idx) => {
		let selected = $state.index === idx;

		return ` <button>${slots.default
		? slots.default({ Indicator, selected, index: idx })
		: ` ${validate_component(Indicator, "Indicator").$$render(
				$$result,
				{
					class: twMerge('bg-gray-100 hover:bg-gray-300', selected ? activeClass : inactiveClass)
				},
				{},
				{}
			)} `} </button>`;
	})}</div> `;
});

/* node_modules/flowbite-svelte/dist/carousels/Slide.svelte generated by Svelte v4.2.0 */

const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { image } = $$props;
	let { transition = x => fade(x, { duration: 700, easing: quintOut }) } = $$props;
	if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
	if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);

	return `<img${spread(
		[
			{ alt: "..." },
			escape_object(image),
			{
				class: "absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
			}
		],
		{}
	)}> `;
});

/* node_modules/flowbite-svelte/dist/carousels/Carousel.svelte generated by Svelte v4.2.0 */
let divClass = 'overflow-hidden relative rounded-lg h-56 sm:h-64 xl:h-80 2xl:h-96';

const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["images","index","transition","duration","ariaLabel"]);
	let { images } = $$props;
	let { index = 0 } = $$props;
	let { transition = x => fade(x, { duration: 700, easing: quintOut }) } = $$props;
	let { duration = 0 } = $$props;
	let { ariaLabel = 'Draggable Carousel' } = $$props;
	const dispatch = createEventDispatcher();
	const { set, subscribe, update } = writable({ images, index });

	const state = {
		set: s => set({
			index: (s.index % images.length + images.length) % images.length,
			images: s.images
		}),
		subscribe,
		update
	};

	setContext('state', state);

	subscribe(s => {
		index = s.index;
		dispatch('change', images[index]);
	});
	let carouselDiv;
	let percentOffset = 0;

	if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
	if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
	if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
	if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);

	{
		state.set({ images, index });
	}

	return `  <div class="relative" role="button"${add_attribute("aria-label", ariaLabel, 0)} tabindex="0"${add_attribute("this", carouselDiv, 0)}><div${spread(
		[
			{
				style: escape_attribute_value(`transform: translateX(${percentOffset}%)`)
			},
			escape_object($$restProps),
			{
				class: escape_attribute_value(twMerge(
					divClass,
					'transition-transform'
					,
					$$props.class
				))
			}
		],
		{}
	)}>${slots.slide
	? slots.slide({ Slide, index })
	: ` ${validate_component(Slide, "Slide").$$render($$result, { image: images[index], transition }, {}, {})} `}</div> ${slots.default
	? slots.default({ index, Controls, Indicators })
	: ``}</div> `;
});

/* node_modules/flowbite-svelte/dist/carousels/Thumbnail.svelte generated by Svelte v4.2.0 */

const Thumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["selected","activeClass","inactiveClass"]);
	let { selected = false } = $$props;
	let { activeClass = 'opacity-100' } = $$props;
	let { inactiveClass = 'opacity-60' } = $$props;
	if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
	if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
	if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0) $$bindings.inactiveClass(inactiveClass);

	return `<img${spread(
		[
			{ alt: "..." },
			escape_object($$restProps),
			{
				class: escape_attribute_value(twMerge(selected ? activeClass : inactiveClass, $$props.class))
			}
		],
		{}
	)}> `;
});

/* node_modules/flowbite-svelte/dist/carousels/Thumbnails.svelte generated by Svelte v4.2.0 */

const Thumbnails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { images = [] } = $$props;
	let { index = 0 } = $$props;
	let { ariaLabel = 'Click to view image' } = $$props;
	if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
	if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
	index = (index + images.length) % images.length;

	return `<div${add_attribute("class", twMerge('flex flex-row justify-center bg-gray-100 w-full', $$props.class), 0)}>${each(images, (image, idx) => {
		let selected = index === idx;

		return `  <button${add_attribute("aria-label", ariaLabel, 0)}>${slots.default
		? slots.default({ Thumbnail, image, selected })
		: ` ${validate_component(Thumbnail, "Thumbnail").$$render($$result, Object.assign({}, image, { selected }), {}, {})} `} </button>`;
	})}</div> `;
});

/* node_modules/flowbite-svelte/dist/utils/Wrapper.svelte generated by Svelte v4.2.0 */

const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["tag","show","use"]);
	let { tag = 'div' } = $$props;
	let { show } = $$props;

	let { use = () => {
		
	} } = $$props;

	if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
	if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);

	return `${show
	? `${(tag$1 => {
			return tag$1
			? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1)
				? ''
				: `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? '' : `</${tag$1}>`}`
			: '';
		})(tag)}`
	: `${slots.default ? slots.default({}) : ``}`} `;
});

/* node_modules/flowbite-svelte/dist/footer/Footer.svelte generated by Svelte v4.2.0 */

const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["footerType"]);
	let { footerType = 'default' } = $$props;
	let footerClass = twMerge(footerType === 'sitemap' && 'bg-gray-800', footerType === 'socialmedia' && 'p-4 bg-white sm:p-6 dark:bg-gray-800', footerType === 'logo' && 'p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800', footerType === 'default' && 'p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800', $$props.class);
	if ($$props.footerType === void 0 && $$bindings.footerType && footerType !== void 0) $$bindings.footerType(footerType);

	return `<footer${spread(
		[
			escape_object($$restProps),
			{
				class: escape_attribute_value(footerClass)
			}
		],
		{}
	)}>${slots.default ? slots.default({}) : ``}</footer> `;
});

/* node_modules/flowbite-svelte/dist/footer/FooterBrand.svelte generated by Svelte v4.2.0 */

const FooterBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["aClass","spanClass","imgClass","href","src","alt","name","target"]);
	let { aClass = 'flex items-center' } = $$props;
	let { spanClass = 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white' } = $$props;
	let { imgClass = 'mr-3 h-8' } = $$props;
	let { href = '' } = $$props;
	let { src = '' } = $$props;
	let { alt = '' } = $$props;
	let { name = '' } = $$props;
	let { target = undefined } = $$props;
	let aCls = twMerge(aClass, $$props.classA);
	let spanCls = twMerge(spanClass, $$props.classSpan);
	let imgCls = twMerge(imgClass, $$props.classImg);
	if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0) $$bindings.aClass(aClass);
	if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0) $$bindings.spanClass(spanClass);
	if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0) $$bindings.imgClass(imgClass);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
	if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);

	return `${href
	? `<a${spread(
			[
				escape_object($$restProps),
				{ href: escape_attribute_value(href) },
				{ target: escape_attribute_value(target) },
				{ class: escape_attribute_value(aCls) }
			],
			{}
		)}><img${add_attribute("src", src, 0)}${add_attribute("class", imgCls, 0)}${add_attribute("alt", alt, 0)}> <span${add_attribute("class", spanCls, 0)}>${escape(name)}</span> ${slots.default ? slots.default({}) : ``}</a>`
	: `<img${spread(
			[
				escape_object($$restProps),
				{ src: escape_attribute_value(src) },
				{ class: escape_attribute_value(imgCls) },
				{ alt: escape_attribute_value(alt) }
			],
			{}
		)}>`} `;
});

/* node_modules/flowbite-svelte/dist/footer/FooterCopyright.svelte generated by Svelte v4.2.0 */

const FooterCopyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["spanClass","aClass","year","href","by","target","copyrightMessage"]);
	let { spanClass = 'block text-sm text-gray-500 sm:text-center dark:text-gray-400' } = $$props;
	let { aClass = 'hover:underline' } = $$props;
	let { year = new Date().getFullYear() } = $$props;
	let { href = '' } = $$props;
	let { by = '' } = $$props;
	let { target = undefined } = $$props;
	let { copyrightMessage = 'All Rights Reserved.' } = $$props;
	let spanCls = twMerge(spanClass, $$props.classSpan);
	let aCls = twMerge(aClass, $$props.classA);
	if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0) $$bindings.spanClass(spanClass);
	if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0) $$bindings.aClass(aClass);
	if ($$props.year === void 0 && $$bindings.year && year !== void 0) $$bindings.year(year);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.by === void 0 && $$bindings.by && by !== void 0) $$bindings.by(by);
	if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
	if ($$props.copyrightMessage === void 0 && $$bindings.copyrightMessage && copyrightMessage !== void 0) $$bindings.copyrightMessage(copyrightMessage);

	return `<span${add_attribute("class", spanCls, 0)}>© ${escape(year)} ${href
	? `<a${spread(
			[
				escape_object($$restProps),
				{ href: escape_attribute_value(href) },
				{ target: escape_attribute_value(target) },
				{ class: escape_attribute_value(aCls) }
			],
			{}
		)}>${escape(by)}</a>`
	: `<span class="ml-1">${escape(by)}</span>`} ${escape(copyrightMessage)}</span> `;
});

/* node_modules/flowbite-svelte/dist/footer/FooterIcon.svelte generated by Svelte v4.2.0 */

const FooterIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["href","ariaLabel","aClass","target"]);
	let { href = '' } = $$props;
	let { ariaLabel = '' } = $$props;
	let { aClass = 'text-gray-500 hover:text-gray-900 dark:hover:text-white' } = $$props;
	let { target = undefined } = $$props;
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
	if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0) $$bindings.aClass(aClass);
	if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);

	return `${href
	? `<a${spread(
			[
				escape_object($$restProps),
				{ href: escape_attribute_value(href) },
				{ target: escape_attribute_value(target) },
				{
					"aria-label": escape_attribute_value(ariaLabel)
				},
				{
					class: escape_attribute_value(twMerge(aClass, $$props.class))
				}
			],
			{}
		)}>${slots.default ? slots.default({}) : ``}</a>`
	: `${slots.default ? slots.default({}) : ``}`} `;
});

/* node_modules/flowbite-svelte/dist/footer/FooterLink.svelte generated by Svelte v4.2.0 */

const FooterLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["liClass","aClass","href","target"]);
	let { liClass = 'mr-4 last:mr-0 md:mr-6' } = $$props;
	let { aClass = 'hover:underline' } = $$props;
	let { href = '' } = $$props;
	let { target = undefined } = $$props;
	let liCls = twMerge(liClass, $$props.classLi);
	let aCls = twMerge(aClass, $$props.classA);
	if ($$props.liClass === void 0 && $$bindings.liClass && liClass !== void 0) $$bindings.liClass(liClass);
	if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0) $$bindings.aClass(aClass);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);

	return `<li${add_attribute("class", liCls, 0)}><a${spread(
		[
			escape_object($$restProps),
			{ href: escape_attribute_value(href) },
			{ class: escape_attribute_value(aCls) },
			{ target: escape_attribute_value(target) }
		],
		{}
	)}>${slots.default ? slots.default({}) : ``}</a></li> `;
});

/* node_modules/flowbite-svelte/dist/footer/FooterLinkGroup.svelte generated by Svelte v4.2.0 */

const FooterLinkGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { ulClass = 'text-gray-600 dark:text-gray-400' } = $$props;
	if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0) $$bindings.ulClass(ulClass);
	return `<ul${add_attribute("class", twMerge(ulClass, $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</ul> `;
});

/* node_modules/flowbite-svelte/dist/forms/Label.svelte generated by Svelte v4.2.0 */

const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let labelClass;
	let $$restProps = compute_rest_props($$props, ["color","defaultClass","show"]);
	let { color = 'gray' } = $$props;
	let { defaultClass = 'text-sm font-medium block' } = $$props;
	let { show = true } = $$props;
	let node;

	const colorClasses = {
		gray: 'text-gray-900 dark:text-gray-300',
		green: 'text-green-700 dark:text-green-500',
		red: 'text-red-700 dark:text-red-500',
		disabled: 'text-gray-400 dark:text-gray-500'
	};

	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
	if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);

	{
		{
			color = color;
		}
	}

	labelClass = twMerge(defaultClass, colorClasses[color], $$props.class);

	return `${show
	? ` <label${spread(
			[
				escape_object($$restProps),
				{
					class: escape_attribute_value(labelClass)
				}
			],
			{}
		)}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>`
	: `${slots.default ? slots.default({}) : ``}`} `;
});

/* node_modules/flowbite-svelte/dist/forms/Input.svelte generated by Svelte v4.2.0 */

function clampSize(s) {
	return s && s === 'xs' ? 'sm' : s === 'xl' ? 'lg' : s;
}

const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let _size;
	let $$restProps = compute_rest_props($$props, ["type","value","size","defaultClass","color","floatClass"]);
	let $$slots = compute_slots(slots);
	let { type = 'text' } = $$props;
	let { value = undefined } = $$props;
	let { size = undefined } = $$props;
	let { defaultClass = 'block w-full disabled:cursor-not-allowed disabled:opacity-50' } = $$props;
	let { color = 'base' } = $$props;
	let { floatClass = 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400' } = $$props;

	const borderClasses = {
		base: 'border-gray-300 dark:border-gray-600',
		tinted: 'border-gray-300 dark:border-gray-500',
		green: 'border-green-500 dark:border-green-400',
		red: 'border-red-500 dark:border-red-400'
	};

	const ringClasses = {
		base: 'focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500',
		green: 'focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500',
		red: 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500'
	};

	const colorClasses = {
		base: 'bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
		tinted: 'bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400',
		green: 'bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700',
		red: 'bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700'
	};

	// tinted if put in component having its own background
	let background = getContext('background');

	let group = getContext('group');

	const textSizes = {
		sm: 'sm:text-xs',
		md: 'text-sm',
		lg: 'sm:text-base'
	};

	const leftPadding = { sm: 'pl-9', md: 'pl-10', lg: 'pl-11' };
	const rightPadding = { sm: 'pr-9', md: 'pr-10', lg: 'pr-11' };
	const inputPadding = { sm: 'p-2', md: 'p-2.5', lg: 'p-3' };
	let inputClass;
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.floatClass === void 0 && $$bindings.floatClass && floatClass !== void 0) $$bindings.floatClass(floatClass);
	_size = size || clampSize(group?.size) || 'md';

	{
		{
			const _color = color === 'base' && background ? 'tinted' : color;

			inputClass = twMerge([
				defaultClass,
				$$slots.left && leftPadding[_size] || $$slots.right && rightPadding[_size] || inputPadding[_size],
				ringClasses[color],
				colorClasses[_color],
				borderClasses[_color],
				textSizes[_size],
				group || 'rounded-lg',
				group && 'first:rounded-l-lg last:rounded-r-lg',
				group && 'border-l-0 first:border-l last:border-r',
				$$props.class
			]);
		}
	}

	return `${validate_component(Wrapper, "Wrapper").$$render(
		$$result,
		{
			class: "relative w-full",
			show: $$slots.left || $$slots.right
		},
		{},
		{
			default: () => {
				return `${$$slots.left
				? `<div class="${escape(twMerge(floatClass, $$props.classLeft), true) + " left-0 pl-2.5 pointer-events-none"}">${slots.left ? slots.left({}) : ``}</div>`
				: ``} ${slots.default
				? slots.default({
						props: { ...$$restProps, class: inputClass }
					})
				: ` <input${spread(
						[
							escape_object($$restProps),
							escape_object({ type }),
							{
								class: escape_attribute_value(inputClass)
							}
						],
						{}
					)}${add_attribute("value", value, 0)}> `} ${$$slots.right
				? `<div class="${escape(twMerge(floatClass, $$props.classRight), true) + " right-0 pr-2.5"}">${slots.right ? slots.right({}) : ``}</div>`
				: ``}`;
			}
		}
	)} `;
});

/* node_modules/flowbite-svelte/dist/forms/Textarea.svelte generated by Svelte v4.2.0 */

const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["value","wrappedClass","unWrappedClass","innerWrappedClass"]);
	let $$slots = compute_slots(slots);
	const background = getContext('background');
	let { value = undefined } = $$props;
	let { wrappedClass = 'block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0' } = $$props;
	let { unWrappedClass = 'p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500' } = $$props;
	let { innerWrappedClass = 'py-2 px-4 bg-white dark:bg-gray-800' } = $$props;
	let wrapped;
	let wrapperClass;
	let textareaClass;
	const headerClass = header => twMerge(header ? 'border-b' : 'border-t', 'py-2 px-3 border-gray-200 dark:border-gray-600');
	let innerWrapperClass;
	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	if ($$props.wrappedClass === void 0 && $$bindings.wrappedClass && wrappedClass !== void 0) $$bindings.wrappedClass(wrappedClass);
	if ($$props.unWrappedClass === void 0 && $$bindings.unWrappedClass && unWrappedClass !== void 0) $$bindings.unWrappedClass(unWrappedClass);
	if ($$props.innerWrappedClass === void 0 && $$bindings.innerWrappedClass && innerWrappedClass !== void 0) $$bindings.innerWrappedClass(innerWrappedClass);
	wrapped = $$slots.header || $$slots.footer;

	wrapperClass = twMerge(
		'w-full rounded-lg',
		background
		? 'bg-white dark:bg-gray-800'
		: 'bg-gray-50 dark:bg-gray-700',
		'text-gray-900 dark:placeholder-gray-400 dark:text-white ',
		'border border-gray-200 dark:border-gray-600',
		$$props.class
	);

	textareaClass = wrapped
	? wrappedClass
	: twMerge(wrapperClass, unWrappedClass);

	innerWrapperClass = twMerge(innerWrappedClass, $$slots.footer ? 'rounded-b-lg' : '', $$slots.header ? 'rounded-t-lg' : '');

	return `${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: wrapperClass }, {}, {
		default: () => {
			return `${$$slots.header
			? `<div${add_attribute("class", headerClass(true), 0)}>${slots.header ? slots.header({}) : ``}</div>`
			: ``} ${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: innerWrapperClass }, {}, {
				default: () => {
					return `<textarea${spread(
						[
							escape_object($$restProps),
							{
								class: escape_attribute_value(textareaClass)
							}
						],
						{}
					)}>${escape(value || "")}</textarea>`;
				}
			})} ${$$slots.footer
			? `<div${add_attribute("class", headerClass(false), 0)}>${slots.footer ? slots.footer({}) : ``}</div>`
			: ``}`;
		}
	})} `;
});

/* node_modules/flowbite-svelte/dist/modals/Modal.svelte generated by Svelte v4.2.0 */

const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, [
		"open","title","size","placement","autoclose","dismissable","backdropClass","defaultClass","outsideclose","dialogClass"
	]);

	let $$slots = compute_slots(slots);
	let { open = false } = $$props;
	let { title = '' } = $$props;
	let { size = 'md' } = $$props;
	let { placement = 'center' } = $$props;
	let { autoclose = false } = $$props;
	let { dismissable = true } = $$props;
	let { backdropClass = 'fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80' } = $$props;
	let { defaultClass = 'relative flex flex-col mx-auto' } = $$props;
	let { outsideclose = false } = $$props;
	let { dialogClass = 'fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex' } = $$props;
	const dispatch = createEventDispatcher();

	const getPlacementClasses = () => {
		switch (placement) {
			case 'top-left':
				return ['justify-start', 'items-start'];
			case 'top-center':
				return ['justify-center', 'items-start'];
			case 'top-right':
				return ['justify-end', 'items-start'];
			case 'center-left':
				return ['justify-start', 'items-center'];
			case 'center':
				return ['justify-center', 'items-center'];
			case 'center-right':
				return ['justify-end', 'items-center'];
			case 'bottom-left':
				return ['justify-start', 'items-end'];
			case 'bottom-center':
				return ['justify-center', 'items-end'];
			case 'bottom-right':
				return ['justify-end', 'items-end'];
			default:
				return ['justify-center', 'items-center'];
		}
	};

	const sizes = {
		xs: 'max-w-md',
		sm: 'max-w-lg',
		md: 'max-w-2xl',
		lg: 'max-w-4xl',
		xl: 'max-w-7xl'
	};

	let frameClass;

	let backdropCls = twMerge(backdropClass, $$props.classBackdrop);

	if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
	if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0) $$bindings.autoclose(autoclose);
	if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0) $$bindings.dismissable(dismissable);
	if ($$props.backdropClass === void 0 && $$bindings.backdropClass && backdropClass !== void 0) $$bindings.backdropClass(backdropClass);
	if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
	if ($$props.outsideclose === void 0 && $$bindings.outsideclose && outsideclose !== void 0) $$bindings.outsideclose(outsideclose);
	if ($$props.dialogClass === void 0 && $$bindings.dialogClass && dialogClass !== void 0) $$bindings.dialogClass(dialogClass);

	{
		dispatch(open ? 'open' : 'close');
	}

	frameClass = twMerge(defaultClass, 'w-full', $$props.class);

	return `${open
	? ` <div${add_attribute("class", backdropCls, 0)}></div>   <div${add_attribute("class", twMerge(dialogClass, $$props.classDialog, ...getPlacementClasses()), 0)} tabindex="-1" aria-modal="true" role="dialog"><div class="${"flex relative " + escape(sizes[size], true) + " w-full max-h-full"}"> ${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { rounded: true }, { shadow: true }, $$restProps, { class: frameClass }), {}, {
			default: () => {
				return ` ${$$slots.header || title
				? `${validate_component(Frame, "Frame").$$render(
						$$result,
						{
							color: $$restProps.color,
							class: "flex justify-between items-center p-4 rounded-t border-b"
						},
						{},
						{
							default: () => {
								return `${slots.header
								? slots.header({})
								: ` <h3 class="${"text-xl font-semibold " + escape($$restProps.color ? '' : 'text-gray-900 dark:text-white', true) + " p-0"}">${escape(title)}</h3> `} ${dismissable
								? `${validate_component(CloseButton, "CloseButton").$$render(
										$$result,
										{
											name: "Close modal",
											color: $$restProps.color
										},
										{},
										{}
									)}`
								: ``}`;
							}
						}
					)}`
				: `${dismissable
					? `${validate_component(CloseButton, "CloseButton").$$render(
							$$result,
							{
								name: "Close modal",
								class: "absolute top-3 right-2.5",
								color: $$restProps.color
							},
							{},
							{}
						)}`
					: ``}`}  <div${add_attribute("class", twMerge('p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain', $$props.bodyClass), 0)} role="document">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.footer
				? `${validate_component(Frame, "Frame").$$render(
						$$result,
						{
							color: $$restProps.color,
							class: "flex items-center p-6 space-x-2 rounded-b border-t"
						},
						{},
						{
							default: () => {
								return `${slots.footer ? slots.footer({}) : ``}`;
							}
						}
					)}`
				: ``}`;
			}
		})}</div></div>`
	: ``} `;
});

/* node_modules/flowbite-svelte/dist/navbar/Navbar.svelte generated by Svelte v4.2.0 */

const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["navClass","navDivClass","fluid"]);
	let { navClass = 'px-2 sm:px-4 py-2.5 w-full' } = $$props;
	let { navDivClass = 'mx-auto flex flex-wrap justify-between items-center ' } = $$props;
	let { fluid = false } = $$props;
	let hidden = true;

	let toggle = () => {
		hidden = !hidden;
	};

	if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0) $$bindings.navClass(navClass);
	if ($$props.navDivClass === void 0 && $$bindings.navDivClass && navDivClass !== void 0) $$bindings.navDivClass(navDivClass);
	if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0) $$bindings.fluid(fluid);

	{
		{
			// override default Frame value
			$$restProps.color = $$restProps.color ?? 'navbar';
		}
	}

	return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: "nav" }, $$restProps, { class: twMerge(navClass, $$props.class) }), {}, {
		default: () => {
			return `<div${add_attribute("class", twMerge(navDivClass, $$props.classNavDiv, fluid && 'w-full' || 'container'), 0)}>${slots.default ? slots.default({ hidden, toggle }) : ``}</div>`;
		}
	})} `;
});

/* node_modules/flowbite-svelte/dist/navbar/NavBrand.svelte generated by Svelte v4.2.0 */

const NavBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["href"]);
	let { href = '' } = $$props;
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);

	return `<a${spread(
		[
			{ href: escape_attribute_value(href) },
			escape_object($$restProps),
			{
				class: escape_attribute_value(twMerge('flex items-center', $$props.class))
			}
		],
		{}
	)}>${slots.default ? slots.default({}) : ``}</a> `;
});

/* node_modules/flowbite-svelte/dist/navbar/Menu.svelte generated by Svelte v4.2.0 */

const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["size","color","variation","ariaLabel"]);
	let { size = '24' } = $$props;
	let { color = 'currentColor' } = $$props;
	let { variation = 'outline' } = $$props;
	let { ariaLabel = 'bars 3' } = $$props;
	let viewBox;
	let svgpath;
	let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;
	let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0) $$bindings.variation(variation);
	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);

	{
		switch (variation) {
			case 'outline':
				svgpath = svgoutline;
				viewBox = '0 0 24 24';
				break;
			case 'solid':
				svgpath = svgsolid;
				viewBox = '0 0 24 24';
				break;
			default:
				svgpath = svgoutline;
				viewBox = '0 0 24 24';
		}
	}

	return `<svg${spread(
		[
			{ xmlns: "http://www.w3.org/2000/svg" },
			{ role: "button" },
			{ tabindex: "0" },
			{ width: escape_attribute_value(size) },
			{ height: escape_attribute_value(size) },
			{
				class: escape_attribute_value($$props.class)
			},
			escape_object($$restProps),
			{
				"aria-label": escape_attribute_value(ariaLabel)
			},
			{ fill: "none" },
			{ viewBox: escape_attribute_value(viewBox) },
			{ "stroke-width": "2" }
		],
		{}
	)}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg> `;
});

/* node_modules/flowbite-svelte/dist/navbar/NavHamburger.svelte generated by Svelte v4.2.0 */

const NavHamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["btnClass","menuClass"]);
	let { btnClass = 'ml-3 md:hidden' } = $$props;
	let { menuClass = 'h-6 w-6 shrink-0' } = $$props;
	if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0) $$bindings.btnClass(btnClass);
	if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass !== void 0) $$bindings.menuClass(menuClass);

	return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name: "Open main menu" }, $$restProps, { class: twMerge(btnClass, $$props.class) }), {}, {
		default: () => {
			return `${validate_component(Menu, "Menu").$$render(
				$$result,
				{
					class: twMerge(menuClass, $$props.classMenu)
				},
				{},
				{}
			)}`;
		}
	})} `;
});

/* node_modules/flowbite-svelte/dist/navbar/NavLi.svelte generated by Svelte v4.2.0 */

const NavLi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let active;
	let liClass;
	let $$restProps = compute_rest_props($$props, ["href","activeClass","nonActiveClass"]);
	let { href = '' } = $$props;
	let { activeClass = undefined } = $$props;
	let { nonActiveClass = undefined } = $$props;
	const context = getContext('navbarContext') ?? {};
	const activeUrlStore = getContext('activeUrl');
	let navUrl = '';

	activeUrlStore.subscribe(value => {
		navUrl = value;
	});

	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
	if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0) $$bindings.nonActiveClass(nonActiveClass);
	active = navUrl ? href === navUrl : false;

	liClass = twMerge(
		'block py-2 pr-4 pl-3 md:p-0 rounded md:border-0',
		active
		? activeClass ?? context.activeClass
		: nonActiveClass ?? context.nonActiveClass,
		$$props.class
	);

	return `<li>${(tag => {
		return tag
		? `<${href ? 'a' : 'div'}${spread(
				[
					{
						role: escape_attribute_value(href ? undefined : 'link')
					},
					{ href: escape_attribute_value(href) },
					escape_object($$restProps),
					{ class: escape_attribute_value(liClass) }
				],
				{}
			)}>${is_void(tag)
			? ''
			: `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? '' : `</${tag}>`}`
		: '';
	})(href ? 'a' : 'div')}</li> `;
});

/* node_modules/flowbite-svelte/dist/navbar/NavUl.svelte generated by Svelte v4.2.0 */

const NavUl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, [
		"activeUrl","divClass","ulClass","hidden","slideParams","activeClass","nonActiveClass"
	]);

	const activeUrlStore = writable('');
	let { activeUrl = '' } = $$props;
	let { divClass = 'w-full md:block md:w-auto' } = $$props;
	let { ulClass = 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium' } = $$props;
	let { hidden = true } = $$props;

	let { slideParams = {
		delay: 250,
		duration: 500,
		easing: quintOut
	} } = $$props;

	let { activeClass = 'text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent' } = $$props;
	let { nonActiveClass = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' } = $$props;
	setContext('navbarContext', { activeClass, nonActiveClass });
	setContext('activeUrl', activeUrlStore);
	let _divClass;
	let _ulClass;
	if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0) $$bindings.activeUrl(activeUrl);
	if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
	if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0) $$bindings.ulClass(ulClass);
	if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0) $$bindings.hidden(hidden);
	if ($$props.slideParams === void 0 && $$bindings.slideParams && slideParams !== void 0) $$bindings.slideParams(slideParams);
	if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
	if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0) $$bindings.nonActiveClass(nonActiveClass);

	{
		{
			activeUrlStore.set(activeUrl);
		}
	}

	_divClass = twMerge(divClass, $$props.class);

	_ulClass = twMerge(ulClass, // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
	$$props.classUl);

	return `${!hidden
	? `<div${spread(
			[
				escape_object($$restProps),
				{ class: escape_attribute_value(_divClass) },
				{ role: "button" },
				{ tabindex: "0" }
			],
			{}
		)}>${validate_component(Frame, "Frame").$$render(
			$$result,
			{
				tag: "ul",
				border: true,
				rounded: true,
				color: "navbarUl",
				class: _ulClass
			},
			{},
			{
				default: () => {
					return `${slots.default ? slots.default({}) : ``}`;
				}
			}
		)}</div>`
	: `<div${spread(
			[
				escape_object($$restProps),
				{ class: escape_attribute_value(_divClass) },
				{ hidden: hidden || null }
			],
			{}
		)}><ul${add_attribute("class", _ulClass, 0)}>${slots.default ? slots.default({}) : ``}</ul></div>`} `;
});

/* node_modules/flowbite-svelte/dist/typography/Heading.svelte generated by Svelte v4.2.0 */

const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["tag","color","customSize"]);
	let { tag = 'h1' } = $$props;
	let { color = 'text-gray-900 dark:text-white' } = $$props;
	let { customSize = '' } = $$props;

	const textSizes = {
		h1: 'text-5xl font-extrabold',
		h2: 'text-4xl font-bold',
		h3: 'text-3xl font-bold',
		h4: 'text-2xl font-bold',
		h5: 'text-xl font-bold',
		h6: 'text-lg font-bold'
	};

	if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.customSize === void 0 && $$bindings.customSize && customSize !== void 0) $$bindings.customSize(customSize);

	return `${(tag$1 => {
		return tag$1
		? `<${tag}${spread(
				[
					escape_object($$restProps),
					{
						class: escape_attribute_value(twMerge(customSize ? customSize : textSizes[tag], color, 'w-full', $$props.class))
					}
				],
				{}
			)}>${is_void(tag$1)
			? ''
			: `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? '' : `</${tag$1}>`}`
		: '';
	})(tag)} `;
});

/* node_modules/flowbite-svelte/dist/typography/Span.svelte generated by Svelte v4.2.0 */

const Span = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, [
		"italic","underline","linethrough","uppercase","gradient","highlight","highlightClass","decorationClass","gradientClass"
	]);

	let { italic = false } = $$props;
	let { underline = false } = $$props;
	let { linethrough = false } = $$props;
	let { uppercase = false } = $$props;
	let { gradient = false } = $$props;
	let { highlight = false } = $$props;
	let { highlightClass = 'text-blue-600 dark:text-blue-500' } = $$props;
	let { decorationClass = 'decoration-2 decoration-blue-400 dark:decoration-blue-600' } = $$props;
	let { gradientClass = 'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400' } = $$props;
	let underlineClass = twMerge('underline', decorationClass);

	let classSpan = twMerge(
		italic && 'italic',
		underline && underlineClass,
		linethrough && 'line-through',
		uppercase && 'uppercase',
		gradient
		? gradientClass
		: 'font-semibold text-gray-900 dark:text-white',
		highlight && highlightClass,
		$$props.class
	);

	if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0) $$bindings.italic(italic);
	if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0) $$bindings.underline(underline);
	if ($$props.linethrough === void 0 && $$bindings.linethrough && linethrough !== void 0) $$bindings.linethrough(linethrough);
	if ($$props.uppercase === void 0 && $$bindings.uppercase && uppercase !== void 0) $$bindings.uppercase(uppercase);
	if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0) $$bindings.gradient(gradient);
	if ($$props.highlight === void 0 && $$bindings.highlight && highlight !== void 0) $$bindings.highlight(highlight);
	if ($$props.highlightClass === void 0 && $$bindings.highlightClass && highlightClass !== void 0) $$bindings.highlightClass(highlightClass);
	if ($$props.decorationClass === void 0 && $$bindings.decorationClass && decorationClass !== void 0) $$bindings.decorationClass(decorationClass);
	if ($$props.gradientClass === void 0 && $$bindings.gradientClass && gradientClass !== void 0) $$bindings.gradientClass(gradientClass);
	return `<span${spread([escape_object($$restProps), { class: escape_attribute_value(classSpan) }], {})}>${slots.default ? slots.default({}) : ``}</span> `;
});

const isEmailModalOpen = atom(false);

/* src/layouts/_Footer.svelte generated by Svelte v4.2.0 */

const Footer_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(Footer, "Footer").$$render(
		$$result,
		{
			footerType: "socialmedia",
			class: "bg-[#420063]"
		},
		{},
		{
			default: () => {
				return `<div class="m-auto max-w-screen-xl"><div class="grid grid-flow-row grid-cols-12 sm:items-center sm:justify-between gap-4 mb-2">${validate_component(FooterBrand, "FooterBrand").$$render(
					$$result,
					{
						href: "/",
						src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_128,h_104,f_webp,q_auto/SRBooksLogo_uyvnpj.png",
						alt: "Simple Reads Books",
						name: "Simple Reads Books",
						class: "text-white",
						spanClass: "text-white text-md md:text-xl font-[Itim] whitespace-nowrap hidden sm:block",
						imgClass: "h-10 pr-3 sm:w-20 h-fit",
						aClass: "flex flex-row items-center min-w-[fit-content] mr-3 col-span-3 hidden sm:flex"
					},
					{},
					{}
				)} ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render(
					$$result,
					{
						ulClass: "flex flex-wrap items-center mb-6 text-xs sm:text-sm lg:text-base text-white sm:mb-0 dark:text-gray-400 min-w-[fit-content] justify-center sm:justify-end md:justify-center col-start-1 sm:col-start-4 col-end-13 md:col-end-10 h-full"
					},
					{},
					{
						default: () => {
							return `${validate_component(FooterLink, "FooterLink").$$render($$result, { href: "/terms" }, {}, {
								default: () => {
									return `Terms &amp; Conditions`;
								}
							})} ${validate_component(FooterLink, "FooterLink").$$render($$result, { href: "/privacy" }, {}, {
								default: () => {
									return `Privacy Policy`;
								}
							})} ${validate_component(FooterLink, "FooterLink").$$render($$result, { href: "/credits" }, {}, {
								default: () => {
									return `Credits`;
								}
							})} ${validate_component(FooterLink, "FooterLink").$$render($$result, { href: "/", aClass: "hidden" }, {}, {
								default: () => {
									return `Reviews`;
								}
							})}`;
						}
					}
				)} <div class="w-full rounded-xl col-start-1 md:col-start-10 col-end-13" role="button" tabindex="0"><p class="text-white text-xs pb-1 bg-transparent" data-svelte-h="svelte-1edl2a2">Subscribe for e-mail updates!</p> ${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "rounded-none w-full" }, {}, {
					default: () => {
						return `${validate_component(Input, "Input").$$render(
							$$result,
							{
								type: "email",
								id: "EMAIL",
								name: "EMAIL",
								placeholder: "name@gmail.com",
								size: "sm",
								class: "!rounded-none !rounded-tl !rounded-bl"
							},
							{},
							{
								left: () => {
									return `<svg slot="left" aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>`;
								}
							}
						)} ${validate_component(Button, "Button").$$render($$result, { color: "primary", size: "xs" }, {}, {
							default: () => {
								return `Subscribe`;
							}
						})}`;
					}
				})}</div></div>  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="flex flex-col sm:flex-row items-center justify-center sm:items-center sm:justify-between">${validate_component(FooterCopyright, "FooterCopyright").$$render(
					$$result,
					{
						href: "/",
						by: "Simple Reads Books, LLC.",
						spanClass: "text-xs text-white italic"
					},
					{},
					{}
				)} <div class="flex mt-4 space-x-6 sm:justify-center items-center sm:mt-0 text-white">${validate_component(FooterIcon, "FooterIcon").$$render(
					$$result,
					{
						href: "https://facebook.com/deborah.martin.3154",
						target: "_blank",
						class: "text-white hover:text-primary-500"
					},
					{},
					{
						default: () => {
							return `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>`;
						}
					}
				)} ${validate_component(FooterIcon, "FooterIcon").$$render(
					$$result,
					{
						href: "https://instagram.com/debbiemartin064",
						target: "_blank",
						class: "text-white hover:text-primary-500"
					},
					{},
					{
						default: () => {
							return `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>`;
						}
					}
				)} ${validate_component(FooterIcon, "FooterIcon").$$render(
					$$result,
					{
						href: "https://twitter.com/DeborahCMartin",
						target: "_blank",
						class: "text-white hover:text-primary-500"
					},
					{},
					{
						default: () => {
							return `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>`;
						}
					}
				)} ${validate_component(FooterIcon, "FooterIcon").$$render(
					$$result,
					{
						href: "https://www.goodreads.com/author/show/40765804.Deborah_Carter_Martin",
						target: "_blank",
						class: "text-white hover:text-primary-500"
					},
					{},
					{
						default: () => {
							return `<img src="/images/goodreads-icon.png" class="filter grayscale w-[20px]">`;
						}
					}
				)}</div></div></div>`;
			}
		}
	)}`;
});

/* node_modules/@unpic/svelte/dist/image.svelte generated by Svelte v4.2.0 */

const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let parentStyle;
	let props;
	let alt;
	let styleObj;
	let transformedProps;
	let style;
	({ style: parentStyle, ...props } = $$props);
	({ alt, style: styleObj, ...transformedProps } = transformProps({ ...props, style: {} }));
	style = [styleToCss(styleObj), parentStyle].filter(Boolean).join(";");

	return `<img${spread(
		[
			{ alt: escape_attribute_value(alt) },
			{ style: escape_attribute_value(style) },
			escape_object(transformedProps)
		],
		{}
	)}>`;
});

const name = "svelte";
const version$1 = "4.2.0";
const description = "Cybernetically enhanced web apps";
const type = "module";
const module = "src/runtime/index.js";
const main = "src/runtime/index.js";
const files = [
	"src",
	"!src/**/tsconfig.json",
	"types",
	"compiler.*",
	"register.js",
	"index.d.ts",
	"store.d.ts",
	"animate.d.ts",
	"transition.d.ts",
	"easing.d.ts",
	"motion.d.ts",
	"action.d.ts",
	"elements.d.ts",
	"svelte-html.d.ts",
	"README.md"
];
const exports = {
	"./package.json": "./package.json",
	".": {
		types: "./types/index.d.ts",
		browser: {
			"default": "./src/runtime/index.js"
		},
		"default": "./src/runtime/ssr.js"
	},
	"./compiler": {
		types: "./types/index.d.ts",
		require: "./compiler.cjs",
		"default": "./src/compiler/index.js"
	},
	"./action": {
		types: "./types/index.d.ts"
	},
	"./animate": {
		types: "./types/index.d.ts",
		"default": "./src/runtime/animate/index.js"
	},
	"./easing": {
		types: "./types/index.d.ts",
		"default": "./src/runtime/easing/index.js"
	},
	"./internal": {
		"default": "./src/runtime/internal/index.js"
	},
	"./motion": {
		types: "./types/index.d.ts",
		"default": "./src/runtime/motion/index.js"
	},
	"./store": {
		types: "./types/index.d.ts",
		"default": "./src/runtime/store/index.js"
	},
	"./internal/disclose-version": {
		"default": "./src/runtime/internal/disclose-version/index.js"
	},
	"./transition": {
		types: "./types/index.d.ts",
		"default": "./src/runtime/transition/index.js"
	},
	"./elements": {
		types: "./elements.d.ts"
	}
};
const engines = {
	node: ">=16"
};
const types = "types/index.d.ts";
const repository = {
	type: "git",
	url: "https://github.com/sveltejs/svelte.git",
	directory: "packages/svelte"
};
const keywords = [
	"UI",
	"framework",
	"templates",
	"templating"
];
const author = "Rich Harris";
const license = "MIT";
const bugs = {
	url: "https://github.com/sveltejs/svelte/issues"
};
const homepage = "https://svelte.dev";
const dependencies = {
	"@ampproject/remapping": "^2.2.1",
	"@jridgewell/sourcemap-codec": "^1.4.15",
	"@jridgewell/trace-mapping": "^0.3.18",
	acorn: "^8.9.0",
	"aria-query": "^5.3.0",
	"axobject-query": "^3.2.1",
	"code-red": "^1.0.3",
	"css-tree": "^2.3.1",
	"estree-walker": "^3.0.3",
	"is-reference": "^3.0.1",
	"locate-character": "^3.0.0",
	"magic-string": "^0.30.0",
	periscopic: "^3.1.0"
};
const devDependencies = {
	"@playwright/test": "^1.35.1",
	"@rollup/plugin-commonjs": "^24.1.0",
	"@rollup/plugin-json": "^6.0.0",
	"@rollup/plugin-node-resolve": "^15.1.0",
	"@sveltejs/eslint-config": "^6.0.4",
	"@types/aria-query": "^5.0.1",
	"@types/estree": "^1.0.1",
	"@types/node": "^14.18.51",
	agadoo: "^3.0.0",
	"dts-buddy": "^0.1.7",
	esbuild: "^0.18.11",
	"happy-dom": "^9.20.3",
	jsdom: "^21.1.2",
	kleur: "^4.1.5",
	rollup: "^3.26.2",
	"source-map": "^0.7.4",
	"tiny-glob": "^0.2.9",
	typescript: "^5.1.3",
	vitest: "^0.33.0"
};
const scripts = {
	format: "prettier . --cache --plugin-search-dir=. --write",
	check: "tsc --noEmit",
	test: "vitest run && echo \"manually check that there are no type errors in test/types by opening the files in there\"",
	build: "rollup -c && pnpm types",
	"generate:version": "node ./scripts/generate-version.js",
	dev: "rollup -cw",
	posttest: "agadoo src/internal/index.js",
	types: "node ./scripts/generate-dts.js",
	lint: "prettier . --cache --plugin-search-dir=. --check && eslint \"{src,test}/**/*.{ts,js}\" --cache"
};
const sveltePkg = {
	name: name,
	version: version$1,
	description: description,
	type: type,
	module: module,
	main: main,
	files: files,
	exports: exports,
	engines: engines,
	types: types,
	repository: repository,
	keywords: keywords,
	author: author,
	license: license,
	bugs: bugs,
	homepage: homepage,
	dependencies: dependencies,
	devDependencies: devDependencies,
	scripts: scripts
};

const version = "1.1.0";
const metadata = {
	version: version
};

const SVELTE_CLOUDINARY_ANALYTICS_ID = 'E';
const SVELTE_CLOUDINARY_VERSION = metadata.version.split('-')[0];
const SVELTE_VERSION = `${sveltePkg.version.split('.')[0]}.0.0`;

/**
 * Generates the Cloudinary url for the assets
 * based on the configuration passed to the function
 * @returns string
*/
function getCldImageUrl(options, config, analytics) {
    return constructCloudinaryUrl({
        options,
        config: Object.assign({
            cloud: {
                cloudName: "simple-reads-books" ,
            }
        }, config),
        analytics: Object.assign({
            sdkCode: SVELTE_CLOUDINARY_ANALYTICS_ID,
            sdkSemver: SVELTE_CLOUDINARY_VERSION,
            techVersion: SVELTE_VERSION,
            product: 'B'
        }, analytics)
    });
}

/* node_modules/svelte-cloudinary/dist/components/CldImage.svelte generated by Svelte v4.2.0 */

const { Object: Object_1 } = globals;

const CldImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let alt;
	let src;
	let width;
	let height;
	let config;
	let imageProps;
	const CLD_OPTIONS = ["config", "deliveryType", "preserveTransformations"];

	transformationPlugins.forEach(({ props = [] }) => {
		props.forEach(prop => {
			if (CLD_OPTIONS.includes(prop)) {
				throw new Error(`Option ${prop} already exists!`);
			}

			CLD_OPTIONS.push(prop);
		});
	});

	const cldOptions = {};

	CLD_OPTIONS.forEach(key => {
		if ($$props[key]) {
			cldOptions[key] = $$props[key] || void 0;
		}
	});

	if ($$props.preserveTransformations) {
		try {
			const transformations = getTransformations(imageProps.src).map(t => t.join(","));
			cldOptions.rawTransformations = [...transformations.flat(), ...$$props.rawTransformations || []];
		} catch(e) {
			console.warn(`Failed to preserve transformations: ${e.message}`);
		}
	}

	({ alt, src, width, height, config } = $$props);

	imageProps = {
		alt,
		src,
		width: typeof width === "string" ? parseInt(width) : width,
		height: typeof height === "string" ? parseInt(height) : height
	};

	{
		if (imageProps) {
			Object.keys($$props).filter(key => !CLD_OPTIONS.includes(key)).forEach(key => {
				imageProps[key] = $$props[key];
			});
		}
	}

	return `${imageProps.src
	? `${validate_component(Image, "Image").$$render(
			$$result,
			Object_1.assign({}, imageProps, { cdn: "cloudinary" }, {
				transformer: ({ width }) => {
					const options = {
						...imageProps,
						...cldOptions,
						// Without, get a "never" type error on options.width
						width: imageProps.width
					};

					options.width = typeof options.width === 'string'
					? parseInt(options.width)
					: options.width;

					options.height = typeof options.height === 'string'
					? parseInt(options.height)
					: options.height;

					// The transformer options are used to create dynamic sizing when working with responsive images
					// so these should override the default options collected from the props alone if
					// the results are different.
					if (typeof width === 'number' && typeof options.width === 'number' && width !== options.width) {
						options.widthResize = width;
					}

					return getCldImageUrl(options, config);
				}
			}),
			{},
			{}
		)}`
	: ``}`;
});

/* src/components/NavBar.svelte generated by Svelte v4.2.0 */
const MAX_PAGE_WIDTH = 1440;
let currentPath = "";

const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let headerClass;
	let loaded;
	let navDivClass;
	let hunnieBunnieClass;
	let hunnieBunnieReadingClass;
	let { randomNum } = $$props;
	let currentUrlPathname = currentPath;

	if ($$props.randomNum === void 0 && $$bindings.randomNum && randomNum !== void 0) $$bindings.randomNum(randomNum);

	headerClass = "w-full relative overflow-hidden relative"
	;

	loaded = false;
	navDivClass = "mx-auto flex flex-wrap justify-between items-center max-w-screen-xl" + (!loaded ? " animate-flipInX" : "");
	hunnieBunnieClass = "absolute bottom-[-9px] right-[-5px] sm:bottom-[-12px] md:bottom-[-22px] md:right-[-10px] lg:bottom-[-22px] lg:right-[-5px] h-16 sm:h-20 md:h-40 lg:h-40 !w-fit" + (!loaded ? " animate-slideUp" : "");
	hunnieBunnieReadingClass = "absolute hidden sm:block sm:left-[-4%] md:left-[-3%] left-[-4%] bottom-[0px] rotate-3 sm:h-[100px] md:h-[140px] h-[80px] !w-fit" + (!loaded ? " animate-slideInFromLeft" : "");

	return ` <div id="header-container">  <header${add_attribute("class", headerClass, 0)}>${validate_component(Navbar, "Navbar").$$render(
		$$result,
		{
			color: "form",
			navClass: "w-full md:absolute md:bg-transparent bg-[#FF5A1F] text-white p-3",
			navDivClass,
			class: "max-w-screen-xl"
		},
		{},
		{
			default: ({ hidden, toggle }) => {
				return `${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/" }, {}, {
					default: () => {
						return `<div class="md:hidden flex flex-row justify-center items-center min-w-min">${validate_component(CldImage, "CldImage").$$render(
							$$result,
							{
								width: 128,
								height: "100%",
								aspectRatio: 128 / 104,
								src: "logo",
								class: "mr-3 !w-12 sm:!w-16",
								alt: "logo",
								loading: "eager"
							},
							{},
							{}
						)} <span class="self-center whitespace-nowrap sm dark:text-white font-[Itim] text-md sm:text-lg" data-svelte-h="svelte-s6olct">Simple Reads Books</span></div>`;
					}
				})} ${validate_component(NavHamburger, "NavHamburger").$$render($$result, { class: "hover:bg-primary" }, {}, {})} ${validate_component(NavUl, "NavUl").$$render(
					$$result,
					{
						hidden,
						activeUrl: currentUrlPathname,
						nonActiveClass: "md:text-white md:font-bold md:hover:transform md:hover:scale-125",
						activeClass: "font-extrabold text-white underline bg-green-400 bg-pink-500 md:bg-transparent",
						ulClass: "flex flex-col p-3 mt-3 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium bg-transparent",
						divClass: "w-full md:block md:w-auto md:bg-black md:bg-opacity-[.15] md:rounded-full md:mr-2 md:mt-2 md:[transform:perspective(250px)_translateZ(0)_rotateX(5deg)]",
						color: "green"
					},
					{},
					{
						default: () => {
							return `${validate_component(NavLi, "NavLi").$$render($$result, { href: "/home" }, {}, {
								default: () => {
									return `<span data-svelte-h="svelte-19qdaju">Welcome</span>`;
								}
							})} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/about" }, {}, {
								default: () => {
									return `<span data-svelte-h="svelte-1poeibp">About</span>`;
								}
							})} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/products" }, {}, {
								default: () => {
									return `<span data-svelte-h="svelte-ont76m">Books &amp; Products</span>`;
								}
							})} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/contact" }, {}, {
								default: () => {
									return `<span data-svelte-h="svelte-1mqhoa6">Contact</span>`;
								}
							})}`;
						}
					}
				)}`;
			}
		}
	)} ${validate_component(CldImage, "CldImage").$$render(
		$$result,
		{
			src: "banner",
			width: MAX_PAGE_WIDTH * 2,
			aspectRatio: 338 / 100,
			height: "100%",
			alt: "Simple Reads Books Banner",
			sizes: "100vw",
			class: "max-w-screen-2xl m-auto",
			loading: "eager"
		},
		{},
		{}
	)} ${validate_component(CldImage, "CldImage").$$render(
		$$result,
		{
			src: "hunnie-bunnie-peering-over",
			width: 450,
			aspectRatio: 7 / 5,
			height: "100%",
			alt: "Hunnie Bunny Peering Over",
			class: hunnieBunnieClass
		},
		{},
		{}
	)} ${validate_component(CldImage, "CldImage").$$render(
		$$result,
		{
			src: "hunnie-bunnie-reading",
			width: 450,
			aspectRatio: 7 / 5,
			height: "100%",
			alt: "Hunnie Bunny Reading",
			class: hunnieBunnieReadingClass
		},
		{},
		{}
	)}</header></div>`;
});

/* src/layouts/_EmailSubscribeModal.svelte generated by Svelte v4.2.0 */

const EmailSubscribeModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $isEmailModalOpen, $$unsubscribe_isEmailModalOpen;
	$$unsubscribe_isEmailModalOpen = subscribe(isEmailModalOpen, value => $isEmailModalOpen = value);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `${validate_component(Modal, "Modal").$$render(
			$$result,
			{
				class: "w-fit h-fit pt-10",
				autoclose: true,
				open: $isEmailModalOpen
			},
			{
				open: $$value => {
					$isEmailModalOpen = $$value;
					$$settled = false;
				}
			},
			{
				default: () => {
					return `<iframe title="email subscribe" width="540" height="540" src="https://cb8831b5.sibforms.com/serve/MUIFAAlGMe78lSVFkIYUCGSb2MNQDS5_DdlDLsckCsxmqSUdh2yo0ZkJsUu0II_U0BSAwsPnzkxTmUW5kLyZmIr2EWtSk4V1sDYqKe4yV6xBlyPnFMqIPrjlvJqZBx_7Smqhxr1q_30uur1_-joez43hUw1ucLcu_zp7FnrJn1zJZ8B3qgCIMxPaxlhAKZvLSeaEh3O0Qlumw18x" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;" class="-mx-10"></iframe>`;
				}
			}
		)}`;
	} while (!$$settled);

	$$unsubscribe_isEmailModalOpen();
	return $$rendered;
});

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  Astro2.url.pathname;
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
  }
  const randomNum = generateRandomNumber();
  return renderTemplate`<title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<!-- Meta --><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"><!-- Favicon --><!-- Fonts -->${maybeRenderHead()}<body><div id="page-container" class="m-auto max-w-screen-xl w-full overflow-hidden flex flex-col bg-white">${renderComponent($$result, "NavBar", NavBar, { "randomNum": randomNum, "client:load": true, "data-astro-transition-persist": "header", "client:component-hydration": "load", "client:component-path": "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/components/NavBar.svelte", "client:component-export": "default" })}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", Footer_1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/layouts/_Footer.svelte", "client:component-export": "default" })}${renderComponent($$result, "EmailSubscribeModal", EmailSubscribeModal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/layouts/_EmailSubscribeModal.svelte", "client:component-export": "default" })}</div></body>`;
}, "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/layouts/Layout.astro", "self");

/* src/components/ButtonBack.svelte generated by Svelte v4.2.0 */

const ButtonBack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(Button, "Button").$$render(
		$$result,
		{
			class: "bg-primary-500 text-white mt-[24px]",
			size: "lg"
		},
		{},
		{
			default: () => {
				return `<svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"></path></svg>
	Go back`;
			}
		}
	)}`;
});

const $$Astro = createAstro();
const $$Credits = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Credits;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "credits" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="max-w-2xl m-auto mb-5 prose-lg font-light"><section class="w-full flex flex-col justify-center items-center my-10"><h1 class="text-4xl font-extrabold">Credits</h1>${renderComponent($$result2, "ButtonBack", ButtonBack, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/components/ButtonBack.svelte", "client:component-export": "default" })}</section><p>
Website by <a class="text-blue-500 font-bold" href="https://jsonmart.in">Jason Martin</a></p><p>Illustrations by <b>Sandamali Kamalchandra</b></p><p class="-mb-5">Images</p><ul class="list-disc"><li class="list-item"><span class="text-gray-500 font-thin">empty-kindergarten-room-with-rainbow-sky-wallpaper 16455786 [brgfx on Freepik.com]</span></li></ul></div>` })}`;
}, "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/credits.astro", void 0);

const $$file = "/Users/json/Projects/SimpleReadsBooks/SimpleReadsBooks/src/pages/credits.astro";
const $$url = "/credits";

const credits = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Credits,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Button as B, CldImage as C, Heading as H, Input as I, Label as L, Modal as M, Span as S, Thumbnails as T, add_attribute as a, Badge as b, create_ssr_component as c, Card as d, compute_rest_props as e, escape_object as f, getContext as g, escape_attribute_value as h, Carousel as i, ButtonBack as j, Textarea as k, credits as l, spread as s, validate_component as v };
