#!/bin/sh
yarn build
git checkout master
git checkout develop -- docs
rm -rf .
cp dist/* ./