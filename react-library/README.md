# React Library

## Setup

```
  git clone git@github.com:pismo/frontend-boilerplates.git
  cp -R frontend-boilerplates/react-library your-project/
  cd your-project/
  yarn install
```

## Development

```
  yarn start
```

Should automatically open `http://localhost:3000` for you.

```
  yarn test
```

This runs Jest.
*Tip: You can add `--watch` to keep it running.*

## Publish

```
  yarn build
```

This writes the minified bundle file to `dist` folder.

Then, bump your `package.json` version, commit it and push a new `git tag`. Now you can publish it to `npm`:

```
  npm publish
```
