.PHONY: build help

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

day1: ## Run Day1
	node 01/index.js

day2: ## Run Day2
	node 02/index.js

day3: ## Run Day3
	node 03/index.js
