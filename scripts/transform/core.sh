#!/bin/bash

set -ex

jscodeshift --extensions=ts,js --parser=ts -t scripts/transform/core.js src
npx prettier --write .
