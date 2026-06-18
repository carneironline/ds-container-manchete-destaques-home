PIP=pip
DOCKER=docker
ENV=qa

NPM ?= $(shell which npm)
YARN ?= $(shell which yarn)
PKG_MANAGER ?= $(YARN)

ENVS = qa dev prod

# colors
NO_COLOR=\x1b[0m
RED_COLOR=\033[0;31m
GREEN_COLOR=\033[0;32m
YELLOW_COLOR=\033[1;33m

.PHONY: run docker-update publish release build setup watch

qa:
	@$(eval ENV := qa)

dev:
	@$(eval ENV := dev)

prod:
	@$(eval ENV := prod)

# Admin tasks
setup-admin:
	@echo "[setup-admin] Installing node dependencies..."
	@$(PKG_MANAGER) install --registry https://artifactory.globoi.com/artifactory/api/npm/npm-repos

build-admin:
	@$(PKG_MANAGER) run build
	@$(MAKE) fix-build-admin

run-admin:
	@echo "[run-admin] Running pages sandbox..."
	@ADMIN_ENV=qa $(PKG_MANAGER) start

upgrade-admin:
	@$(PKG_MANAGER) upgrade backstage-admin --registry https://artifactory.globoi.com/artifactory/api/npm/npm-repos

upgrade-pages:
	@$(PKG_MANAGER) upgrade backstage-pages --registry https://artifactory.globoi.com/artifactory/api/npm/npm-repos

lint-admin:
	@$(PKG_MANAGER) run lint

test-admin:
	@$(PKG_MANAGER) run test

coverage:
	@$(PKG_MANAGER) run coverage

fix-build-admin:
	@printf "Removing not needed assets bundle "
	@-rm dist/asset-manifest.json > /dev/null 2>&1 || true
	@-rm dist/*.map > /dev/null 2>&1 || true
	@echo "✓"
	@printf "Fixing the bundle name "
	@-mv dist/main.*.js dist/main.js > /dev/null 2>&1 || true
	@-mv dist/main.*.css dist/main.css > /dev/null 2>&1 || true
	@echo "✓"

# Other Tasks
build: build-admin

setup: setup-admin

run-all: run-admin

run:
	@$(MAKE) --jobs=3 run-all
