.PHONY: build_frontend install_dependencies setup_node_environment

build_frontend:
	npx yarn build

install_dependencies:
	make setup_node_environment
	pip install -r requirements.txt
	npx yarn install -D

setup_node_environment:
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
	export NVM_DIR=$$HOME/.nvm; . ~/.nvm/nvm.sh ; nvm install
