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
        floatPrecision: 3,
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
  ],
};
