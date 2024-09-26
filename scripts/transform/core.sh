#!/bin/bash

set -ex

jscodeshift --extensions=ts,js --parser=ts -t scripts/transform/core.mjs src
npx prettier --write .
