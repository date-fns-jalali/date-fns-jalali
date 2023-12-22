test:
	@env TZ=Asia/Kolkata npx vitest run

test-watch:
	@env TZ=Asia/Kolkata npx vitest

test-types: install-attw build 
	@cd lib && attw --pack

.PHONY: build
build:
	@rm -rf lib
	@env npx babel src --source-root src --out-dir lib --extensions .mjs --out-file-extension .js --ignore "src/**/test.ts" --quiet
	@rsync --archive --prune-empty-dirs --exclude 'test.ts' --relative src/./ lib
	@make build-mts
	@cp package.json lib
	@cp *.md lib

build-mts:
	@find lib -name '*.d.ts' | while read file; do \
		new_file=$${file%.d.ts}.d.mts; \
		cp $$file $$new_file; \
	done

publish: build
	@cd lib && npm publish --access public

publish-next: build
	@cd lib && npm publish --access public --tag next

install-attw:
	@if ! command -v attw >/dev/null 2>&1; then \
		npm i -g @arethetypeswrong/cli; \
	fi