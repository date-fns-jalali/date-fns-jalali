#!/bin/bash

# The script unifies the build scripts.
#
# It's the entry point for the build process.

set -ex


jscodeshift -t scripts/transform/core.js src
