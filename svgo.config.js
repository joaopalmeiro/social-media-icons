/**
 * @type {import('svgo').Config}
 */
module.exports = {
  multipass: true,

  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          // Source: https://github.com/svg/svgo/blob/master/plugins/sortAttrs.js
          sortAttrs: {
            xmlnsOrder: "front",
          },
          // Source: https://github.com/svg/svgo/blob/main/plugins/convertColors.js
          // convertColors: {
          //   currentColor: true,
          // },
        },
      },
    },

    // Source: https://github.com/svg/svgo/blob/main/plugins/removeRasterImages.js
    "removeRasterImages",
    // Source: https://github.com/svg/svgo/blob/main/plugins/removeScriptElement.js
    "removeScriptElement",
    // Source: https://github.com/svg/svgo/blob/main/plugins/removeStyleElement.js
    "removeStyleElement",
    // Source: https://github.com/svg/svgo/blob/main/plugins/reusePaths.js
    "reusePaths",
    // Source: https://github.com/svg/svgo/blob/main/plugins/removeOffCanvasPaths.js
    "removeOffCanvasPaths",

    // Source:
    // - https://github.com/svg/svgo/blob/main/plugins/removeAttrs.js
    // - https://github.com/lucide-icons/lucide/blob/main/icons/instagram.svg?short_path=e435f4b
    {
      name: "removeAttrs",
      params: {
        // attrs: "svg:fill:none",
        attrs: "fill",
      },
    },

    // Source: https://github.com/svg/svgo/blob/main/plugins/addAttributesToSVGElement.js
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          {
            fill: "currentColor",
            // fill: "red",
          },
        ],
      },
    },
  ],
};
