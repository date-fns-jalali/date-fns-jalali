#!/bin/bash

set -ex

jscodeshift --extensions=ts,js --parser=ts -t scripts/transform/apply-test-comments.js src
