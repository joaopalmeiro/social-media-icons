# social-media-icons

SVG files for social media icons. For the sources and guidelines for these icons, check the [Social Media Icons file](https://www.figma.com/community/file/1098022441810511046) (**v0.11.0**) on the Figma Community, please.

- [Source code](https://github.com/joaopalmeiro/social-media-icons)
- [Documentation](https://social-media-icons.surge.sh/)
- [npm package](https://www.npmjs.com/package/social-media-icons)
- [Licenses](https://licenses.dev/npm/social-media-icons)
- [Package Phobia](https://packagephobia.com/result?p=social-media-icons)
- [bundlejs](https://bundlejs.com/?bundle&q=social-media-icons)
- [npm trends](https://npmtrends.com/social-media-icons)
- [Snyk Advisor](https://snyk.io/advisor/npm-package/social-media-icons)
- [Visualization of npm dependencies](https://npm.anvaka.com/#/view/2d/social-media-icons)

## Development

```bash
fnm install && fnm use && node --version && npm --version
```

```bash
npm install
```

```bash
npm run lint
```

```bash
npm run format
```

```bash
npm run build
```

```bash
npm run docs:dev
```

## Deployment

### Package

```bash
npm pack --dry-run
```

```bash
npm version patch
```

```bash
npm version minor
```

```bash
npm version major
```

- Update the [Social Media Icons file](https://www.figma.com/community/file/1098022441810511046) version at the top (if necessary).

```bash
echo "v$(npm pkg get version | tr -d \")" | pbcopy
```

- Commit and push changes.
- Create a tag on [GitHub Desktop](https://github.blog/2020-05-12-create-and-push-tags-in-the-latest-github-desktop-2-5-release/).
- Check [GitHub](https://github.com/joaopalmeiro/social-media-icons/tags).

```bash
npm login
```

```bash
npm publish
```

- Check [npm](https://www.npmjs.com/package/social-media-icons).
