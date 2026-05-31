#!/bin/bash

set -ex

pnpm jscodeshift --extensions=ts,js --parser=ts -t scripts/transform/core.mjs src
npx prettier --write .
