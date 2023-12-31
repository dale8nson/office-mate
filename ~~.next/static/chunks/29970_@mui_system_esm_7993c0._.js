(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/29970_@mui_system_esm_7993c0._.js", {

"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/colorManipulator.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "alpha": ()=>alpha,
    "colorChannel": ()=>colorChannel,
    "darken": ()=>darken,
    "decomposeColor": ()=>decomposeColor,
    "emphasize": ()=>emphasize,
    "getContrastRatio": ()=>getContrastRatio,
    "getLuminance": ()=>getLuminance,
    "hexToRgb": ()=>hexToRgb,
    "hslToRgb": ()=>hslToRgb,
    "lighten": ()=>lighten,
    "private_safeAlpha": ()=>private_safeAlpha,
    "private_safeColorChannel": ()=>private_safeColorChannel,
    "private_safeDarken": ()=>private_safeDarken,
    "private_safeEmphasize": ()=>private_safeEmphasize,
    "private_safeLighten": ()=>private_safeLighten,
    "recomposeColor": ()=>recomposeColor,
    "rgbToHex": ()=>rgbToHex
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$formatMuiErrorMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__formatMuiErrorMessage$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/utils/esm/formatMuiErrorMessage.js [app-client] (ecmascript) {export default as formatMuiErrorMessage}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/* eslint-disable @typescript-eslint/naming-convention */ /**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */ function clamp(value, min = 0, max = 1) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (value < min || value > max) {
            console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`);
        }
    }
    return Math.min(Math.max(min, value), max);
}
function hexToRgb(color) {
    color = color.slice(1);
    const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
    let colors = color.match(re);
    if (colors && colors[0].length === 1) {
        colors = colors.map((n)=>n + n);
    }
    return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index)=>{
        return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
    }).join(', ')})` : '';
}
function intToHex(int) {
    const hex = int.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
}
function decomposeColor(color) {
    // Idempotent
    if (color.type) {
        return color;
    }
    if (color.charAt(0) === '#') {
        return decomposeColor(hexToRgb(color));
    }
    const marker = color.indexOf('(');
    const type = color.substring(0, marker);
    if ([
        'rgb',
        'rgba',
        'hsl',
        'hsla',
        'color'
    ].indexOf(type) === -1) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: Unsupported \`${color}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ("TURBOPACK unreachable", undefined));
    }
    let values = color.substring(marker + 1, color.length - 1);
    let colorSpace;
    if (type === 'color') {
        values = values.split(' ');
        colorSpace = values.shift();
        if (values.length === 4 && values[3].charAt(0) === '/') {
            values[3] = values[3].slice(1);
        }
        if ([
            'srgb',
            'display-p3',
            'a98-rgb',
            'prophoto-rgb',
            'rec-2020'
        ].indexOf(colorSpace) === -1) {
            throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ("TURBOPACK unreachable", undefined));
        }
    } else {
        values = values.split(',');
    }
    values = values.map((value)=>parseFloat(value));
    return {
        type,
        values,
        colorSpace
    };
}
const colorChannel = (color)=>{
    const decomposedColor = decomposeColor(color);
    return decomposedColor.values.slice(0, 3).map((val, idx)=>decomposedColor.type.indexOf('hsl') !== -1 && idx !== 0 ? `${val}%` : val).join(' ');
};
const private_safeColorChannel = (color, warning)=>{
    try {
        return colorChannel(color);
    } catch (error) {
        if (warning && ("TURBOPACK compile-time value", "development") !== 'production') {
            console.warn(warning);
        }
        return color;
    }
};
function recomposeColor(color) {
    const { type, colorSpace } = color;
    let { values } = color;
    if (type.indexOf('rgb') !== -1) {
        // Only convert the first 3 values to int (i.e. not alpha)
        values = values.map((n, i)=>i < 3 ? parseInt(n, 10) : n);
    } else if (type.indexOf('hsl') !== -1) {
        values[1] = `${values[1]}%`;
        values[2] = `${values[2]}%`;
    }
    if (type.indexOf('color') !== -1) {
        values = `${colorSpace} ${values.join(' ')}`;
    } else {
        values = `${values.join(', ')}`;
    }
    return `${type}(${values})`;
}
function rgbToHex(color) {
    // Idempotent
    if (color.indexOf('#') === 0) {
        return color;
    }
    const { values } = decomposeColor(color);
    return `#${values.map((n, i)=>intToHex(i === 3 ? Math.round(255 * n) : n)).join('')}`;
}
function hslToRgb(color) {
    color = decomposeColor(color);
    const { values } = color;
    const h = values[0];
    const s = values[1] / 100;
    const l = values[2] / 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12)=>l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    let type = 'rgb';
    const rgb = [
        Math.round(f(0) * 255),
        Math.round(f(8) * 255),
        Math.round(f(4) * 255)
    ];
    if (color.type === 'hsla') {
        type += 'a';
        rgb.push(values[3]);
    }
    return recomposeColor({
        type,
        values: rgb
    });
}
function getLuminance(color) {
    color = decomposeColor(color);
    let rgb = color.type === 'hsl' || color.type === 'hsla' ? decomposeColor(hslToRgb(color)).values : color.values;
    rgb = rgb.map((val)=>{
        if (color.type !== 'color') {
            val /= 255; // normalized
        }
        return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    });
    // Truncate at 3 digits
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function getContrastRatio(foreground, background) {
    const lumA = getLuminance(foreground);
    const lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function alpha(color, value) {
    color = decomposeColor(color);
    value = clamp(value);
    if (color.type === 'rgb' || color.type === 'hsl') {
        color.type += 'a';
    }
    if (color.type === 'color') {
        color.values[3] = `/${value}`;
    } else {
        color.values[3] = value;
    }
    return recomposeColor(color);
}
function private_safeAlpha(color, value, warning) {
    try {
        return alpha(color, value);
    } catch (error) {
        if (warning && ("TURBOPACK compile-time value", "development") !== 'production') {
            console.warn(warning);
        }
        return color;
    }
}
function darken(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);
    if (color.type.indexOf('hsl') !== -1) {
        color.values[2] *= 1 - coefficient;
    } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
        for(let i = 0; i < 3; i += 1){
            color.values[i] *= 1 - coefficient;
        }
    }
    return recomposeColor(color);
}
function private_safeDarken(color, coefficient, warning) {
    try {
        return darken(color, coefficient);
    } catch (error) {
        if (warning && ("TURBOPACK compile-time value", "development") !== 'production') {
            console.warn(warning);
        }
        return color;
    }
}
function lighten(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);
    if (color.type.indexOf('hsl') !== -1) {
        color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
        for(let i = 0; i < 3; i += 1){
            color.values[i] += (255 - color.values[i]) * coefficient;
        }
    } else if (color.type.indexOf('color') !== -1) {
        for(let i = 0; i < 3; i += 1){
            color.values[i] += (1 - color.values[i]) * coefficient;
        }
    }
    return recomposeColor(color);
}
function private_safeLighten(color, coefficient, warning) {
    try {
        return lighten(color, coefficient);
    } catch (error) {
        if (warning && ("TURBOPACK compile-time value", "development") !== 'production') {
            console.warn(warning);
        }
        return color;
    }
}
function emphasize(color, coefficient = 0.15) {
    return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
function private_safeEmphasize(color, coefficient, warning) {
    try {
        return private_safeEmphasize(color, coefficient);
    } catch (error) {
        if (warning && ("TURBOPACK compile-time value", "development") !== 'production') {
            console.warn(warning);
        }
        return color;
    }
}

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/merge.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__deepmerge$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/utils/esm/deepmerge.js [app-client] (ecmascript) {export default as deepmerge}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function merge(acc, item) {
    if (!item) {
        return acc;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__deepmerge$7d$__["deepmerge"](acc, item, {
        clone: false // No need to clone deep, it's way faster.
    });
}
const __TURBOPACK__default__export__ = merge;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/breakpoints.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "computeBreakpointsBase": ()=>computeBreakpointsBase,
    "createEmptyBreakpointObject": ()=>createEmptyBreakpointObject,
    "default": ()=>__TURBOPACK__default__export__,
    "handleBreakpoints": ()=>handleBreakpoints,
    "mergeBreakpointsInOrder": ()=>mergeBreakpointsInOrder,
    "removeUnusedBreakpoints": ()=>removeUnusedBreakpoints,
    "resolveBreakpointValues": ()=>resolveBreakpointValues,
    "values": ()=>values
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__deepmerge$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/utils/esm/deepmerge.js [app-client] (ecmascript) {export default as deepmerge}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const values = {
    xs: 0,
    // phone
    sm: 600,
    // tablet
    md: 900,
    // small laptop
    lg: 1200,
    // desktop
    xl: 1536 // large screen
};
const defaultBreakpoints = {
    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for propTypes.
    keys: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl'
    ],
    up: (key)=>`@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
    const theme = props.theme || {};
    if (Array.isArray(propValue)) {
        const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
        return propValue.reduce((acc, item, index)=>{
            acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
            return acc;
        }, {});
    }
    if (typeof propValue === 'object') {
        const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
        return Object.keys(propValue).reduce((acc, breakpoint)=>{
            // key is breakpoint
            if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
                const mediaKey = themeBreakpoints.up(breakpoint);
                acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
            } else {
                const cssKey = breakpoint;
                acc[cssKey] = propValue[cssKey];
            }
            return acc;
        }, {});
    }
    const output = styleFromPropValue(propValue);
    return output;
}
function breakpoints(styleFunction) {
    // false positive
    // eslint-disable-next-line react/function-component-definition
    const newStyleFunction = (props)=>{
        const theme = props.theme || {};
        const base = styleFunction(props);
        const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
        const extended = themeBreakpoints.keys.reduce((acc, key)=>{
            if (props[key]) {
                acc = acc || {};
                acc[themeBreakpoints.up(key)] = styleFunction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                    theme
                }, props[key]));
            }
            return acc;
        }, null);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](base, extended);
    };
    newStyleFunction.propTypes = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({}, styleFunction.propTypes, {
        xs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
        sm: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
        md: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
        lg: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
        xl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    }) : ("TURBOPACK unreachable", undefined);
    newStyleFunction.filterProps = [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        ...styleFunction.filterProps
    ];
    return newStyleFunction;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
    var _breakpointsInput$key;
    const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key)=>{
        const breakpointStyleKey = breakpointsInput.up(key);
        acc[breakpointStyleKey] = {};
        return acc;
    }, {});
    return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
    return breakpointKeys.reduce((acc, key)=>{
        const breakpointOutput = acc[key];
        const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
        if (isBreakpointUnused) {
            delete acc[key];
        }
        return acc;
    }, style);
}
function mergeBreakpointsInOrder(breakpointsInput, ...styles) {
    const emptyBreakpoints = createEmptyBreakpointObject(breakpointsInput);
    const mergedOutput = [
        emptyBreakpoints,
        ...styles
    ].reduce((prev, next)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__deepmerge$7d$__["deepmerge"](prev, next), {});
    return removeUnusedBreakpoints(Object.keys(emptyBreakpoints), mergedOutput);
}
function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
    // fixed value
    if (typeof breakpointValues !== 'object') {
        return {};
    }
    const base = {};
    const breakpointsKeys = Object.keys(themeBreakpoints);
    if (Array.isArray(breakpointValues)) {
        breakpointsKeys.forEach((breakpoint, i)=>{
            if (i < breakpointValues.length) {
                base[breakpoint] = true;
            }
        });
    } else {
        breakpointsKeys.forEach((breakpoint)=>{
            if (breakpointValues[breakpoint] != null) {
                base[breakpoint] = true;
            }
        });
    }
    return base;
}
function resolveBreakpointValues({ values: breakpointValues, breakpoints: themeBreakpoints, base: customBase }) {
    const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
    const keys = Object.keys(base);
    if (keys.length === 0) {
        return breakpointValues;
    }
    let previous;
    return keys.reduce((acc, breakpoint, i)=>{
        if (Array.isArray(breakpointValues)) {
            acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
            previous = i;
        } else if (typeof breakpointValues === 'object') {
            acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous];
            previous = breakpoint;
        } else {
            acc[breakpoint] = breakpointValues;
        }
        return acc;
    }, {});
}
const __TURBOPACK__default__export__ = breakpoints;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/compose.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function compose(...styles) {
    const handlers = styles.reduce((acc, style)=>{
        style.filterProps.forEach((prop)=>{
            acc[prop] = style;
        });
        return acc;
    }, {});
    // false positive
    // eslint-disable-next-line react/function-component-definition
    const fn = (props)=>{
        return Object.keys(props).reduce((acc, prop)=>{
            if (handlers[prop]) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](acc, handlers[prop](props));
            }
            return acc;
        }, {});
    };
    fn.propTypes = ("TURBOPACK compile-time truthy", 1) ? styles.reduce((acc, style)=>Object.assign(acc, style.propTypes), {}) : ("TURBOPACK unreachable", undefined);
    fn.filterProps = styles.reduce((acc, style)=>acc.concat(style.filterProps), []);
    return fn;
}
const __TURBOPACK__default__export__ = compose;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/responsivePropType.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const responsivePropType = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].array
]) : ("TURBOPACK unreachable", undefined);
const __TURBOPACK__default__export__ = responsivePropType;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/style.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "getPath": ()=>getPath,
    "getStyleValue": ()=>getStyleValue
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__unstable_capitalize$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/utils/esm/capitalize/capitalize.js [app-client] (ecmascript) {export default as unstable_capitalize}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$responsivePropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/responsivePropType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/breakpoints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function getPath(obj, path, checkVars = true) {
    if (!path || typeof path !== 'string') {
        return null;
    }
    // Check if CSS variables are used
    if (obj && obj.vars && checkVars) {
        const val = `vars.${path}`.split('.').reduce((acc, item)=>acc && acc[item] ? acc[item] : null, obj);
        if (val != null) {
            return val;
        }
    }
    return path.split('.').reduce((acc, item)=>{
        if (acc && acc[item] != null) {
            return acc[item];
        }
        return null;
    }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
    let value;
    if (typeof themeMapping === 'function') {
        value = themeMapping(propValueFinal);
    } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal] || userValue;
    } else {
        value = getPath(themeMapping, propValueFinal) || userValue;
    }
    if (transform) {
        value = transform(value, userValue, themeMapping);
    }
    return value;
}
function style(options) {
    const { prop, cssProperty = options.prop, themeKey, transform } = options;
    // false positive
    // eslint-disable-next-line react/function-component-definition
    const fn = (props)=>{
        if (props[prop] == null) {
            return null;
        }
        const propValue = props[prop];
        const theme = props.theme;
        const themeMapping = getPath(theme, themeKey) || {};
        const styleFromPropValue = (propValueFinal)=>{
            let value = getStyleValue(themeMapping, transform, propValueFinal);
            if (propValueFinal === value && typeof propValueFinal === 'string') {
                // Haven't found value
                value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__unstable_capitalize$7d$__["unstable_capitalize"](propValueFinal)}`, propValueFinal);
            }
            if (cssProperty === false) {
                return value;
            }
            return {
                [cssProperty]: value
            };
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleBreakpoints"](props, propValue, styleFromPropValue);
    };
    fn.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
        [prop]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$responsivePropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    } : ("TURBOPACK unreachable", undefined);
    fn.filterProps = [
        prop
    ];
    return fn;
}
const __TURBOPACK__default__export__ = style;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/sizing.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "boxSizing": ()=>boxSizing,
    "default": ()=>__TURBOPACK__default__export__,
    "height": ()=>height,
    "maxHeight": ()=>maxHeight,
    "maxWidth": ()=>maxWidth,
    "minHeight": ()=>minHeight,
    "minWidth": ()=>minWidth,
    "sizeHeight": ()=>sizeHeight,
    "sizeWidth": ()=>sizeWidth,
    "sizingTransform": ()=>sizingTransform,
    "width": ()=>width
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$compose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/compose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/breakpoints.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function sizingTransform(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'width',
    transform: sizingTransform
});
const maxWidth = (props)=>{
    if (props.maxWidth !== undefined && props.maxWidth !== null) {
        const styleFromPropValue = (propValue)=>{
            var _props$theme, _props$theme2;
            const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["values"][propValue];
            if (!breakpoint) {
                return {
                    maxWidth: sizingTransform(propValue)
                };
            }
            if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== 'px') {
                return {
                    maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
                };
            }
            return {
                maxWidth: breakpoint
            };
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleBreakpoints"](props, props.maxWidth, styleFromPropValue);
    }
    return null;
};
maxWidth.filterProps = [
    'maxWidth'
];
const minWidth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'minWidth',
    transform: sizingTransform
});
const height = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'height',
    transform: sizingTransform
});
const maxHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'maxHeight',
    transform: sizingTransform
});
const minHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'minHeight',
    transform: sizingTransform
});
const sizeWidth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'size',
    cssProperty: 'width',
    transform: sizingTransform
});
const sizeHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'size',
    cssProperty: 'height',
    transform: sizingTransform
});
const boxSizing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'boxSizing'
});
const sizing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$compose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
const __TURBOPACK__default__export__ = sizing;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/palette.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "backgroundColor": ()=>backgroundColor,
    "bgcolor": ()=>bgcolor,
    "color": ()=>color,
    "default": ()=>__TURBOPACK__default__export__,
    "paletteTransform": ()=>paletteTransform
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$compose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/compose.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function paletteTransform(value, userValue) {
    if (userValue === 'grey') {
        return userValue;
    }
    return value;
}
const color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'color',
    themeKey: 'palette',
    transform: paletteTransform
});
const bgcolor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: paletteTransform
});
const backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'backgroundColor',
    themeKey: 'palette',
    transform: paletteTransform
});
const palette = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$compose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](color, bgcolor, backgroundColor);
const __TURBOPACK__default__export__ = palette;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/memoize.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>memoize
});
function memoize(fn) {
    const cache = {};
    return (arg)=>{
        if (cache[arg] === undefined) {
            cache[arg] = fn(arg);
        }
        return cache[arg];
    };
}

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/spacing.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "createUnarySpacing": ()=>createUnarySpacing,
    "createUnaryUnit": ()=>createUnaryUnit,
    "default": ()=>__TURBOPACK__default__export__,
    "getStyleFromPropValue": ()=>getStyleFromPropValue,
    "getValue": ()=>getValue,
    "margin": ()=>margin,
    "marginKeys": ()=>marginKeys,
    "padding": ()=>padding,
    "paddingKeys": ()=>paddingKeys
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$responsivePropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/responsivePropType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/breakpoints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$memoize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/memoize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const properties = {
    m: 'margin',
    p: 'padding'
};
const directions = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: [
        'Left',
        'Right'
    ],
    y: [
        'Top',
        'Bottom'
    ]
};
const aliases = {
    marginX: 'mx',
    marginY: 'my',
    paddingX: 'px',
    paddingY: 'py'
};
// memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec
const getCssProperties = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$memoize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]((prop)=>{
    // It's not a shorthand notation.
    if (prop.length > 2) {
        if (aliases[prop]) {
            prop = aliases[prop];
        } else {
            return [
                prop
            ];
        }
    }
    const [a, b] = prop.split('');
    const property = properties[a];
    const direction = directions[b] || '';
    return Array.isArray(direction) ? direction.map((dir)=>property + dir) : [
        property + direction
    ];
});
const marginKeys = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd'
];
const paddingKeys = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd'
];
const spacingKeys = [
    ...marginKeys,
    ...paddingKeys
];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
    var _getPath;
    const themeSpacing = (_getPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPath"](theme, themeKey, false)) != null ? _getPath : defaultValue;
    if (typeof themeSpacing === 'number') {
        return (abs)=>{
            if (typeof abs === 'string') {
                return abs;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                if (typeof abs !== 'number') {
                    console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs}.`);
                }
            }
            return themeSpacing * abs;
        };
    }
    if (Array.isArray(themeSpacing)) {
        return (abs)=>{
            if (typeof abs === 'string') {
                return abs;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                if (!Number.isInteger(abs)) {
                    console.error([
                        `MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.` + `You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`
                    ].join('\n'));
                } else if (abs > themeSpacing.length - 1) {
                    console.error([
                        `MUI: The value provided (${abs}) overflows.`,
                        `The supported values are: ${JSON.stringify(themeSpacing)}.`,
                        `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`
                    ].join('\n'));
                }
            }
            return themeSpacing[abs];
        };
    }
    if (typeof themeSpacing === 'function') {
        return themeSpacing;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        console.error([
            `MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`,
            'It should be a number, an array or a function.'
        ].join('\n'));
    }
    return ()=>undefined;
}
function createUnarySpacing(theme) {
    return createUnaryUnit(theme, 'spacing', 8, 'spacing');
}
function getValue(transformer, propValue) {
    if (typeof propValue === 'string' || propValue == null) {
        return propValue;
    }
    const abs = Math.abs(propValue);
    const transformed = transformer(abs);
    if (propValue >= 0) {
        return transformed;
    }
    if (typeof transformed === 'number') {
        return -transformed;
    }
    return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
    return (propValue)=>cssProperties.reduce((acc, cssProperty)=>{
            acc[cssProperty] = getValue(transformer, propValue);
            return acc;
        }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
    // Using a hash computation over an array iteration could be faster, but with only 28 items,
    // it's doesn't worth the bundle size.
    if (keys.indexOf(prop) === -1) {
        return null;
    }
    const cssProperties = getCssProperties(prop);
    const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    const propValue = props[prop];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleBreakpoints"](props, propValue, styleFromPropValue);
}
function style(props, keys) {
    const transformer = createUnarySpacing(props.theme);
    return Object.keys(props).map((prop)=>resolveCssProperty(props, keys, prop, transformer)).reduce(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {});
}
function margin(props) {
    return style(props, marginKeys);
}
margin.propTypes = ("TURBOPACK compile-time truthy", 1) ? marginKeys.reduce((obj, key)=>{
    obj[key] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$responsivePropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    return obj;
}, {}) : ("TURBOPACK unreachable", undefined);
margin.filterProps = marginKeys;
function padding(props) {
    return style(props, paddingKeys);
}
padding.propTypes = ("TURBOPACK compile-time truthy", 1) ? paddingKeys.reduce((obj, key)=>{
    obj[key] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$responsivePropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    return obj;
}, {}) : ("TURBOPACK unreachable", undefined);
padding.filterProps = paddingKeys;
function spacing(props) {
    return style(props, spacingKeys);
}
spacing.propTypes = ("TURBOPACK compile-time truthy", 1) ? spacingKeys.reduce((obj, key)=>{
    obj[key] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$responsivePropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    return obj;
}, {}) : ("TURBOPACK unreachable", undefined);
spacing.filterProps = spacingKeys;
const __TURBOPACK__default__export__ = spacing;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/cssGrid.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "columnGap": ()=>columnGap,
    "default": ()=>__TURBOPACK__default__export__,
    "gap": ()=>gap,
    "gridArea": ()=>gridArea,
    "gridAutoColumns": ()=>gridAutoColumns,
    "gridAutoFlow": ()=>gridAutoFlow,
    "gridAutoRows": ()=>gridAutoRows,
    "gridColumn": ()=>gridColumn,
    "gridRow": ()=>gridRow,
    "gridTemplateAreas": ()=>gridTemplateAreas,
    "gridTemplateColumns": ()=>gridTemplateColumns,
    "gridTemplateRows": ()=>gridTemplateRows,
    "rowGap": ()=>rowGap
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$compose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/compose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/spacing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/breakpoints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$responsivePropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/responsivePropType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const gap = (props)=>{
    if (props.gap !== undefined && props.gap !== null) {
        const transformer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUnaryUnit"](props.theme, 'spacing', 8, 'gap');
        const styleFromPropValue = (propValue)=>({
                gap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValue"](transformer, propValue)
            });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleBreakpoints"](props, props.gap, styleFromPropValue);
    }
    return null;
};
gap.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    gap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$responsivePropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
} : ("TURBOPACK unreachable", undefined);
gap.filterProps = [
    'gap'
];
const columnGap = (props)=>{
    if (props.columnGap !== undefined && props.columnGap !== null) {
        const transformer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUnaryUnit"](props.theme, 'spacing', 8, 'columnGap');
        const styleFromPropValue = (propValue)=>({
                columnGap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValue"](transformer, propValue)
            });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleBreakpoints"](props, props.columnGap, styleFromPropValue);
    }
    return null;
};
columnGap.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    columnGap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$responsivePropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
} : ("TURBOPACK unreachable", undefined);
columnGap.filterProps = [
    'columnGap'
];
const rowGap = (props)=>{
    if (props.rowGap !== undefined && props.rowGap !== null) {
        const transformer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUnaryUnit"](props.theme, 'spacing', 8, 'rowGap');
        const styleFromPropValue = (propValue)=>({
                rowGap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValue"](transformer, propValue)
            });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleBreakpoints"](props, props.rowGap, styleFromPropValue);
    }
    return null;
};
rowGap.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    rowGap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$responsivePropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
} : ("TURBOPACK unreachable", undefined);
rowGap.filterProps = [
    'rowGap'
];
const gridColumn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'gridColumn'
});
const gridRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'gridRow'
});
const gridAutoFlow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'gridAutoFlow'
});
const gridAutoColumns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'gridAutoColumns'
});
const gridAutoRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'gridAutoRows'
});
const gridTemplateColumns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'gridTemplateColumns'
});
const gridTemplateRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'gridTemplateRows'
});
const gridTemplateAreas = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'gridTemplateAreas'
});
const gridArea = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    prop: 'gridArea'
});
const grid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$compose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
const __TURBOPACK__default__export__ = grid;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/borders.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "border": ()=>border,
    "borderBottom": ()=>borderBottom,
    "borderBottomColor": ()=>borderBottomColor,
    "borderColor": ()=>borderColor,
    "borderLeft": ()=>borderLeft,
    "borderLeftColor": ()=>borderLeftColor,
    "borderRadius": ()=>borderRadius,
    "borderRight": ()=>borderRight,
    "borderRightColor": ()=>borderRightColor,
    "borderTop": ()=>borderTop,
    "borderTopColor": ()=>borderTopColor,
    "borderTransform": ()=>borderTransform,
    "default": ()=>__TURBOPACK__default__export__,
    "outline": ()=>outline,
    "outlineColor": ()=>outlineColor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$responsivePropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/responsivePropType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$compose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/compose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/spacing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/breakpoints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
function borderTransform(value) {
    if (typeof value !== 'number') {
        return value;
    }
    return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
        prop,
        themeKey: 'borders',
        transform
    });
}
const border = createBorderStyle('border', borderTransform);
const borderTop = createBorderStyle('borderTop', borderTransform);
const borderRight = createBorderStyle('borderRight', borderTransform);
const borderBottom = createBorderStyle('borderBottom', borderTransform);
const borderLeft = createBorderStyle('borderLeft', borderTransform);
const borderColor = createBorderStyle('borderColor');
const borderTopColor = createBorderStyle('borderTopColor');
const borderRightColor = createBorderStyle('borderRightColor');
const borderBottomColor = createBorderStyle('borderBottomColor');
const borderLeftColor = createBorderStyle('borderLeftColor');
const outline = createBorderStyle('outline', borderTransform);
const outlineColor = createBorderStyle('outlineColor');
const borderRadius = (props)=>{
    if (props.borderRadius !== undefined && props.borderRadius !== null) {
        const transformer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUnaryUnit"](props.theme, 'shape.borderRadius', 4, 'borderRadius');
        const styleFromPropValue = (propValue)=>({
                borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValue"](transformer, propValue)
            });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleBreakpoints"](props, props.borderRadius, styleFromPropValue);
    }
    return null;
};
borderRadius.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$responsivePropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
} : ("TURBOPACK unreachable", undefined);
borderRadius.filterProps = [
    'borderRadius'
];
const borders = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$compose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);
const __TURBOPACK__default__export__ = borders;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/spacing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/borders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/cssGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/palette.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$sizing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/sizing.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const defaultSxConfig = {
    // borders
    border: {
        themeKey: 'borders',
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderTransform"]
    },
    borderTop: {
        themeKey: 'borders',
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderTransform"]
    },
    borderRight: {
        themeKey: 'borders',
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderTransform"]
    },
    borderBottom: {
        themeKey: 'borders',
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderTransform"]
    },
    borderLeft: {
        themeKey: 'borders',
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderTransform"]
    },
    borderColor: {
        themeKey: 'palette'
    },
    borderTopColor: {
        themeKey: 'palette'
    },
    borderRightColor: {
        themeKey: 'palette'
    },
    borderBottomColor: {
        themeKey: 'palette'
    },
    borderLeftColor: {
        themeKey: 'palette'
    },
    outline: {
        themeKey: 'borders',
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderTransform"]
    },
    outlineColor: {
        themeKey: 'palette'
    },
    borderRadius: {
        themeKey: 'shape.borderRadius',
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderRadius"]
    },
    // palette
    color: {
        themeKey: 'palette',
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paletteTransform"]
    },
    bgcolor: {
        themeKey: 'palette',
        cssProperty: 'backgroundColor',
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paletteTransform"]
    },
    backgroundColor: {
        themeKey: 'palette',
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paletteTransform"]
    },
    // spacing
    p: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    pt: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    pr: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    pb: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    pl: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    px: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    py: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    padding: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    paddingTop: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    paddingRight: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    paddingBottom: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    paddingLeft: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    paddingX: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    paddingY: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    paddingInline: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    paddingInlineStart: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    paddingInlineEnd: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    paddingBlock: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    paddingBlockStart: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    paddingBlockEnd: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padding"]
    },
    m: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    mt: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    mr: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    mb: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    ml: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    mx: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    my: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    margin: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    marginTop: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    marginRight: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    marginBottom: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    marginLeft: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    marginX: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    marginY: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    marginInline: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    marginInlineStart: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    marginInlineEnd: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    marginBlock: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    marginBlockStart: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    marginBlockEnd: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["margin"]
    },
    // display
    displayPrint: {
        cssProperty: false,
        transform: (value)=>({
                '@media print': {
                    display: value
                }
            })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    // flexbox
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    // grid
    gap: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gap"]
    },
    rowGap: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rowGap"]
    },
    columnGap: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columnGap"]
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    // positions
    position: {},
    zIndex: {
        themeKey: 'zIndex'
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    // shadows
    boxShadow: {
        themeKey: 'shadows'
    },
    // sizing
    width: {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$sizing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizingTransform"]
    },
    maxWidth: {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$sizing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxWidth"]
    },
    minWidth: {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$sizing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizingTransform"]
    },
    height: {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$sizing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizingTransform"]
    },
    maxHeight: {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$sizing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizingTransform"]
    },
    minHeight: {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$sizing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizingTransform"]
    },
    boxSizing: {},
    // typography
    fontFamily: {
        themeKey: 'typography'
    },
    fontSize: {
        themeKey: 'typography'
    },
    fontStyle: {
        themeKey: 'typography'
    },
    fontWeight: {
        themeKey: 'typography'
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
        cssProperty: false,
        themeKey: 'typography'
    }
};
const __TURBOPACK__default__export__ = defaultSxConfig;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "unstable_createStyleFunctionSx": ()=>unstable_createStyleFunctionSx
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__unstable_capitalize$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/utils/esm/capitalize/capitalize.js [app-client] (ecmascript) {export default as unstable_capitalize}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/breakpoints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
function objectsHaveSameKeys(...objects) {
    const allKeys = objects.reduce((keys, object)=>keys.concat(Object.keys(object)), []);
    const union = new Set(allKeys);
    return objects.every((object)=>union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
    return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}
function unstable_createStyleFunctionSx() {
    function getThemeValue(prop, val, theme, config) {
        const props = {
            [prop]: val,
            theme
        };
        const options = config[prop];
        if (!options) {
            return {
                [prop]: val
            };
        }
        const { cssProperty = prop, themeKey, transform, style } = options;
        if (val == null) {
            return null;
        }
        // TODO v6: remove, see https://github.com/mui/material-ui/pull/38123
        if (themeKey === 'typography' && val === 'inherit') {
            return {
                [prop]: val
            };
        }
        const themeMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPath"](theme, themeKey) || {};
        if (style) {
            return style(props);
        }
        const styleFromPropValue = (propValueFinal)=>{
            let value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleValue"](themeMapping, transform, propValueFinal);
            if (propValueFinal === value && typeof propValueFinal === 'string') {
                // Haven't found value
                value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleValue"](themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__unstable_capitalize$7d$__["unstable_capitalize"](propValueFinal)}`, propValueFinal);
            }
            if (cssProperty === false) {
                return value;
            }
            return {
                [cssProperty]: value
            };
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleBreakpoints"](props, val, styleFromPropValue);
    }
    function styleFunctionSx(props) {
        var _theme$unstable_sxCon;
        const { sx, theme = {} } = props || {};
        if (!sx) {
            return null; // Emotion & styled-components will neglect null
        }
        const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
        /*
     * Receive `sxInput` as object or callback
     * and then recursively check keys & values to create media query object styles.
     * (the result will be used in `styled`)
     */ function traverse(sxInput) {
            let sxObject = sxInput;
            if (typeof sxInput === 'function') {
                sxObject = sxInput(theme);
            } else if (typeof sxInput !== 'object') {
                // value
                return sxInput;
            }
            if (!sxObject) {
                return null;
            }
            const emptyBreakpoints = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyBreakpointObject"](theme.breakpoints);
            const breakpointsKeys = Object.keys(emptyBreakpoints);
            let css = emptyBreakpoints;
            Object.keys(sxObject).forEach((styleKey)=>{
                const value = callIfFn(sxObject[styleKey], theme);
                if (value !== null && value !== undefined) {
                    if (typeof value === 'object') {
                        if (config[styleKey]) {
                            css = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](css, getThemeValue(styleKey, value, theme, config));
                        } else {
                            const breakpointsValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleBreakpoints"]({
                                theme
                            }, value, (x)=>({
                                    [styleKey]: x
                                }));
                            if (objectsHaveSameKeys(breakpointsValues, value)) {
                                css[styleKey] = styleFunctionSx({
                                    sx: value,
                                    theme
                                });
                            } else {
                                css = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](css, breakpointsValues);
                            }
                        }
                    } else {
                        css = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](css, getThemeValue(styleKey, value, theme, config));
                    }
                }
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeUnusedBreakpoints"](breakpointsKeys, css);
        }
        return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
    }
    return styleFunctionSx;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = [
    'sx'
];
const __TURBOPACK__default__export__ = styleFunctionSx;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-client] (ecmascript) {export default as unstable_styleFunctionSx}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "unstable_styleFunctionSx": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js [app-client] (ecmascript) {export default as unstable_defaultSxConfig}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "unstable_defaultSxConfig": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createTheme/createSpacing.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>createSpacing
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/spacing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function createSpacing(spacingInput = 8) {
    // Already transformed.
    if (spacingInput.mui) {
        return spacingInput;
    }
    // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
    // Smaller components, such as icons, can align to a 4dp grid.
    // https://m2.material.io/design/layout/understanding-layout.html
    const transform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUnarySpacing"]({
        spacing: spacingInput
    });
    const spacing = (...argsInput)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            if (!(argsInput.length <= 4)) {
                console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
            }
        }
        const args = argsInput.length === 0 ? [
            1
        ] : argsInput;
        return args.map((argument)=>{
            const output = transform(argument);
            return typeof output === 'number' ? `${output}px` : output;
        }).join(' ');
    };
    spacing.mui = true;
    return spacing;
}

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createTheme/shape.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const shape = {
    borderRadius: 4
};
const __TURBOPACK__default__export__ = shape;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createTheme/createBreakpoints.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "breakpointKeys": ()=>breakpointKeys,
    "default": ()=>createBreakpoints
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const _excluded = [
    "values",
    "unit",
    "step"
];
const breakpointKeys = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl'
];
const sortBreakpointsValues = (values)=>{
    const breakpointsAsArray = Object.keys(values).map((key)=>({
            key,
            val: values[key]
        })) || [];
    // Sort in ascending order
    breakpointsAsArray.sort((breakpoint1, breakpoint2)=>breakpoint1.val - breakpoint2.val);
    return breakpointsAsArray.reduce((acc, obj)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({}, acc, {
            [obj.key]: obj.val
        });
    }, {});
};
function createBreakpoints(breakpoints) {
    const { // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values = {
        xs: 0,
        // phone
        sm: 600,
        // tablet
        md: 900,
        // small laptop
        lg: 1200,
        // desktop
        xl: 1536 // large screen
    }, unit = 'px', step = 5 } = breakpoints, other = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](breakpoints, _excluded);
    const sortedValues = sortBreakpointsValues(values);
    const keys = Object.keys(sortedValues);
    function up(key) {
        const value = typeof values[key] === 'number' ? values[key] : key;
        return `@media (min-width:${value}${unit})`;
    }
    function down(key) {
        const value = typeof values[key] === 'number' ? values[key] : key;
        return `@media (max-width:${value - step / 100}${unit})`;
    }
    function between(start, end) {
        const endIndex = keys.indexOf(end);
        return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
    }
    function only(key) {
        if (keys.indexOf(key) + 1 < keys.length) {
            return between(key, keys[keys.indexOf(key) + 1]);
        }
        return up(key);
    }
    function not(key) {
        // handle first and last key separately, for better readability
        const keyIndex = keys.indexOf(key);
        if (keyIndex === 0) {
            return up(keys[1]);
        }
        if (keyIndex === keys.length - 1) {
            return down(keys[keyIndex]);
        }
        return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
        keys,
        values: sortedValues,
        up,
        down,
        between,
        only,
        not,
        unit
    }, other);
}

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createTheme/createTheme.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__deepmerge$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/utils/esm/deepmerge.js [app-client] (ecmascript) {export default as deepmerge}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createBreakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createTheme/createBreakpoints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$shape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createTheme/shape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createSpacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createTheme/createSpacing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const _excluded = [
    "breakpoints",
    "palette",
    "spacing",
    "shape"
];
;
;
;
;
;
;
function createTheme(options = {}, ...args) {
    const { breakpoints: breakpointsInput = {}, palette: paletteInput = {}, spacing: spacingInput, shape: shapeInput = {} } = options, other = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](options, _excluded);
    const breakpoints = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createBreakpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](breakpointsInput);
    const spacing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createSpacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](spacingInput);
    let muiTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__deepmerge$7d$__["deepmerge"]({
        breakpoints,
        direction: 'ltr',
        components: {},
        // Inject component definitions.
        palette: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
            mode: 'light'
        }, paletteInput),
        spacing,
        shape: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$shape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], shapeInput)
    }, other);
    muiTheme = args.reduce((acc, argument)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__deepmerge$7d$__["deepmerge"](acc, argument), muiTheme);
    muiTheme.unstable_sxConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], other == null ? void 0 : other.unstable_sxConfig);
    muiTheme.unstable_sx = function sx(props) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
            sx: props,
            theme: this
        });
    };
    return muiTheme;
}
const __TURBOPACK__default__export__ = createTheme;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createTheme/createTheme.js [app-client] (ecmascript) {export default as createTheme}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "createTheme": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createTheme/createTheme.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/useThemeWithoutDefault.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$c39617d8$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__T__as__ThemeContext$7d$__ = __turbopack_import__("[project]/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js [app-client] (ecmascript) {export T as ThemeContext}");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}
function useTheme(defaultTheme = null) {
    const contextTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$c39617d8$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__T__as__ThemeContext$7d$__["ThemeContext"]);
    return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}
