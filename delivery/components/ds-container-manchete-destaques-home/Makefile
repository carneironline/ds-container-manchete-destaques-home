NPM ?= $(shell which npm)
YARN ?= $(shell which yarn)
PKG_MANAGER ?= $(if $(YARN),$(YARN),$(NPM))

setup:
	@$(PKG_MANAGER) install --registry https://artifactory.globoi.com/artifactory/api/npm/npm-repos

build: setup
	@$(PKG_MANAGER) run build

build-watch: setup
	@$(PKG_MANAGER) run build:watch

start:
	@$(PKG_MANAGER) run start

run: sandbox-watch

test:
	@$(PKG_MANAGER) run test

lint:
	@$(PKG_MANAGER) run lint

sandbox:
	@$(PKG_MANAGER) run sandbox

sandbox-watch:
	@$(PKG_MANAGER) run sandbox:watch
