module.exports = {

"[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"44d5bb4b269a6af123b04f91ccdc97a2ca9b3867":"getThumbLink","68d54108ce72ba81a4df6a28356b67884d12da0e":"getRootFolderId","6f841681903f4bdcc5f605b8ee7c963a588b0b7b":"getFileParentIDs","b4b4adcd29ec984d1849c1341bb4c18a85321792":"getImageSize","bc516a7b7afad84a354116b826858c24273d918a":"getFile","c0125e8480146fc3da070f012d10bff350cec169":"driveFetch","db02d6669d1e13667cefeb97613c268ae3626593":"getFiles"} */ __turbopack_esm__({
    "driveFetch": ()=>driveFetch,
    "getFile": ()=>getFile,
    "getFileParentIDs": ()=>getFileParentIDs,
    "getFiles": ()=>getFiles,
    "getImageSize": ()=>getImageSize,
    "getRootFolderId": ()=>getRootFolderId,
    "getThumbLink": ()=>getThumbLink
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/action-encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/web/exports/next-request.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$image$2d$size$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/image-size/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
let tabIndex = 0;
// let tabRefFunc: (func: Function) => void;
const driveFetch = async (action)=>{
    const access_token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"]().get('access_token')?.value;
    return await fetch(`https:www.googleapis.com/drive/v3/${action}`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
};
const getThumbLink = async (fileId)=>{
    if (!fileId) return null;
    const access_token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"]().get('access_token')?.value;
    const req = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](`https://www.googleapis.com/drive/v3/files/${fileId}?fields=thumbnailLink`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    console.log(`now fetching thumbnail link for file id ${fileId}`);
    // const file = await fetch(req).then(res => res.json()).catch(error => console.log(`error fetching thumbnail link: ${error}`));
    return fetch(req).then((res)=>{
        return res.json();
    }).catch((error)=>console.log(new Error(error))).then((json)=>{
        return console.log(`json:`, json), json?.thumbnailLink || null;
    }).catch((error)=>console.log(new Error(error)));
};
const getRootFolderId = async ()=>{
    const access_token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"]().get('access_token')?.value;
    const req = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](`https://www.googleapis.com/drive/v3/files?trashed=false&q=mimeType+%3d+%27application/vnd.google-apps.folder%27+and+name%3d%27.OfficeMate%27&fields=files(id)`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    const res = fetch(req).then((res)=>{
        return res.json();
    }).then((json)=>{
        console.log(json);
        return json.files[0].id;
    });
    return res;
};
const getFiles = async (fields = null, query = null, pageToken = null)=>{
    const access_token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"]().get('access_token')?.value;
    const req = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](`https://www.googleapis.com/drive/v3/files?orderBy=name&pageSize=1000${pageToken ? `&pageToken=${pageToken}` : ''}${fields ? `&fields=${fields}` : ''}${query ? `&q=${query}` : ''}`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    const res = fetch(req).then((res)=>{
        return res.json();
    });
    return res;
};
const getFile = async (fileId, fields = null, query = null)=>{
    const access_token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"]().get('access_token')?.value;
    // console.log(`getFile access_token:`, access_token);
    const req = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](`https://www.googleapis.com/drive/v3/files/${fileId}${fields ? '?fields=' + fields : ''}${query && fields ? `&${query}` : query ? `?${query}` : ''}`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    // console.log(`file request:`, req);
    return fetch(req).then((res)=>res.json());
// const json = await res.json();
// console.log(`getFiles files:`, json);
// return json;
};
const getFileParentIDs = async (fileId)=>{
    if (!fileId) return null;
    const access_token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"]().get('access_token')?.value;
    const url = new URL(`https://www.googleapis.com/drive/v3/files/${fileId}?fields=parents`);
    if (!URL.canParse(url)) return null;
    const req = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](url, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    return fetch(req).then((res)=>res.json()).catch((error)=>{
        return console.log(new Error(`fileID ${fileId}: ${error}`)), null;
    }).then((json)=>{
        return Object.keys(json).length > 0 ? json.parents[0] : null;
    }).catch((error)=>{
        return console.log(new Error(error)), null;
    });
// console.log(`file:`, file);
// return (typeof file === 'object' && Object.keys(file).length > 0) ? file.parents[0] : null;
};
const getImageSize = async (url)=>{
    if (!url) return {
        width: 256,
        height: 256
    };
    const req = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](`${url}?alt=media`);
    const res = await fetch(req);
    const ab = await res.arrayBuffer();
    const buf = Buffer.from(ab);
    let sz = {};
    try {
        sz = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$image$2d$size$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageSize"](buf);
    } catch (e) {
        console.log(new Error(e));
        return null;
    }
    // const sz = fetch(req).then(res => res.arrayBuffer()).then(ab => Buffer.from(ab)).then(buf => imgSz(buf)).then(imgSz => { return { width: imgSz.width, height: imgSz.height } });
    return sz;
};
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"]([
    getThumbLink,
    getFiles,
    getFileParentIDs,
    driveFetch,
    getImageSize,
    getFile,
    getRootFolderId
]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("44d5bb4b269a6af123b04f91ccdc97a2ca9b3867", getThumbLink);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("db02d6669d1e13667cefeb97613c268ae3626593", getFiles);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("6f841681903f4bdcc5f605b8ee7c963a588b0b7b", getFileParentIDs);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("c0125e8480146fc3da070f012d10bff350cec169", driveFetch);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("b4b4adcd29ec984d1849c1341bb4c18a85321792", getImageSize);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("bc516a7b7afad84a354116b826858c24273d918a", getFile);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("68d54108ce72ba81a4df6a28356b67884d12da0e", getRootFolderId);

})()),
"[project]/.next-internal/server/app/desktop/cloud/page/actions.js/(ACTIONS_MODULE0)/[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript) (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

