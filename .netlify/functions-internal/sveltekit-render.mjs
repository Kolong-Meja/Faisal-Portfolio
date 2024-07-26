import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/FaisalRamadhan.png","images/favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CvrfVXFa.js","app":"_app/immutable/entry/app.BIoqJ-d-.js","imports":["_app/immutable/entry/start.CvrfVXFa.js","_app/immutable/chunks/entry.2lYwU2eT.js","_app/immutable/chunks/Component.ksqY3KJS.js","_app/immutable/chunks/index.DFzMhGnD.js","_app/immutable/entry/app.BIoqJ-d-.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/Component.ksqY3KJS.js","_app/immutable/chunks/index.IHki7fMi.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
