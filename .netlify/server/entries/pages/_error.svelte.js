import { g as getContext, c as create_ssr_component, d as subscribe, e as escape } from "../../chunks/ssr.js";
import "../../chunks/exports.js";
import "devalue";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="bg-gray-50 font-lato min-h-screen max-w-full"><div class="flex h-screen justify-center items-center"><div class="flex flex-col space-y-4">${$page.status === 404 ? `<h1 class="text-gray-900 text-3xl font-semibold md:text-4xl lg:text-5xl">${escape($page.status)} ${escape($page.error?.message)}</h1> <p class="text-gray-900 text-base font-normal md:text-lg"><span class="underline underline-offset-2 font-semibold">${escape($page.url.pathname)}</span> path is
					not exist.</p>` : ``} ${$page.status === 500 ? `<h1 class="text-gray-900 text-5xl font-semibold md:text-4xl lg:text-5xl">${escape($page.status)} ${escape($page.error?.message)}</h1> <p class="text-gray-900 text-base font-normal md:text-lg" data-svelte-h="svelte-p0d6pn">There&#39;s an issue with our server. Please wait until we fix it.</p>` : ``}</div></div></div>`;
});
export {
  Error$1 as default
};
