#!/bin/bash

# The script runs "Are the types wrong?" test.
#
# It's a part of the test process.

set -e

root="$(pwd)/$(dirname "$0")/../.."
root_rel_path="$root/tmp/types"
mkdir -p "$root_rel_path"
export PACKAGE_OUTPUT_PATH=$(realpath "$root_rel_path")

./scripts/build/package.sh --no-format --no-cdn

echo "$PACKAGE_OUTPUT_PATH"
pnpm attw --pack "$PACKAGE_OUTPUT_PATH"
