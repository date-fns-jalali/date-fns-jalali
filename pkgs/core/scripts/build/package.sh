#!/bin/bash

# The script generates the package in the given directory.
#
# It's addition to the build process. The script is used in examples.
# It also could be used to build date-fns from a git checkout.

set -e

build_cjs=true
build_cdn=true
format_code=true
include_docs=true
include_fp=true
include_i18n=true

for arg in "$@"; do
  if [ "$arg" = "--no-cjs" ]; then
    build_cjs=false
  fi

  if [ "$arg" = "--no-cdn" ]; then
    build_cdn=false
  fi

  if [ "$arg" = "--no-format" ]; then
    format_code=false
  fi

  if [ "$arg" = "--no-docs" ]; then
    include_docs=false
  fi

  if [ "$arg" = "--no-fp" ]; then
    include_fp=false
  fi

  if [ "$arg" = "--no-i18n" ]; then
    include_i18n=false
  fi
done

echo "⚡️ Building package"

#region Prepare

# cd to the root dir
root="$(pwd)/$(dirname "$0")/../.."
cd "$root" || exit 1

# XXX: $PACKAGE_OUTPUT_PATH must be an absolute path!
dir=${PACKAGE_OUTPUT_PATH:-"$root/dist"}
export PACKAGE_OUTPUT_PATH="$dir"

# Clean up output dir
rm -rf "$dir"
mkdir -p "$dir"

#endregion

#region ESM

echo
echo "🚧 Building ESM code..."

# Transpile ESM versions of files
env BABEL_ENV=esm pnpm babel src \
  --config-file ./babel.config.json \
  --source-root src \
  --out-dir "$dir" \
  --extensions .js,.ts \
  --out-file-extension .js \
  --quiet

# Add fallback for Next.js and other tools that modularize imports:
node scripts/build/modularized.ts

echo "🟢 ESM code is ready!"

#endregion

#region CommonJS

if [ "$build_cjs" = true ]; then
  echo
  echo "🚧 Building CommonJS code..."

  # Transpile CommonJS versions of files
  env BABEL_ENV=cjs pnpm babel src \
    --config-file ./babel.config.json \
    --source-root src \
    --out-dir "$dir" \
    --extensions .js,.ts \
    --out-file-extension .cjs \
    --quiet

  echo "🟢 CommonJS code is ready!"
else
  echo
  echo "⚪️ --no-cjs is set, CommonJS code is skipped"
fi

#endregion

#region TypeScript

echo
echo "🚧 Building TypeScript definitions..."

# Generate TypeScript
pnpm tsgo --project tsconfig.dist.json --outDir "$dir"

echo "🟢 TypeScript definitions are ready!"

#endregion

#region Beautification

echo
echo "🚧 Formatting code..."

# Make it prettier
if [ "$format_code" = true ]; then
  pnpm prettier --write --ignore-path "" "$dir" 1> /dev/null

  echo "🟢 Formatting is complete!"
else
  echo "⚪️ --no-format is set, formatting is skipped"
fi

#endregion

#region Flattening

echo
echo "🚧 Flattening the modules..."

# Flatten the structure
node scripts/build/flatten.ts

echo "🟢 Flattening is complete!"

#endregion

#region CommonJS types

if [ "$build_cjs" = true ]; then
  echo
  echo "🚧 Building CommonJS type definitions..."

  # Generate .d.cts files
  node scripts/build/cts.ts

  echo "🟢 CommonJS type definitions are ready!"
else
  echo
  echo "⚪️ --no-cjs is set, CommonJS type definitions are skipped"
fi

#endregion

#region Files

echo
echo "🚧 Copying misc files..."

# Copy basic files
for pattern in CHANGELOG.md \
  package.json \
  docs \
  LICENSE.md \
  ../../README.md \
  ../../SECURITY.md
do
  cp -r "$pattern" "$dir"
done

echo "🟢 Misc files are ready!"

echo
echo "🚧 Cleaning up package.json..."

package_json_path="$dir/package.json"
jaq -i '. + .publishConfig' "$package_json_path"
jaq -i 'del(.devDependencies, .scripts, .publishConfig)' "$package_json_path"

echo "🟢 package.json is ready!"


#endregion

#region CDN

echo

# Build CDN versions
if [ "$build_cdn" = true ]; then
  echo "🚧 Building CDN versions..."

  bun ./scripts/build/cdn.ts

  echo "🟢 CDN versions are ready!"
else
  echo "⚪️ --no-cdn is set, CDN versions are skipped"
fi

#endregion

#region Cleanup

if [ "$include_docs" = false ]; then
  echo
  echo "🚧 Removing docs files..."

  rm -rf "$dir/docs" \
    "$dir/CHANGELOG.md" \
    "$dir/SECURITY.md" \
    "$dir/LICENSE.md"

  echo "🟢 Docs files are removed!"
fi

if [ "$include_fp" = false ]; then
  echo
  echo "🚧 Removing FP files..."

  rm -rf "$dir"/fp*

  echo "🟢 FP files are removed!"
fi

if [ "$include_i18n" = false ]; then
  echo
  echo "🚧 Removing I18n files..."

  rm -rf "$dir"/locale* \
    "$dir"/format.* \
    "$dir"/formatDistance* \
    "$dir"/formatDuration* \
    "$dir"/formatRelative* \
    "$dir"/parse.*

  echo "🟢 I18n files are removed!"
fi

#endregion

echo -e "\n⭐️ Build complete!"
