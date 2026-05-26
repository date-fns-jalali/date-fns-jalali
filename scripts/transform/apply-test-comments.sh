#!/bin/bash

set -ex

pnpm jscodeshift --extensions=ts,js --parser=ts -t scripts/transform/apply-test-comments.mjs src
