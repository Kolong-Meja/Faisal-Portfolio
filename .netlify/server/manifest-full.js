export const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.C4kZTKgU.js","app":"_app/immutable/entry/app.xhlYtRXr.js","imports":["_app/immutable/entry/start.C4kZTKgU.js","_app/immutable/chunks/entry.N5r1uXnr.js","_app/immutable/chunks/Component.DDDSe3ML.js","_app/immutable/chunks/index.BwH1_EqP.js","_app/immutable/entry/app.xhlYtRXr.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/Component.DDDSe3ML.js","_app/immutable/chunks/index.IHki7fMi.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
})();
