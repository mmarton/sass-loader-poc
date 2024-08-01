## Case 1:

- yarn install
- yarn build
- works fine

## Case 2:

- yarn install
- change the import in main.css to the second one.
- yarn build
- breaks with
```
ERROR in ./main.scss
Module build failed (from ./node_modules/resolve-url-loader/index.js):
Error: resolve-url-loader: error processing CSS
  expected "base" to be absolute path to a valid directory
  ...
```

## Case 3:

- yarn install
- change the import in main.css to the second one.
- uncomment `options: { api: "legacy" },` in webpack.config.js
- yarn build
- works fine
