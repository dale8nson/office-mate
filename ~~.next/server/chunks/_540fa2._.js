module.exports = {

"[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"44d5bb4b269a6af123b04f91ccdc97a2ca9b3867":"getThumbLink","68d54108ce72ba81a4df6a28356b67884d12da0e":"getRootFolderId","6f841681903f4bdcc5f605b8ee7c963a588b0b7b":"getFileParentIDs","bc516a7b7afad84a354116b826858c24273d918a":"getFile","c0125e8480146fc3da070f012d10bff350cec169":"driveFetch","c1f40d0e1ee03146fc2edcb238f867cc63d82850":"imageSize","db02d6669d1e13667cefeb97613c268ae3626593":"getFiles"} */ __turbopack_esm__({
    "driveFetch": ()=>driveFetch,
    "getFile": ()=>getFile,
    "getFileParentIDs": ()=>getFileParentIDs,
    "getFiles": ()=>getFiles,
    "getRootFolderId": ()=>getRootFolderId,
    "getThumbLink": ()=>getThumbLink,
    "imageSize": ()=>imageSize
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
    const req = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](`https://www.googleapis.com/drive/v3/files?pageSize=1000${pageToken ? `&pageToken=${pageToken}` : ''}${fields ? `&fields=${fields}` : ''}${query ? `&q=${query}` : ''}`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    const res = fetch(req).then((res)=>{
        return res.json();
    });
    return res;
};
const getFile = async (fileId, fields = null)=>{
    const access_token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"]().get('access_token')?.value;
    // console.log(`getFile access_token:`, access_token);
    const req = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](`https://www.googleapis.com/drive/v3/files/${fileId}${fields ? '?fields=' + fields : ''}`, {
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
const imageSize = async (url)=>{
    const req = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](url);
    const sz = fetch(req).then((res)=>res.arrayBuffer()).then((ab)=>Buffer.from(ab)).then((buf)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$image$2d$size$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageSize"](buf)).then((imgSz)=>{
        return {
            width: imgSz.width,
            height: imgSz.height
        };
    });
    return sz;
};
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"]([
    getThumbLink,
    getFiles,
    getFileParentIDs,
    driveFetch,
    imageSize,
    getFile,
    getRootFolderId
]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("44d5bb4b269a6af123b04f91ccdc97a2ca9b3867", getThumbLink);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("db02d6669d1e13667cefeb97613c268ae3626593", getFiles);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("6f841681903f4bdcc5f605b8ee7c963a588b0b7b", getFileParentIDs);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("c0125e8480146fc3da070f012d10bff350cec169", driveFetch);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("c1f40d0e1ee03146fc2edcb238f867cc63d82850", imageSize);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("bc516a7b7afad84a354116b826858c24273d918a", getFile);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("68d54108ce72ba81a4df6a28356b67884d12da0e", getRootFolderId);

})()),
"[project]/.next-internal/server/app/api/folderfilemap/route/actions.js/(ACTIONS_MODULE0)/[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript) (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

__turbopack_export_value__({
    '44d5bb4b269a6af123b04f91ccdc97a2ca9b3867': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['getThumbLink'])(...args)),
    '68d54108ce72ba81a4df6a28356b67884d12da0e': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['getRootFolderId'])(...args)),
    '6f841681903f4bdcc5f605b8ee7c963a588b0b7b': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['getFileParentIDs'])(...args)),
    'bc516a7b7afad84a354116b826858c24273d918a': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['getFile'])(...args)),
    'c0125e8480146fc3da070f012d10bff350cec169': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['driveFetch'])(...args)),
    'c1f40d0e1ee03146fc2edcb238f867cc63d82850': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['imageSize'])(...args)),
    'db02d6669d1e13667cefeb97613c268ae3626593': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['getFiles'])(...args))
});

}.call(this) }),
"[project]/app/api/folderfilemap/route.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>GET
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$cloud$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/desktop/cloud/cloud-actions.ts [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const getFolderFileMap = async (folderMeta = [], pageToken = null)=>{
    const rootFolderId = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$cloud$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRootFolderId"]();
    console.log(`rootFolderId: ${rootFolderId}`);
    return await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$cloud$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFiles"]('files(name,id,mimeType,parents),nextPageToken', 'mimeType%3d%27application/vnd.google-apps.folder%27', pageToken).then((meta)=>{
        const folders = [
            ...meta.files.filter((file)=>Object.hasOwn(file, 'parents') && file.parents[0] === rootFolderId)
        ];
        // console.log(`filesMeta:`, filesMeta);
        folderMeta = [
            ...folderMeta,
            ...folders
        ];
        if (Object.hasOwn(meta, 'nextPageToken') && meta.nextPageToken !== pageToken) {
            getFolderFileMap(folderMeta, meta.nextPageToken);
        }
        console.log(`folderMeta:`, folderMeta);
        return folderMeta;
    }).then((folderMeta)=>{
        console.log(`folderMeta:`, folderMeta);
        let folderFileMap = {};
        for (const folder of folderMeta){
            console.log(`folder:`, folder);
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$cloud$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFiles"]('files(id,name,mimeType,hasThumbnail,thumbnailLink,iconLink)', `%27${folder.id}%27+in+parents`).then((meta)=>{
                // console.log(`files in ${folder.name}:`, meta.files);
                folderFileMap[folder.id] = {
                    folderName: folder.name,
                    files: meta.files
                };
                console.log(`folderFileMap:`, folderFileMap);
            });
        }
        console.log(`folderFileMap:`, folderFileMap);
        return folderFileMap;
    });
};
const GET = async ()=>{
    const folderFileMap = await getFolderFileMap();
    console.log(`GET route.ts folderFileMap:`, folderFileMap);
    // const str = JSON.stringify(folderFileMap);
    // console.log(`str: ${str}`);
    const res = new Response(folderFileMap);
    return res.blob();
};
;

})()),

};

//# sourceMappingURL=_540fa2._.js.map