# Script to install prod
install:
	npm install
	yarn build

# from develop to master
release:
	./scripts/release.sh

release-minor:
	./scripts/release-minor.sh

release-major:
	./scripts/release-major.sh