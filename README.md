# PoC: Vue 2 & 3 SFC Component Library with `vue-demi`

This PoC creates two separate Vue version-specific packages that reference the same component source code. A third
package, intended to be published, joins the build artifacts of the two and selects one depending on the consumer's
installed Vue version.

## Install

```sh
yarn install
```

## Vue 3

```sh
yarn dev:vue3
```

## Vue 2

```sh
yarn dev:vue2
```