const __TURBOPACK__default__export__ = useTheme;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/useTheme.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "systemDefaultTheme": ()=>systemDefaultTheme
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createTheme/createTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeWithoutDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/useThemeWithoutDefault.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
const systemDefaultTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
function useTheme(defaultTheme = systemDefaultTheme) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeWithoutDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](defaultTheme);
}
const __TURBOPACK__default__export__ = useTheme;

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>getThemeProps
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__internal_resolveProps$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/utils/esm/resolveProps.js [app-client] (ecmascript) {export default as internal_resolveProps}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function getThemeProps(params) {
    const { theme, name, props } = params;
    if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
        return props;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__internal_resolveProps$7d$__["internal_resolveProps"](theme.components[name].defaultProps, props);
}

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useThemeProps
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$getThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/useTheme.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
function useThemeProps({ props, name, defaultTheme, themeId }) {
    let theme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](defaultTheme);
    if (themeId) {
        theme = theme[themeId] || theme;
    }
    const mergedProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$getThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
        theme,
        name,
        props
    });
    return mergedProps;
}

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js [app-client] (ecmascript) {export default as useThemeProps}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "useThemeProps": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/propsToClassKey.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>propsToClassKey
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__unstable_capitalize$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/utils/esm/capitalize/capitalize.js [app-client] (ecmascript) {export default as unstable_capitalize}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const _excluded = [
    "variant"
];
;
function isEmpty(string) {
    return string.length === 0;
}
function propsToClassKey(props) {
    const { variant } = props, other = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](props, _excluded);
    let classKey = variant || '';
    Object.keys(other).sort().forEach((key)=>{
        if (key === 'color') {
            classKey += isEmpty(classKey) ? props[key] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__unstable_capitalize$7d$__["unstable_capitalize"](props[key]);
        } else {
            classKey += `${isEmpty(classKey) ? key : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__unstable_capitalize$7d$__["unstable_capitalize"](key)}${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__unstable_capitalize$7d$__["unstable_capitalize"](props[key].toString())}`;
        }
    });
    return classKey;
}

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createStyled.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>createStyled,
    "shouldForwardProp": ()=>shouldForwardProp,
    "systemDefaultTheme": ()=>systemDefaultTheme
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__styled__as__default$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/node_modules/@mui/styled-engine/index.js [app-client] (ecmascript) {export styled as default}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/node_modules/@mui/styled-engine/index.js [app-client] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$getDisplayName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__getDisplayName$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/utils/esm/getDisplayName.js [app-client] (ecmascript) {export default as getDisplayName}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__unstable_capitalize$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/utils/esm/capitalize/capitalize.js [app-client] (ecmascript) {export default as unstable_capitalize}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/utils/esm/deepmerge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__deepmerge$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/utils/esm/deepmerge.js [app-client] (ecmascript) {export default as deepmerge}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createTheme/createTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$propsToClassKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/propsToClassKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const _excluded = [
    "name",
    "slot",
    "skipVariantsResolver",
    "skipSx",
    "overridesResolver"
];
;
;
;
;
;
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96;
}
const getStyleOverrides = (name, theme)=>{
    if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
        return theme.components[name].styleOverrides;
    }
    return null;
};
const transformVariants = (variants)=>{
    const variantsStyles = {};
    if (variants) {
        variants.forEach((definition)=>{
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$propsToClassKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](definition.props);
            variantsStyles[key] = definition.style;
        });
    }
    return variantsStyles;
};
const getVariantStyles = (name, theme)=>{
    let variants = [];
    if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
        variants = theme.components[name].variants;
    }
    return transformVariants(variants);
};
const variantsResolver = (props, styles, variants)=>{
    const { ownerState = {} } = props;
    const variantsStyles = [];
    if (variants) {
        variants.forEach((variant)=>{
            let isMatch = true;
            Object.keys(variant.props).forEach((key)=>{
                if (ownerState[key] !== variant.props[key] && props[key] !== variant.props[key]) {
                    isMatch = false;
                }
            });
            if (isMatch) {
                variantsStyles.push(styles[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$propsToClassKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](variant.props)]);
            }
        });
    }
    return variantsStyles;
};
const themeVariantsResolver = (props, styles, theme, name)=>{
    var _theme$components;
    const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[name]) == null ? void 0 : _theme$components.variants;
    return variantsResolver(props, styles, themeVariants);
};
function shouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const systemDefaultTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
const lowercaseFirstLetter = (string)=>{
    if (!string) {
        return string;
    }
    return string.charAt(0).toLowerCase() + string.slice(1);
};
function resolveTheme({ defaultTheme, theme, themeId }) {
    return isEmpty(theme) ? defaultTheme : theme[themeId] || theme;
}
function defaultOverridesResolver(slot) {
    if (!slot) {
        return null;
    }
    return (props, styles)=>styles[slot];
}
const muiStyledFunctionResolver = ({ styledArg, props, defaultTheme, themeId })=>{
    const resolvedStyles = styledArg(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({}, props, {
        theme: resolveTheme(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({}, props, {
            defaultTheme,
            themeId
        }))
    }));
    let optionalVariants;
    if (resolvedStyles && resolvedStyles.variants) {
        optionalVariants = resolvedStyles.variants;
        delete resolvedStyles.variants;
    }
    if (optionalVariants) {
        const variantsStyles = variantsResolver(props, transformVariants(optionalVariants), optionalVariants);
        return [
            resolvedStyles,
            ...variantsStyles
        ];
    }
    return resolvedStyles;
};
function createStyled(input = {}) {
    const { themeId, defaultTheme = systemDefaultTheme, rootShouldForwardProp = shouldForwardProp, slotShouldForwardProp = shouldForwardProp } = input;
    const systemSx = (props)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({}, props, {
            theme: resolveTheme(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({}, props, {
                defaultTheme,
                themeId
            }))
        }));
    };
    systemSx.__mui_systemSx = true;
    return (tag, inputOptions = {})=>{
        // Filter out the `sx` style function from the previous styled component to prevent unnecessary styles generated by the composite components.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__["internal_processStyles"](tag, (styles)=>styles.filter((style)=>!(style != null && style.__mui_systemSx)));
        const { name: componentName, slot: componentSlot, skipVariantsResolver: inputSkipVariantsResolver, skipSx: inputSkipSx, // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot)) } = inputOptions, options = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](inputOptions, _excluded);
        // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
        const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
        const skipSx = inputSkipSx || false;
        let label;
        if ("TURBOPACK compile-time truthy", 1) {
            if (componentName) {
                // TODO v6: remove `lowercaseFirstLetter()` in the next major release
                // For more details: https://github.com/mui/material-ui/pull/37908
                label = `${componentName}-${lowercaseFirstLetter(componentSlot || 'Root')}`;
            }
        }
        let shouldForwardPropOption = shouldForwardProp;
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        if (componentSlot === 'Root' || componentSlot === 'root') {
            shouldForwardPropOption = rootShouldForwardProp;
        } else if (componentSlot) {
            // any other slot specified
            shouldForwardPropOption = slotShouldForwardProp;
        } else if (isStringTag(tag)) {
            // for string (html) tag, preserve the behavior in emotion & styled-components.
            shouldForwardPropOption = undefined;
        }
        const defaultStyledResolver = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__styled__as__default$7d$__["default"](tag, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
            shouldForwardProp: shouldForwardPropOption,
            label
        }, options));
        const muiStyledResolver = (styleArg, ...expressions)=>{
            const expressionsWithDefaultTheme = expressions ? expressions.map((stylesArg)=>{
                // On the server Emotion doesn't use React.forwardRef for creating components, so the created
                // component stays as a function. This condition makes sure that we do not interpolate functions
                // which are basically components used as a selectors.
                if (typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg) {
                    return (props)=>muiStyledFunctionResolver({
                            styledArg: stylesArg,
                            props,
                            defaultTheme,
                            themeId
                        });
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"](stylesArg)) {
                    let transformedStylesArg = stylesArg;
                    let styledArgVariants;
                    if (stylesArg && stylesArg.variants) {
                        styledArgVariants = stylesArg.variants;
                        delete transformedStylesArg.variants;
                        transformedStylesArg = (props)=>{
                            let result = stylesArg;
                            const variantStyles = variantsResolver(props, transformVariants(styledArgVariants), styledArgVariants);
                            variantStyles.forEach((variantStyle)=>{
                                result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__deepmerge$7d$__["deepmerge"](result, variantStyle);
                            });
                            return result;
                        };
                    }
                    return transformedStylesArg;
                }
                return stylesArg;
            }) : [];
            let transformedStyleArg = styleArg;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"](styleArg)) {
                let styledArgVariants;
                if (styleArg && styleArg.variants) {
                    styledArgVariants = styleArg.variants;
                    delete transformedStyleArg.variants;
                    transformedStyleArg = (props)=>{
                        let result = styleArg;
                        const variantStyles = variantsResolver(props, transformVariants(styledArgVariants), styledArgVariants);
                        variantStyles.forEach((variantStyle)=>{
                            result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__deepmerge$7d$__["deepmerge"](result, variantStyle);
                        });
                        return result;
                    };
                }
            } else if (typeof styleArg === 'function' && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
            // component stays as a function. This condition makes sure that we do not interpolate functions
            // which are basically components used as a selectors.
            styleArg.__emotion_real !== styleArg) {
                // If the type is function, we need to define the default theme.
                transformedStyleArg = (props)=>muiStyledFunctionResolver({
                        styledArg: styleArg,
                        props,
                        defaultTheme,
                        themeId
                    });
            }
            if (componentName && overridesResolver) {
                expressionsWithDefaultTheme.push((props)=>{
                    const theme = resolveTheme(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({}, props, {
                        defaultTheme,
                        themeId
                    }));
                    const styleOverrides = getStyleOverrides(componentName, theme);
                    if (styleOverrides) {
                        const resolvedStyleOverrides = {};
                        Object.entries(styleOverrides).forEach(([slotKey, slotStyle])=>{
                            resolvedStyleOverrides[slotKey] = typeof slotStyle === 'function' ? slotStyle(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({}, props, {
                                theme
                            })) : slotStyle;
                        });
                        return overridesResolver(props, resolvedStyleOverrides);
                    }
                    return null;
                });
            }
            if (componentName && !skipVariantsResolver) {
                expressionsWithDefaultTheme.push((props)=>{
                    const theme = resolveTheme(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({}, props, {
                        defaultTheme,
                        themeId
                    }));
                    return themeVariantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
                });
            }
            if (!skipSx) {
                expressionsWithDefaultTheme.push(systemSx);
            }
            const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
            if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
                const placeholders = new Array(numOfCustomFnsApplied).fill('');
                // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.
                transformedStyleArg = [
                    ...styleArg,
                    ...placeholders
                ];
                transformedStyleArg.raw = [
                    ...styleArg.raw,
                    ...placeholders
                ];
            }
            const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
            if ("TURBOPACK compile-time truthy", 1) {
                let displayName;
                if (componentName) {
                    displayName = `${componentName}${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__unstable_capitalize$7d$__["unstable_capitalize"](componentSlot || '')}`;
                }
                if (displayName === undefined) {
                    displayName = `Styled(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$getDisplayName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__getDisplayName$7d$__["getDisplayName"](tag)})`;
                }
                Component.displayName = displayName;
            }
            if (tag.muiName) {
                Component.muiName = tag.muiName;
            }
            return Component;
        };
        if (defaultStyledResolver.withConfig) {
            muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
        }
        return muiStyledResolver;
    };
}

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createStyled.js [app-client] (ecmascript) {export default as createStyled}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "createStyled": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createStyled.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/useTheme.js [app-client] (ecmascript) {export default as useTheme}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "useTheme": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/useTheme.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>extendSxProp
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/utils/esm/deepmerge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const _excluded = [
    "sx"
];
;
;
const splitProps = (props)=>{
    var _props$theme$unstable, _props$theme;
    const result = {
        systemProps: {},
        otherProps: {}
    };
    const config = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    Object.keys(props).forEach((prop)=>{
        if (config[prop]) {
            result.systemProps[prop] = props[prop];
        } else {
            result.otherProps[prop] = props[prop];
        }
    });
    return result;
};
function extendSxProp(props) {
    const { sx: inSx } = props, other = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](props, _excluded);
    const { systemProps, otherProps } = splitProps(other);
    let finalSx;
    if (Array.isArray(inSx)) {
        finalSx = [
            systemProps,
            ...inSx
        ];
    } else if (typeof inSx === 'function') {
        finalSx = (...args)=>{
            const result = inSx(...args);
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"](result)) {
                return systemProps;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({}, systemProps, result);
        };
    } else {
        finalSx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({}, systemProps, inSx);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({}, otherProps, {
        sx: finalSx
    });
}

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-client] (ecmascript) {export default as unstable_extendSxProp}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "unstable_extendSxProp": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-client] (ecmascript) {export default as extendSxProp}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "extendSxProp": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createBox.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>createBox
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__styled__as__default$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/node_modules/@mui/styled-engine/index.js [app-client] (ecmascript) {export styled as default}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__extendSxProp$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-client] (ecmascript) {export default as extendSxProp}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/useTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
const _excluded = [
    "className",
    "component"
];
;
;
;
;
;
;
function createBox(options = {}) {
    const { themeId, defaultTheme, defaultClassName = 'MuiBox-root', generateClassName } = options;
    const BoxRoot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__styled__as__default$7d$__["default"]('div', {
        shouldForwardProp: (prop)=>prop !== 'theme' && prop !== 'sx' && prop !== 'as'
    })(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const Box = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function Box(inProps, ref) {
        const theme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](defaultTheme);
        const _extendSxProp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__extendSxProp$7d$__["extendSxProp"](inProps), { className, component = 'div' } = _extendSxProp, other = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](_extendSxProp, _excluded);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"](BoxRoot, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
            as: component,
            ref: ref,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
            theme: themeId ? theme[themeId] || theme : theme
        }, other));
    });
    return Box;
}

})()),
"[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createBox.js [app-client] (ecmascript) {export default as createBox}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "createBox": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/createBox.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
}]);

//# sourceMappingURL=29970_@mui_system_esm_7993c0._.js.map