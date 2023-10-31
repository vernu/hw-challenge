.PHONY: install
install:
	poetry install

.PHONY: migrate
migrate:
	poetry run python -m core.manage migrate

.PHONY: loaddata
loaddata:
	poetry run python -m core.manage loaddata genres
	poetry run python -m core.manage loaddata movies

.PHONY: test
test:
	poetry run python -m core.manage test

.PHONY : lint
lint:
	poetry run flake8 core
	# poetry run black --check core
	# poetry run isort --check-only --diff --recursive core

.PHONY: run
run:
	poetry run python -m core.manage runserver