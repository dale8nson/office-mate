module.exports = {

"[project]/.next-internal/server/app/api/auth/[...nextauth]/route/actions.js (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

__turbopack_export_value__({});

}.call(this) }),
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
"[project]/app/api/auth/[...nextauth]/route.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>GET,
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/auth.ts [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const { GET: AuthGET, POST: AuthPOST } = __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handlers"];
async function POST(request) {
    // console.log(`POST request:`, request);
    const res = await AuthPOST(request);
    return res;
}
async function GET(request) {
    let response = await AuthGET(request);
    // console.log(`route response:`, response);
    return response;
}

})()),

};

//# sourceMappingURL=_66909f._.js.map