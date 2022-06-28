.PHONY: build
build:
	@rm -rf lib
	@env npx babel src --source-root src --out-dir lib --extensions .mjs --out-file-extension .js --ignore "src/**/test.ts" --quiet
	@rsync --archive --prune-empty-dirs --exclude 'test.ts' --relative src/./ lib
	@cp package.json lib
	@cp *.md lib

publish: build
	@cd lib && npm publish --access public

publish-next: build
	@cd lib && npm publish --access public --tag next