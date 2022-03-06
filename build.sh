#! /bin/bash

yarn install

export VUE2=true
yarn workspace library node -p "require('vue').version"
yarn build:vue2

export VUE2=false
yarn workspace library node -p "require('vue').version"
yarn build:vue3
