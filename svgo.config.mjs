export default {
  plugins: [
    "preset-default",
    "cleanupListOfValues",
    {
      name: "removeAttrs",
      params: {
        attrs: "fill",
      },
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          {
            fill: "currentcolor",
          },
        ],
      },
    },
  ],
};
