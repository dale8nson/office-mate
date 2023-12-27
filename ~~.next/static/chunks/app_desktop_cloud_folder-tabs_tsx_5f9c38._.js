(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_desktop_cloud_folder-tabs_tsx_5f9c38._.js", {

"[project]/app/desktop/cloud/folder-tabs.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Tabs/Tabs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Tab/Tab.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$file$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/desktop/cloud/file-card.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
const FolderTabs = ({ folderNames, folderFileMap })=>{
    _s();
    const [tabIndex, setTabIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    // const [folderFileMap, setFolderFileMap] = useState(null)
    // folderFileMap = JSON.parse(folderFileMap);
    const [tabs, setTabs] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [fileCards, setFileCards] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    // console.log(`folderFileMap:`, folderFileMap);
    folderFileMap.then((map)=>console.log(`folderFileMap:`, map));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        folderNames.then((names)=>{
            console.log(`folderNames (length: ${Object.keys(names).length}):`, names);
            const tbs = [];
            for(const id in names){
                tbs.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    value: tbs.length,
                    label: names[id]
                }, id, false, {
                    fileName: "<[project]/app/desktop/cloud/folder-tabs.tsx>",
                    lineNumber: 49,
                    columnNumber: 11
                }, this));
            }
            setTabs(tbs);
        });
        folderFileMap.then((map)=>{
            const fileGroups = [];
            for(const folderId in folderFileMap){
                const fileCards = [];
                for (const meta of map[folderId].files){
                    fileCards.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$desktop$2f$cloud$2f$file$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fileId: meta.id,
                        file: meta,
                        fileName: meta.name,
                        thumbLink: meta.thumbnailLink
                    }, meta.id, false, {
                        fileName: "<[project]/app/desktop/cloud/folder-tabs.tsx>",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this));
                }
                fileGroups.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    index: fileGroups.length,
                    hidden: fileGroups.length !== tabIndex,
                    children: fileCards
                }, folderId, false, {
                    fileName: "<[project]/app/desktop/cloud/folder-tabs.tsx>",
                    lineNumber: 67,
                    columnNumber: 11
                }, this));
            }
            setFileCards(fileGroups);
        });
    }, []);
    // folderFileMap.then(map => console.log(`folderFileMap:`, map));
    const tabChanged = (e, v)=>{
        console.log(`new tab index: ${v}`);
        setTabIndex(v);
    };
    // const tabs: ReactElement[] = [];
    // if (!!folderFileMap) {
    //   console.log(`folderFileMap:`, folderFileMap);
    //   const mapKeys = Object.keys(folderFileMap);
    //   for (let i = 0; i < mapKeys.length; i++) {
    //     tabs.push(
    //       // <Suspense key={mapKeys[i]} >
    //       <>
    //         {folderFileMap && <Tab key={mapKeys[i]} value={i} label={<h1>{folderFileMap[i].folderName}</h1>} sx={{ marginInline: 'auto' }} />}
    //       {/* </Suspense> */}
    //       </>
    //     )
    //   }
    // }
    // const fileCards = 
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        component: "main",
        sx: {
            display: 'flex',
            width: '100vw',
            height: '100vh'
        },
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                component: "section",
                sx: {
                    width: '10%',
                    bgcolor: 'background.paper',
                    margin: 0,
                    position: 'fixed',
                    top: '65px',
                    left: '5%',
                    height: '100vh'
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    orientation: "vertical",
                    value: tabIndex,
                    variant: "scrollable",
                    onChange: tabChanged,
                    sx: {
                        marginInline: 'auto'
                    },
                    children: tabs
                }, void 0, false, {
                    fileName: "<[project]/app/desktop/cloud/folder-tabs.tsx>",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/desktop/cloud/folder-tabs.tsx>",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                component: "section",
                sx: {
                    width: '70vw',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: '25%',
                    overflow: 'scroll'
                }
            }, void 0, false, {
                fileName: "<[project]/app/desktop/cloud/folder-tabs.tsx>",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/desktop/cloud/folder-tabs.tsx>",
        lineNumber: 99,
        columnNumber: 5
    }, this);
};
_s(FolderTabs, "glcv85xPU3LKwKU1mfBSbk7EBWw=");
_c = FolderTabs;
const __TURBOPACK__default__export__ = FolderTabs;
var _c;
__turbopack_refresh__.register(_c, "FolderTabs");

})()),
}]);

//# sourceMappingURL=app_desktop_cloud_folder-tabs_tsx_5f9c38._.js.map