module.exports = {
  multipass: true,

  plugins: [
    "preset-default",

    // Source: https://github.com/svg/svgo/blob/main/plugins/removeRasterImages.js
    "removeRasterImages",

    // https://github.com/svg/svgo/blob/main/plugins/removeAttrs.js
    {
      name: "removeAttrs",
      params: {
        attrs: "svg:fill:none",
      },
    },

    // Source: https://github.com/svg/svgo/blob/master/plugins/sortAttrs.js
    {
      name: "sortAttrs",
      params: {
        xmlnsOrder: "alphabetical",
      },
    },

    // Source: https://github.com/svg/svgo/blob/main/plugins/convertColors.js
    {
      name: "convertColors",
      params: {
        currentColor: true,
      },
    },
  ],
};