__turbopack_export_value__({
    '44d5bb4b269a6af123b04f91ccdc97a2ca9b3867': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['getThumbLink'])(...args)),
    '68d54108ce72ba81a4df6a28356b67884d12da0e': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['getRootFolderId'])(...args)),
    '6f841681903f4bdcc5f605b8ee7c963a588b0b7b': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['getFileParentIDs'])(...args)),
    'b4b4adcd29ec984d1849c1341bb4c18a85321792': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['getImageSize'])(...args)),
    'bc516a7b7afad84a354116b826858c24273d918a': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['getFile'])(...args)),
    'c0125e8480146fc3da070f012d10bff350cec169': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['driveFetch'])(...args)),
    'db02d6669d1e13667cefeb97613c268ae3626593': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['getFiles'])(...args))
});

}.call(this) }),
"[project]/app/themes.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "$$typeof": ()=>$$typeof,
    "__esModule": ()=>__esModule,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const proxy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProxy"]("[project]/app/themes.tsx");
// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
;
const __TURBOPACK__default__export__ = proxy;

})()),
"[project]/app/themes.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$themes$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/app/themes.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$themes$2e$tsx__$28$client__proxy$29$__["default"]);

})()),
"[project]/app/layout.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>LayoutRoot,
    "metadata": ()=>metadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$themes$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/themes.tsx [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
function LayoutRoot({ children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$themes$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("html", {
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("body", {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SessionProvider"], {
                    children: children
                }, void 0, false, {
                    fileName: "<[project]/app/layout.tsx>",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/layout.tsx>",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/app/layout.tsx>",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/layout.tsx>",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
const metadata = {
    title: 'OfficeMate',
    description: 'Generated by create next app'
};

})()),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/app/layout.tsx [app-rsc] (ecmascript)"),
});

})()),
"[project]/app/desktop/main.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "$$typeof": ()=>$$typeof,
    "__esModule": ()=>__esModule,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const proxy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProxy"]("[project]/app/desktop/main.tsx");
// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
;
const __TURBOPACK__default__export__ = proxy;

})()),
"[project]/app/desktop/main.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$main$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/app/desktop/main.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$main$2e$tsx__$28$client__proxy$29$__["default"]);

})()),
"[project]/app/desktop/ui.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "$$typeof": ()=>$$typeof,
    "__esModule": ()=>__esModule,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const proxy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProxy"]("[project]/app/desktop/ui.tsx");
// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
;
const __TURBOPACK__default__export__ = proxy;

})()),
"[project]/app/desktop/ui.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$ui$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/app/desktop/ui.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$ui$2e$tsx__$28$client__proxy$29$__["default"]);

})()),
"[project]/app/desktop/layout.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/CssBaseline/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$ui$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/desktop/ui.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$main$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/desktop/main.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$themes$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/themes.tsx [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const Layout = ({ children })=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$themes$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    display: 'flex'
                },
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/app/desktop/layout.tsx>",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$ui$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/app/desktop/layout.tsx>",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$main$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        children: children
                    }, void 0, false, {
                        fileName: "<[project]/app/desktop/layout.tsx>",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/desktop/layout.tsx>",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/app/desktop/layout.tsx>",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
const __TURBOPACK__default__export__ = Layout;

})()),
"[project]/app/desktop/layout.tsx [app-rsc] (ecmascript, Next.js server component)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/app/desktop/layout.tsx [app-rsc] (ecmascript)"),
});

})()),
"[project]/app/desktop/cloud/loading.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const Loading = ()=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "<[project]/app/desktop/cloud/loading.tsx>",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Loading;

})()),
"[project]/app/desktop/cloud/loading.tsx [app-rsc] (ecmascript, Next.js server component)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/app/desktop/cloud/loading.tsx [app-rsc] (ecmascript)"),
});

})()),
"[project]/lib/X509-cert-4934576125579953724.pem [app-rsc] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/X509-cert-4934576125579953724.08a284ad.pem");
})()),
"[project]/lib/mongodb.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mongodb$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/mongodb/lib/index.js [app-rsc] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_resolve_absolute_path__("lib/mongodb.ts")}`;
    }
};
"__TURBOPACK__ecmascript__hoisting__location__";
;
const credentials = new __turbopack_relative_url__(__turbopack_require__("[project]/lib/X509-cert-4934576125579953724.pem [app-rsc] (static)"));
if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const uri = process.env.MONGODB_URI;
const options = {
    tlsCertificateKeyFile: credentials,
    serverApi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mongodb$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ServerApiVersion"].v1
};
let client;
let clientPromise;
if ("TURBOPACK compile-time truthy", 1) {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global;
    if (!globalWithMongo._mongoClientPromise) {
        client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mongodb$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MongoClient"](uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    "TURBOPACK unreachable";
}
const __TURBOPACK__default__export__ = clientPromise;

})()),
"[project]/app/desktop/cloud/folder-tabs.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "$$typeof": ()=>$$typeof,
    "__esModule": ()=>__esModule,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const proxy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProxy"]("[project]/app/desktop/cloud/folder-tabs.tsx");
// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
;
const __TURBOPACK__default__export__ = proxy;

})()),
"[project]/app/desktop/cloud/folder-tabs.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$folder$2d$tabs$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/app/desktop/cloud/folder-tabs.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$folder$2d$tabs$2e$tsx__$28$client__proxy$29$__["default"]);

})()),
"[project]/auth.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "auth": ()=>auth,
    "handlers": ()=>handlers,
    "signIn": ()=>signIn,
    "signOut": ()=>signOut
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__NextAuth__as__default$7d$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) {export NextAuth as default}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/next-auth/providers/google.js [app-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/node_modules/@auth/core/providers/google.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const { handlers, auth, signIn, signOut } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__NextAuth__as__default$7d$__["default"]({
    debug: true,
    callbacks: {
        async jwt ({ token, user, account, profile, session }) {
            // const userToken = await SignToken(user?.email as string);
            // const secret = jose.base64url.decode(process.env.NEXTAUTH_SECRET as string);
            // const userToken = await new EncryptJWT(user?.email).setProtectedHeader({alg:'dir', enc:'A128CBC-HS256', typ:'at+JWT'}).encrypt(secret);
            //   token.userToken = userToken;
            return token;
        },
        async signIn ({ account, user }) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"]().set('id_token', account?.id_token);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"]().set('access_token', account?.access_token);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"]().set('refresh_token', account?.access_token);
            // console.log(`signIn account:`, account);
            // access_token = account?.access_token as String;
            // console.log(`signIn user:`, user)
            return true // Do different verification for other providers that don't have `email_verified`
            ;
        },
        async session ({ session, user, token }) {
            // console.log(`session session:`, session);
            // console.log(`token:`, token);
            // console.log(`session user:`, user);
            // session.loggedUser = token.userToken;
            return session;
        }
    },
    // secret: process.env.NEXTAUTH_SECRET as string,
    session: {
        strategy: 'jwt'
    },
    providers: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                idToken: true,
                params: {
                    type: 'oauth',
                    scope: "openid profile email https://www.googleapis.com/auth/drive",
                    access_type: "offline",
                    prompt: "select_account",
                    response_type: "code",
                    redirect_uri: 'http://localhost:3000/api/auth/callback/google'
                }
            }
        })
    ]
});

})()),
"[project]/app/desktop/cloud/page.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$folder$2d$tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/desktop/cloud/folder-tabs.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Skeleton$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Skeleton/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$cloud$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/mongodb.ts [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
const Page = async ()=>{
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]?.then((client)=>console.log(`client:`, client));
    const rootFolderId = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$cloud$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRootFolderId"]();
    // console.log(`rootFolderId: ${rootFolderId}`);
    let files = [];
    let folders = [];
    const getTopLevelFolders = async (folderNames = {}, pageToken = null)=>{
        const rootFolderId = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$cloud$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRootFolderId"]();
        const folders = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$cloud$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFiles"]('files(id,name),nextPageToken', `%27${rootFolderId}%27+in+parents+and+mimeType+contains+%27folder%27`, pageToken);
        for (const folder of folders.files){
            folderNames[folder.id] = folder.name;
        }
        if (Object.hasOwn(folders, 'nextPageToken')) void await getTopLevelFolders(folderNames, folders.nextPageToken);
        return folderNames;
    };
    const folderNames = getTopLevelFolders();
    // console.log(`folderNames`, folderNames);
    const getFolderFiles = async (folderId, files = [], pageToken = null)=>{
        const fs = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$cloud$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFiles"]('files(id,parents,name,mimeType,hasThumbnail,thumbnailLink,iconLink),nextPageToken', `%27${folderId}%27+in+parents`, pageToken);
        // console.log(`fs:`, fs);
        const fileIds = [];
        // console.log()
        for (const file of fs.files){
            fileIds.push(file.id);
        }
        files.push(fs);
        if (Object.hasOwn(fs, 'nextPageToken')) void await getFolderFiles(folderId, files, fs.nextPageToken);
        return files;
    };
    const getFolderFileMap = async (folderFileMap = {})=>{
        const folderNames = await getTopLevelFolders();
        for(const id in folderNames){
            // console.log(`folder ID:`, id);
            const files = await getFolderFiles(id);
            folderFileMap[id] = {
                folderName: folderNames[id],
                files: [
                    ...files[0].files
                ]
            };
        }
        // console.log(`folderFileMap:`, folderFileMap);
        return folderFileMap;
    };
    const folderFileMap = getFolderFileMap();
    // console.log(`folderFileMap:`, folderFileMap);
    const getImageSizes = async ()=>{
        const map = await folderFileMap;
        const imageSizes = {};
        for(const folderId in map){
            console.log(`map[${folderId}]:`, map[folderId]);
            for (const file of map[folderId].files){
                imageSizes[file.id] = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$cloud$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getImageSize"](file.thumbnailLink);
            }
        }
        console.log(`imagSizes:`, imageSizes);
        return imageSizes;
    };
    const imageSizes = getImageSizes();
    console.log(`imageSizes:`, imageSizes);
    const getFileNames = async (fileNames = {}, pageToken = null)=>{
        const files = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$cloud$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFiles"]('files(id,name),nextPageToken', null, pageToken);
        // console.log(`files:`, files);
        for (const file of files.files){
            fileNames[file.id] = file.name;
        }
        if (Object.hasOwn(files, 'nextPageToken')) void await getFileNames(fileNames, files.nextPageToken);
        return fileNames;
    };
    let fileNames = {};
    // fileNames = getFileNames();
    // console.log(`fileNames:`, fileNames);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        component: "main",
        sx: {
            width: '100%',
            height: '100%'
        },
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Skeleton$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                variant: "rounded",
                width: "100%",
                height: "100%"
            }, void 0, false, {
                fileName: "<[project]/app/desktop/cloud/page.tsx>",
                lineNumber: 139,
                columnNumber: 27
            }, void 0),
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$folder$2d$tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                folderNames,
                folderFileMap,
                imageSizes
            }, void 0, false, {
                fileName: "<[project]/app/desktop/cloud/page.tsx>",
                lineNumber: 140,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/app/desktop/cloud/page.tsx>",
            lineNumber: 139,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/desktop/cloud/page.tsx>",
        lineNumber: 138,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Page;

})()),
"[project]/app/desktop/cloud/page.tsx [app-rsc] (ecmascript, Next.js server component)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/app/desktop/cloud/page.tsx [app-rsc] (ecmascript)"),
});

})()),

};

//# sourceMappingURL=_2861a1._.js.map