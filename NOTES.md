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

## Commands

```bash
npm install --save-dev svgo
```

```bash
npm install --save-dev vitepress npm-run-all
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
