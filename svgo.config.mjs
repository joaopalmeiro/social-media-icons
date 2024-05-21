const DEFAULT_FLOAT_PRECISION = 3;
const DEFAULT_TRANSFORM_PRECISION = 5;

/**
 * @type {import('svgo').Config}
 */
export default {
  // https://github.com/simple-icons/simple-icons/blob/11.15.0/svgo.config.mjs

  multipass: true,
  eol: "lf",

  plugins: [
    // https://svgo.dev/docs/preset-default/

    // https://svgo.dev/docs/plugins/removeDoctype/
    "removeDoctype",
    // https://svgo.dev/docs/plugins/removeXMLProcInst/
    "removeXMLProcInst",
    // https://svgo.dev/docs/plugins/removeComments/
    {
      name: "removeComments",
      params: {
        preservePatterns: false,
      },
    },
    // https://svgo.dev/docs/plugins/removeMetadata/
    "removeMetadata",
    // https://svgo.dev/docs/plugins/removeEditorsNSData/
    "removeEditorsNSData",
    // https://svgo.dev/docs/plugins/cleanupAttrs/
    {
      name: "cleanupAttrs",
      params: {
        newlines: true,
        trim: true,
        spaces: true,
      },
    },
    // https://svgo.dev/docs/plugins/mergeStyles/
    "mergeStyles",
    // https://svgo.dev/docs/plugins/inlineStyles/
    {
      name: "inlineStyles",
      params: {
        onlyMatchedOnce: true,
        removeMatchedSelectors: true,
      },
    },
    // https://svgo.dev/docs/plugins/minifyStyles/
    {
      name: "minifyStyles",
      params: {
        usage: true,
      },
    },
    // https://svgo.dev/docs/plugins/cleanupIds/
    {
      name: "cleanupIds",
      params: {
        remove: true,
        minify: true,
        preserve: [],
        preservePrefixes: [],
        force: false,
      },
    },
    // https://svgo.dev/docs/plugins/removeUselessDefs/
    "removeUselessDefs",
    // https://svgo.dev/docs/plugins/cleanupNumericValues/
    {
      name: "cleanupNumericValues",
      params: {
        floatPrecision: DEFAULT_FLOAT_PRECISION,
        leadingZero: true,
        defaultPx: true,
        convertToPx: true,
      },
    },
    // https://svgo.dev/docs/plugins/convertColors/
    {
      name: "convertColors",
      params: {
        currentColor: false,
        names2hex: true,
        rgb2hex: true,
        convertCase: "lower",
        shorthex: true,
        shortname: true,
      },
    },
    // https://svgo.dev/docs/plugins/removeUnknownsAndDefaults/
    {
      name: "removeUnknownsAndDefaults",
      params: {
        unknownContent: true,
        unknownAttrs: true,
        defaultAttrs: true,
        defaultMarkupDeclarations: true,
        uselessOverrides: true,
        keepDataAttrs: false,
        keepAriaAttrs: true,
        keepRoleAttr: true,
      },
    },
    // https://svgo.dev/docs/plugins/removeNonInheritableGroupAttrs/
    "removeNonInheritableGroupAttrs",
    // https://svgo.dev/docs/plugins/removeUselessStrokeAndFill/
    {
      name: "removeUselessStrokeAndFill",
      params: {
        stroke: true,
        fill: true,
        removeNone: true,
      },
    },
    // https://svgo.dev/docs/plugins/removeViewBox/
    // "removeViewBox",
    // https://svgo.dev/docs/plugins/cleanupEnableBackground/
    "cleanupEnableBackground",
    // https://svgo.dev/docs/plugins/removeHiddenElems/
    {
      name: "removeHiddenElems",
      params: {
        isHidden: true,
        displayNone: true,
        opacity0: true,
        circleR0: true,
        ellipseRX0: true,
        ellipseRY0: true,
        rectWidth0: true,
        rectHeight0: true,
        patternWidth0: true,
        patternHeight0: true,
        imageWidth0: true,
        imageHeight0: true,
        pathEmptyD: true,
        polylineEmptyPoints: true,
        polygonEmptyPoints: true,
      },
    },
    // https://svgo.dev/docs/plugins/removeEmptyText/
    {
      name: "removeEmptyText",
      params: {
        text: true,
        tspan: true,
        tref: true,
      },
    },
    // https://svgo.dev/docs/plugins/convertShapeToPath/
    {
      name: "convertShapeToPath",
      params: {
        convertArcs: true,
      },
    },
    // https://svgo.dev/docs/plugins/convertEllipseToCircle/
    "convertEllipseToCircle",
    // https://svgo.dev/docs/plugins/moveElemsAttrsToGroup/
    "moveElemsAttrsToGroup",
    // https://svgo.dev/docs/plugins/moveGroupAttrsToElems/
    "moveGroupAttrsToElems",
    // https://svgo.dev/docs/plugins/collapseGroups/
    "collapseGroups",
    // https://svgo.dev/docs/plugins/convertPathData/
    // https://github.com/svg/svgo/blob/v3.3.2/plugins/convertPathData.js
    {
      name: "convertPathData",
      params: {
        applyTransforms: true,
        applyTransformsStroked: true,
        straightCurves: true,
        convertToQ: true,
        lineShorthands: true,
        convertToZ: true,
        curveSmoothShorthands: true,
        floatPrecision: DEFAULT_FLOAT_PRECISION,
        transformPrecision: DEFAULT_TRANSFORM_PRECISION,
        smartArcRounding: true,
        removeUseless: true,
        collapseRepeated: true,
        utilizeAbsolute: true,
        negativeExtraSpace: true,
        forceAbsolutePath: false,
      },
    },
    // https://svgo.dev/docs/plugins/convertTransform/
    {
      name: "convertTransform",
      params: {
        convertToShorts: true,
        floatPrecision: DEFAULT_FLOAT_PRECISION,
        transformPrecision: DEFAULT_TRANSFORM_PRECISION,
        matrixToTransform: true,
        shortTranslate: true,
        shortScale: true,
        shortRotate: true,
        removeUseless: true,
        collapseIntoOne: true,
      },
    },
    // https://svgo.dev/docs/plugins/removeEmptyAttrs/
    "removeEmptyAttrs",
    // https://svgo.dev/docs/plugins/removeEmptyContainers/
    "removeEmptyContainers",
    // https://svgo.dev/docs/plugins/removeUnusedNS/
    "removeUnusedNS",
    // https://svgo.dev/docs/plugins/mergePaths/
    // https://github.com/simple-icons/simple-icons/blob/11.15.0/svgo.config.mjs#L54
    {
      name: "mergePaths",
      params: {
        force: true,
        floatPrecision: DEFAULT_FLOAT_PRECISION,
        noSpaceAfterFlags: false,
      },
    },
    // https://svgo.dev/docs/plugins/sortAttrs/
    {
      name: "sortAttrs",
      params: {
        xmlnsOrder: "front",
      },
    },
    // https://svgo.dev/docs/plugins/sortDefsChildren/
    "sortDefsChildren",
    // https://svgo.dev/docs/plugins/removeTitle/
    "removeTitle",
    // https://svgo.dev/docs/plugins/removeDesc/
    {
      name: "removeDesc",
      params: {
        removeAny: true,
      },
    },
  ],
};
