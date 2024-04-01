"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/profile/route";
exports.ids = ["app/api/profile/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=D%3A%5Cproject%5Ctech-trendz%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cproject%5Ctech-trendz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=D%3A%5Cproject%5Ctech-trendz%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cproject%5Ctech-trendz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_project_tech_trendz_src_app_api_profile_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/profile/route.js */ \"(rsc)/./src/app/api/profile/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/profile/route\",\n        pathname: \"/api/profile\",\n        filename: \"route\",\n        bundlePath: \"app/api/profile/route\"\n    },\n    resolvedPagePath: \"D:\\\\project\\\\tech-trendz\\\\src\\\\app\\\\api\\\\profile\\\\route.js\",\n    nextConfigOutput,\n    userland: D_project_tech_trendz_src_app_api_profile_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/profile/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9maWxlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9maWxlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvZmlsZSUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDcHJvamVjdCU1Q3RlY2gtdHJlbmR6JTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDcHJvamVjdCU1Q3RlY2gtdHJlbmR6JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1U7QUFDdkY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWNoLXRyZW5kei8/OGIwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxwcm9qZWN0XFxcXHRlY2gtdHJlbmR6XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHByb2ZpbGVcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2ZpbGUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wcm9maWxlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wcm9maWxlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxccHJvamVjdFxcXFx0ZWNoLXRyZW5kelxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxwcm9maWxlXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3Byb2ZpbGUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=D%3A%5Cproject%5Ctech-trendz%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cproject%5Ctech-trendz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _app_models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/models/User */ \"(rsc)/./src/app/models/User.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n\n\n\n\nvar bcrypt = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\nconst authOptions = {\n    secret: process.env.SECRET,\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            name: \"Credentials\",\n            id: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"test@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const email = credentials?.email;\n                const password = credentials?.password;\n                mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(process.env.MONGO_URL);\n                const user = await _app_models_User__WEBPACK_IMPORTED_MODULE_0__.User.findOne({\n                    email\n                });\n                const passwordOk = user && bcrypt.compareSync(password, user.password);\n                console.log(user);\n                if (passwordOk) {\n                    return user;\n                }\n                return null;\n            }\n        })\n    ]\n};\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUM7QUFDVDtBQUNNO0FBQzRCO0FBQ2xFLElBQUlJLFNBQVNDLG1CQUFPQSxDQUFDO0FBRWQsTUFBTUMsY0FBYztJQUN2QkMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxNQUFNO0lBQzFCQyxXQUFXO1FBQ1BSLDJFQUFtQkEsQ0FBQztZQUNoQlMsTUFBTTtZQUNOQyxJQUFJO1lBQ0pDLGFBQWE7Z0JBQ1RDLFVBQVU7b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07b0JBQVNDLGFBQWE7Z0JBQW1CO2dCQUMzRUMsVUFBVTtvQkFBRUgsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNwRDtZQUNBLE1BQU1HLFdBQVVOLFdBQVcsRUFBRU8sR0FBRztnQkFDNUIsTUFBTUMsUUFBUVIsYUFBYVE7Z0JBQzNCLE1BQU1ILFdBQVdMLGFBQWFLO2dCQUU5QmxCLHVEQUFnQixDQUFDTyxRQUFRQyxHQUFHLENBQUNlLFNBQVM7Z0JBQ3RDLE1BQU1DLE9BQU8sTUFBTXpCLGtEQUFJQSxDQUFDMEIsT0FBTyxDQUFDO29CQUFFSjtnQkFBTTtnQkFDeEMsTUFBTUssYUFBYUYsUUFBUXJCLE9BQU93QixXQUFXLENBQUNULFVBQVVNLEtBQUtOLFFBQVE7Z0JBQ3JFVSxRQUFRQyxHQUFHLENBQUNMO2dCQUVaLElBQUlFLFlBQVk7b0JBQ1osT0FBT0Y7Z0JBQ1g7Z0JBRUEsT0FBTztZQUNYO1FBQ0o7S0FDSDtBQUNMLEVBQUU7QUFFRixNQUFNTSxVQUFVN0IsMERBQVFBLENBQUNJO0FBRWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVjaC10cmVuZHovLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/MjMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkAvYXBwL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG52YXIgYmNyeXB0ID0gcmVxdWlyZSgnYmNyeXB0anMnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXHJcbiAgICAgICAgICAgIGlkOiAnY3JlZGVudGlhbHMnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCJ0ZXN0QGV4YW1wbGUuY29tXCIgfSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWwgPSBjcmVkZW50aWFscz8uZW1haWw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IGNyZWRlbnRpYWxzPy5wYXNzd29yZDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRPayA9IHVzZXIgJiYgYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXNzd29yZE9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBdLFxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcclxuXHJcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfVxyXG4iXSwibmFtZXMiOlsiVXNlciIsIm1vbmdvb3NlIiwiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwicmVxdWlyZSIsImF1dGhPcHRpb25zIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVCIsInByb3ZpZGVycyIsIm5hbWUiLCJpZCIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwiZW1haWwiLCJjb25uZWN0IiwiTU9OR09fVVJMIiwidXNlciIsImZpbmRPbmUiLCJwYXNzd29yZE9rIiwiY29tcGFyZVN5bmMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/profile/route.js":
/*!**************************************!*\
  !*** ./src/app/api/profile/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _app_models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/models/User */ \"(rsc)/./src/app/models/User.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n\n\n\n\nasync function PUT(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(process.env.MONGO_URL);\n    const data = await req.json();\n    console.log(data);\n    const { _id, name, streetAddress, postalCode, city, phone } = data;\n    let filter = {};\n    if (_id) {\n        filter = {\n            _id\n        };\n    } else {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        const email = session?.user?.email;\n        filter = {\n            email\n        };\n    }\n    await _app_models_User__WEBPACK_IMPORTED_MODULE_0__.User.findOneAndUpdate(filter, {\n        name,\n        streetAddress,\n        postalCode,\n        city,\n        phone\n    });\n    return Response.json(true);\n}\nasync function GET(req, res) {\n    mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(process.env.MONGO_URL);\n    const url = new URL(req.url);\n    const _id = url.searchParams.get(\"_id\");\n    let filterUser = {};\n    if (_id) {\n        filterUser = {\n            _id\n        };\n    } else {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        const email = session?.user?.email;\n        if (!email) {\n            return Response.json({});\n        }\n        filterUser = {\n            email\n        };\n    }\n    const user = await _app_models_User__WEBPACK_IMPORTED_MODULE_0__.User.findOne(filterUser).lean();\n    return Response.json({\n        ...user\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9maWxlL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1Q7QUFDYTtBQUNhO0FBRW5ELGVBQWVJLElBQUlDLEdBQUc7SUFDekJKLHVEQUFnQixDQUFDTSxRQUFRQyxHQUFHLENBQUNDLFNBQVM7SUFFdEMsTUFBTUMsT0FBTyxNQUFNTCxJQUFJTSxJQUFJO0lBQzNCQyxRQUFRQyxHQUFHLENBQUNIO0lBQ1osTUFBTSxFQUFFSSxHQUFHLEVBQUVDLElBQUksRUFBRUMsYUFBYSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdUO0lBRTlELElBQUlVLFNBQVMsQ0FBQztJQUNkLElBQUlOLEtBQUs7UUFDTE0sU0FBUztZQUFFTjtRQUFJO0lBQ25CLE9BQU87UUFDSCxNQUFNTyxVQUFVLE1BQU1uQiwyREFBZ0JBLENBQUNDLDZEQUFXQTtRQUNsRCxNQUFNbUIsUUFBUUQsU0FBU0UsTUFBTUQ7UUFDN0JGLFNBQVM7WUFBRUU7UUFBTTtJQUNyQjtJQUVBLE1BQU10QixrREFBSUEsQ0FBQ3dCLGdCQUFnQixDQUFDSixRQUFRO1FBQUVMO1FBQU1DO1FBQWVDO1FBQVlDO1FBQU1DO0lBQU07SUFFbkYsT0FBT00sU0FBU2QsSUFBSSxDQUFDO0FBQ3pCO0FBR08sZUFBZWUsSUFBSXJCLEdBQUcsRUFBRXNCLEdBQUc7SUFDOUIxQix1REFBZ0IsQ0FBQ00sUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBRXRDLE1BQU1tQixNQUFNLElBQUlDLElBQUl4QixJQUFJdUIsR0FBRztJQUMzQixNQUFNZCxNQUFNYyxJQUFJRSxZQUFZLENBQUNDLEdBQUcsQ0FBQztJQUVqQyxJQUFJQyxhQUFhLENBQUM7SUFDbEIsSUFBSWxCLEtBQUs7UUFDTGtCLGFBQWE7WUFBRWxCO1FBQUk7SUFDdkIsT0FBTztRQUNILE1BQU1PLFVBQVUsTUFBTW5CLDJEQUFnQkEsQ0FBQ0MsNkRBQVdBO1FBQ2xELE1BQU1tQixRQUFRRCxTQUFTRSxNQUFNRDtRQUM3QixJQUFJLENBQUNBLE9BQU87WUFDUixPQUFPRyxTQUFTZCxJQUFJLENBQUMsQ0FBQztRQUMxQjtRQUNBcUIsYUFBYTtZQUFFVjtRQUFNO0lBQ3pCO0lBRUEsTUFBTUMsT0FBTyxNQUFNdkIsa0RBQUlBLENBQUNpQyxPQUFPLENBQUNELFlBQVlFLElBQUk7SUFHaEQsT0FBT1QsU0FBU2QsSUFBSSxDQUFDO1FBQUUsR0FBR1ksSUFBSTtJQUFDO0FBQ25DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVjaC10cmVuZHovLi9zcmMvYXBwL2FwaS9wcm9maWxlL3JvdXRlLmpzPzEzNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAL2FwcC9tb2RlbHMvVXNlclwiO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4uL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXEpIHtcclxuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3QgeyBfaWQsIG5hbWUsIHN0cmVldEFkZHJlc3MsIHBvc3RhbENvZGUsIGNpdHksIHBob25lIH0gPSBkYXRhO1xyXG5cclxuICAgIGxldCBmaWx0ZXIgPSB7fTtcclxuICAgIGlmIChfaWQpIHtcclxuICAgICAgICBmaWx0ZXIgPSB7IF9pZCB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IHNlc3Npb24/LnVzZXI/LmVtYWlsO1xyXG4gICAgICAgIGZpbHRlciA9IHsgZW1haWwgfTtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBVc2VyLmZpbmRPbmVBbmRVcGRhdGUoZmlsdGVyLCB7IG5hbWUsIHN0cmVldEFkZHJlc3MsIHBvc3RhbENvZGUsIGNpdHksIHBob25lIH0pO1xyXG5cclxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHRydWUpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEsIHJlcykge1xyXG4gICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwpO1xyXG5cclxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxLnVybCk7XHJcbiAgICBjb25zdCBfaWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnX2lkJyk7XHJcblxyXG4gICAgbGV0IGZpbHRlclVzZXIgPSB7fTtcclxuICAgIGlmIChfaWQpIHtcclxuICAgICAgICBmaWx0ZXJVc2VyID0geyBfaWQgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gc2Vzc2lvbj8udXNlcj8uZW1haWw7XHJcbiAgICAgICAgaWYgKCFlbWFpbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbHRlclVzZXIgPSB7IGVtYWlsIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZShmaWx0ZXJVc2VyKS5sZWFuKCk7XHJcblxyXG5cclxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHsgLi4udXNlciB9KTtcclxufSJdLCJuYW1lcyI6WyJVc2VyIiwibW9uZ29vc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJQVVQiLCJyZXEiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSTCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIl9pZCIsIm5hbWUiLCJzdHJlZXRBZGRyZXNzIiwicG9zdGFsQ29kZSIsImNpdHkiLCJwaG9uZSIsImZpbHRlciIsInNlc3Npb24iLCJlbWFpbCIsInVzZXIiLCJmaW5kT25lQW5kVXBkYXRlIiwiUmVzcG9uc2UiLCJHRVQiLCJyZXMiLCJ1cmwiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJmaWx0ZXJVc2VyIiwiZmluZE9uZSIsImxlYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/profile/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/models/User.js":
