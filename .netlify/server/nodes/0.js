

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D62LEHZH.js","_app/immutable/chunks/Component.ksqY3KJS.js","_app/immutable/chunks/index.IHki7fMi.js"];
export const stylesheets = ["_app/immutable/assets/0.D3Uy35dB.css"];
export const fonts = [];
