# PoC: Vue 2 & 3 Component Library with `vue-demi`

## Install

```sh
yarn install
```

## Vue 3 (works)

```sh
yarn dev:vue3
```

## Vue 2 (does not work)

```sh
yarn dev:vue2
```

### Error Message

```plain text
failed to load config from <path to>demi-components-poc/packages/example-vue2/vite.config.ts
error when starting dev server:
Error:

Vue packages version mismatch:

- vue@3.2.31 (<path to>demi-components-poc/node_modules/vue/index.js)
- vue-template-compiler@2.6.14 (<path to>demi-components-poc/node_modules/vue-template-compiler/package.json)

This may cause things to work incorrectly. Make sure to use the same version for both.
If you are using vue-loader@>=10.0, simply update vue-template-compiler.
If you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.

    at Object.<anonymous> (<path to>demi-components-poc/node_modules/vue-template-compiler/index.js:10:9)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (<path to>demi-components-poc/node_modules/vite-plugin-vue2/dist/utils/descriptorCache.js:30:42)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (<path to>demi-components-poc/node_modules/vite-plugin-vue2/dist/main.js:29:27)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
```
