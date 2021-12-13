install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
	npm link --force

fix:
	npx eslint . --fix

lint:
	npx eslint .

