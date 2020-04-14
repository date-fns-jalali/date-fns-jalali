#!/bin/bash

# The script unifies the build scripts.
#
# It's the entry point for the build process.

set -ex


jscodeshift --extensions=ts,js --parser=ts -t scripts/transform/core.js src
