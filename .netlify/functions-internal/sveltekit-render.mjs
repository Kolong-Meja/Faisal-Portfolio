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
		client: {"start":"_app/immutable/entry/start.BK4F1pgN.js","app":"_app/immutable/entry/app.BOvZbxZz.js","imports":["_app/immutable/entry/start.BK4F1pgN.js","_app/immutable/chunks/entry.qjWYI8LK.js","_app/immutable/chunks/Component.DDDSe3ML.js","_app/immutable/chunks/index.BwH1_EqP.js","_app/immutable/entry/app.BOvZbxZz.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/Component.DDDSe3ML.js","_app/immutable/chunks/index.IHki7fMi.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
