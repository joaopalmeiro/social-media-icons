# Notes

- `volta pin node@16.15.1`
- [svg-icon-library-starter](https://github.com/kreuzerk/svg-icon-library-starter) repo
- https://github.com/svg/svgo/issues/1211
- https://github.com/svg/svgo/issues/1092
- https://github.com/googlefonts/picosvg:
  - `pipx run picosvg figma/icon/dribbble.svg --output_file icons/dribbble.svg`
  - `pipx run picosvg figma/icon/dribbble.svg --output_file figma/icon/dribbble.svg`
  - `pipx run picosvg figma/icon/instagram.svg --output_file figma/icon/instagram.svg`
  - `pipx run picosvg icons/instagram.svg --output_file instagram.svg`
  - `pipx run picosvg --helpfull`
  - https://github.com/googlefonts/picosvg/blob/v0.22.1/tests/twemoji-lesotho-flag-nano.svg?short_path=9b1b159
  - https://github.com/googlefonts/picosvg/blob/v0.22.1/tests/twemoji-lesotho-flag-before.svg?short_path=ab502b9
  - https://github.com/googlefonts/picosvg/blob/v0.22.1/tests/fill-rule-evenodd-before.svg?short_path=ab502b9
  - https://github.com/googlefonts/picosvg/blob/v0.22.1/tests/fill-rule-evenodd-after.svg?short_path=ab502b9
  - https://github.com/googlefonts/picosvg/pull/54
- https://github.com/lucide-icons/lucide/blob/main/icons/instagram.svg?short_path=e435f4b
- https://github.com/svg/svgo/releases/tag/v3.0.0
- https://github.com/best-shot/svgo-config
- https://publint.dev/ + https://publint.dev/rules
- https://www.stefanjudis.com/today-i-learned/vs-code-supports-jsdoc-powered-type-checking/
- https://github.com/svg/svgo#built-in-plugins
- https://github.com/svg/svgo/pull/521
- https://github.com/oslllo/svg-fixer:
  - `npx oslllo-svg-fixer -s icons/instagram.svg -d .`
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule
- https://www.npmjs.com/package/svgo
- https://oh-vue-icons.js.org/
- https://github.com/Renovamen/oh-vue-icons/blob/master/iconpacks/index.js
- https://iconsax.io/ + https://github.com/lusaxweb/iconsax
- https://vuesax.com/
- https://github.com/lusaxweb/iconsax/tree/master/static/Iconsax/Svg/All
- https://github.com/logicspark/awesome-vitepress-v1
- https://vue-iconsax.onrender.com/ + https://www.npmjs.com/package/vue-iconsax
- https://icones.js.org/
- https://github.com/antfu/icones/issues/123 + https://github.com/antfu/icones/issues/43
- https://iconify.design/
- https://vitejs.dev/guide/features.html#static-assets
- https://vuejs.org/api/built-in-directives.html#v-html
- https://vuejs.org/guide/essentials/template-syntax.html#raw-html
- https://stackoverflow.com/a/73678605 + https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
- https://stackoverflow.com/a/76829708
- https://vuejs.org/api/built-in-special-elements.html#component
- https://vuejs.org/api/built-in-special-elements.html#template
- https://bun.sh/docs/cli/add#dev
- https://vitepress.dev/guide/markdown#github-style-tables
- https://vuejs.org/api/built-in-special-elements.html#slot
- https://m3.material.io/styles/icons/designing-icons + https://m2.material.io/design/iconography/system-icons.html
- https://docs.edg.io/guides/v7/sites_frameworks/getting_started/vitepress
- https://docs.brew.sh/FAQ#how-do-i-update-my-local-packages: `brew update` + `brew upgrade pyenv` + `pyenv --version`
- https://github.com/pypa/pipenv/issues/5531
- https://stackoverflow.com/questions/27472540/difference-between-and-in-bash
- https://fontawesome.com/docs/web/add-icons/upload-icons/prep-icons#exporting-svgs-from-design-software
- https://github.com/svg/svgo/issues/171
- https://github.com/svg/svgo/blob/v3.0.2/plugins/convertPathData.js#L99 (`floatPrecision = 3`)
- `editorNamespaces`:
  - https://github.com/svg/svgo/blob/v3.0.3/plugins/_collections.js#L1926
  - https://github.com/svg/svgo/blob/v3.3.2/plugins/_collections.js#L1974
- https://svgo.dev/
  - https://svgo.dev/docs/plugins-api/
  - https://svgo.dev/docs/preset-default/
  - https://github.com/syntax-tree/xast
  - https://github.com/simple-icons/simple-icons/blob/11.15.0/svgo.config.mjs:
    - `{ 'addAttributesToSVGElement', params: { attributes: [{role: 'img', xmlns: 'http://www.w3.org/2000/svg'}], }, },`
- https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#fenced-code-blocks:
  - "To display triple backticks in a fenced code block, wrap them inside quadruple backticks."
- https://github.com/edent/SuperTinyIcons
- https://github.com/alrra/browser-logos
- https://github.com/simple-icons/simple-icons/blob/11.15.0/package.json: `"keywords": [ "svg", "icons" ]`
- https://vitepress.dev/guide/getting-started#setup-wizard
- https://github.com/vuejs/vitepress/blob/v1.0.0-rc.23/docs/.vitepress/config.ts#L149
- https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md
- https://vitepress.dev/guide/mpa-mode
- https://github.com/lucaong/minisearch/
- [npm-stat](https://npm-stat.link/social-media-icons)
- https://vitejs.dev/guide/features#glob-import:
  - https://vitejs.dev/guide/features#custom-queries
  - https://vitejs.dev/guide/features.html#static-assets
- https://github.com/vituum/vituum

## Commands

```bash
npm install -D \
npm-package-json-lint \
npm-package-json-lint-config-package \
npm-run-all2 \
publint \
sort-package-json \
svgo \
svgo-utils \
vitepress
```

```bash
npx vitepress init
```

```bash
pipenv --rm
```

```bash
rm -rf Pipfile Pipfile.lock
```

```bash
pipenv --rm && rm -rf Pipfile Pipfile.lock
```

```bash
pipenv install --skip-lock picosvg==0.22.1 && pipenv install --dev --skip-lock black==23.10.0
```

```bash
pipenv --python $(cat .python-version)
```

```bash
pipenv install --help
```

```bash
pipenv run picosvg --helpfull
```

```bash
cat figma/icon/dribbble.svg && pipenv run picosvg figma/icon/dribbble.svg
```

```bash
rm -rf node_modules/ && npm install
```

## Snippets

```json
{
  "id": "",
  "name": "",
  "source": "",
  "guidelines": ""
}
```

```ts
const icons = import.meta.glob("../icons/*.svg", {
  query: "?raw",
  import: "default",
});

for (const iconImport in icons) {
  console.log(`${iconImport}: ${await icons[iconImport]()}`);
}
```

### `docs/components/Icon.vue` file

```vue
<script setup lang="ts">
defineProps<{
  svgRaw: string;
}>();
</script>

<template>
  <i v-html="svgRaw" />
</template>
```

### `Pipfile`

```ini
[[source]]
url = "https://pypi.org/simple"
verify_ssl = true
name = "pypi"

[packages]
picosvg = "==0.22.1"

[dev-packages]
black = "==23.10.0"

[requires]
python_version = "3.10"
python_full_version = "3.10.13"
```

### `apply_picosvg.py` file

```python
# https://github.com/googlefonts/picosvg/blob/v0.22.1/setup.py#L25
# https://github.com/googlefonts/picosvg/blob/v0.22.1/src/picosvg/picosvg.py#L74
# https://github.com/googlefonts/picosvg/blob/v0.22.1/src/picosvg/picosvg.py#L46
# https://stackoverflow.com/questions/50110800/python-pathlib-make-directories-if-they-don-t-exist
# https://github.com/googlefonts/picosvg/blob/v0.22.1/src/picosvg/svg.py#L1332

from pathlib import Path

from picosvg.svg import SVG

INPUT_PATH = Path("figma/icon")
# OUTPUT_PATH = Path("figma/icon")
OUTPUT_PATH = Path("picosvg")

# https://bjango.com/articles/svgpassthroughprecision/#figma
# https://bjango.com/articles/svgexports/
# https://bjango.com/articles/svgpassthroughprecision/#other-tests
# Figma:
# SVG_EXPORT_PRECISION = 5
# Maximum value found:
SVG_EXPORT_PRECISION = 10

if __name__ == "__main__":
    OUTPUT_PATH.mkdir(parents=True, exist_ok=True)

    for icon_path in INPUT_PATH.glob("*.svg"):
        icon = SVG.parse(icon_path)

        processed_icon = icon.topicosvg(
            ndigits=SVG_EXPORT_PRECISION, allow_text=False, drop_unsupported=False
        )

        output_icon = processed_icon.tostring(pretty_print=True)

        with open(OUTPUT_PATH / icon_path.name, "w") as f:
            f.write(output_icon)

        print(f"{icon_path} ✓")
```

### `package.json` file

```json
{
  "scripts": {
    "build:svgo": "svgo -f ./picosvg -o ./icons",
    "build:picosvg": "pipenv run python apply_picosvg.py",
    "build": "run-s build:picosvg build:svgo"
  }
}
```

### `README.md` file

````markdown
## Development

### JS

```bash
fnm install && fnm use && node --version
```

```bash
npm install
```

```bash
npm run build
```

```bash
npm pack --dry-run
```

### Python

```bash
pyenv install && pyenv versions
```

```bash
pip install pipenv && pipenv --version
```

```bash
pipenv install --dev --skip-lock
```

```bash
pipenv run black apply_picosvg.py
```

## Deployment

Update the [Social Media Icons file](https://www.figma.com/community/file/1098022441810511046) version in the README file (if necessary).

```bash
npm version patch
```

or

```bash
npm version minor
```

or

```bash
npm version major
```

```bash
git push --follow-tags
```

or

```bash
npm version --no-git-tag-version patch
```

or

```bash
npm version --no-git-tag-version minor
```

or

```bash
npm version --no-git-tag-version major
```

Create a tag on [GitHub Desktop](https://github.blog/2020-05-12-create-and-push-tags-in-the-latest-github-desktop-2-5-release/).

Check [GitHub](https://github.com/joaopalmeiro/social-media-icons/actions) and [npm](https://www.npmjs.com/package/social-media-icons).
````

### `.github/workflows/npm-publish.yml` file

```yml
# Source:
# - https://github.com/joaopalmeiro/react-viz-logos/blob/v0.1.1/.github/workflows/npm-publish.yml
# - https://github.com/joaopalmeiro/svelte-logos/blob/v0.1.0/.github/workflows/npm-publish.yml
# - https://github.com/actions/setup-node
# - https://github.com/joaopalmeiro/code-profiler/blob/main/.github/workflows/publish.yml

name: Node.js Package

on:
  push:
    tags:
      - "v*"

jobs:
  publish-npm:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version-file: ".nvmrc"
          registry-url: "https://registry.npmjs.org/"
      - run: npm install
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.npm_token}}
```

### `svgo.config.js` file

```js
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
```

```js
const DEFAULT_FLOAT_PRECISION = 3;
const DEFAULT_TRANSFORM_PRECISION = 5;

/**
 * @type {import('svgo').Config}
 */
export default {
  // https://github.com/simple-icons/simple-icons/blob/11.15.0/svgo.config.mjs
  // https://svgo.dev/docs/preset-default/

  multipass: true,
  eol: "lf",

  plugins: [
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
    // https://svgo.dev/docs/plugins/mergeStyles/ (no need w/ removeStyleElement)
    // "mergeStyles",
    // https://svgo.dev/docs/plugins/inlineStyles/
    {
      name: "inlineStyles",
      params: {
        onlyMatchedOnce: true,
        removeMatchedSelectors: true,
      },
    },
    // https://svgo.dev/docs/plugins/minifyStyles/ (no need w/ removeStyleElement)
    // {
    //   name: "minifyStyles",
    //   params: {
    //     usage: true,
    //   },
    // },
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
    // https://svgo.dev/docs/plugins/cleanupListOfValues/
    {
      name: "cleanupListOfValues",
      params: {
        floatPrecision: DEFAULT_FLOAT_PRECISION,
        leadingZero: true,
        defaultPx: true,
        convertToPx: true,
      },
    },
    // https://svgo.dev/docs/plugins/convertOneStopGradients/
    "convertOneStopGradients",
    // https://svgo.dev/docs/plugins/convertStyleToAttrs/
    {
      name: "convertStyleToAttrs",
      params: {
        keepImportant: false,
      },
    },
    // https://svgo.dev/docs/plugins/removeDimensions/
    // "removeDimensions",
    // https://svgo.dev/docs/plugins/removeOffCanvasPaths/
    "removeOffCanvasPaths",
    // https://svgo.dev/docs/plugins/removeRasterImages/
    "removeRasterImages",
    // https://svgo.dev/docs/plugins/removeScriptElement/
    "removeScriptElement",
    // https://svgo.dev/docs/plugins/removeStyleElement/
    "removeStyleElement",
    // https://svgo.dev/docs/plugins/reusePaths/
    "reusePaths",
    // https://svgo.dev/docs/plugins/removeAttrs/
    {
      name: "removeAttrs",
      params: {
        attrs: "fill",
      },
    },
    // https://svgo.dev/docs/plugins/addAttributesToSVGElement/
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color
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
    // https://svgo.dev/docs/plugins/removeXlink/
    {
      name: "removeXlink",
      params: {
        includeLegacy: true,
      },
    },
  ],
};
```

### `.github/workflows/deploy-docs.yml` file

```yml
# https://github.com/joaopalmeiro/d3-extra-scale-chromatic/blob/main/.github/workflows/deploy-docs.yml

name: Deploy documentation to Surge

on:
  push:
    tags:
      - "v*"
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v3
        with:
          node-version-file: ".nvmrc"
      - run: npm install
      - run: npm run docs:build
      - run: npm install --global surge
      - run: surge docs/.vitepress/dist https://social-media-icons.surge.sh/ --token ${{secrets.SURGE_TOKEN}}
```
