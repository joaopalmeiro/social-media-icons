/**
 * @type {import('svgo').Config}
 */
export default {
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
  ],
};
