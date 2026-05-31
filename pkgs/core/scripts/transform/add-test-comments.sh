#!/bin/bash

set -ex

pnpm jscodeshift --extensions=ts,js --parser=ts -t scripts/transform/add-test-comments.mjs src
npx prettier --write .