/*!********************************!*\
  !*** ./src/app/models/User.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String\n    },\n    streetAddress: {\n        type: String\n    },\n    postalCode: {\n        type: String\n    },\n    city: {\n        type: String\n    },\n    phone: {\n        type: Number\n    }\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVscy9Vc2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUVqRCxNQUFNRyxhQUFhLElBQUlELDRDQUFNQSxDQUFDO0lBQzVCRSxNQUFNO1FBQUVDLE1BQU1DO0lBQU87SUFDckJDLE9BQU87UUFBRUYsTUFBTUM7UUFBUUUsVUFBVTtRQUFNQyxRQUFRO0lBQUs7SUFDcERDLFVBQVU7UUFBRUwsTUFBTUM7SUFBTztJQUN6QkssZUFBZTtRQUFFTixNQUFNQztJQUFPO0lBQzlCTSxZQUFZO1FBQUVQLE1BQU1DO0lBQU87SUFDM0JPLE1BQU07UUFBRVIsTUFBTUM7SUFBTztJQUNyQlEsT0FBTztRQUFFVCxNQUFNVTtJQUFPO0FBQ3hCLEdBQUc7SUFBRUMsWUFBWTtBQUFLO0FBRWYsTUFBTUMsT0FBT2hCLDRDQUFNQSxFQUFFZ0IsUUFBUWpCLCtDQUFLQSxDQUFDLFFBQVFHLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWNoLXRyZW5kei8uL3NyYy9hcHAvbW9kZWxzL1VzZXIuanM/M2IxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2RlbCwgbW9kZWxzLCBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gIHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gIHN0cmVldEFkZHJlc3M6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgcG9zdGFsQ29kZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICBjaXR5OiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gIHBob25lOiB7IHR5cGU6IE51bWJlciB9LFxyXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlciA9IG1vZGVscz8uVXNlciB8fCBtb2RlbCgnVXNlcicsIFVzZXJTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsIlVzZXJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsImVtYWlsIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJwYXNzd29yZCIsInN0cmVldEFkZHJlc3MiLCJwb3N0YWxDb2RlIiwiY2l0eSIsInBob25lIiwiTnVtYmVyIiwidGltZXN0YW1wcyIsIlVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/models/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=D%3A%5Cproject%5Ctech-trendz%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cproject%5Ctech-trendz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();