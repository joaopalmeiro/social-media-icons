# social-media-icons

SVG files for social media icons. For the sources and guidelines for these icons, check the [Social Media Icons file](https://www.figma.com/community/file/1098022441810511046) (**v0.11.0**) on the Figma Community, please.

- [Source code](https://github.com/joaopalmeiro/social-media-icons)
- [Documentation](https://social-media-icons.surge.sh/)
- [npm package](https://www.npmjs.com/package/social-media-icons)

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
