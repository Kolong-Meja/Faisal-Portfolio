import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["FaisalRamadhan.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ev4vwC8T.js","app":"_app/immutable/entry/app.D6ro7vA4.js","imports":["_app/immutable/entry/start.ev4vwC8T.js","_app/immutable/chunks/entry.Cxkn6Ig3.js","_app/immutable/chunks/Component.ksqY3KJS.js","_app/immutable/chunks/index.DFzMhGnD.js","_app/immutable/entry/app.D6ro7vA4.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/Component.ksqY3KJS.js","_app/immutable/chunks/index.IHki7fMi.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
