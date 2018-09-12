#!make
include .env
export $(shell sed 's/=.*//' .env)

help:
	@echo "need help ?"

ls:
	@npx pm2 ls

install: 
	@cd ./tutorial-part-one && npm install
	@cd -
	@cd ./tutorial-part-two && npm install
	@cd -
	@cd ./tutorial-part-three && npm install
	@cd -
	@cd ./association-sportive-saint-just && npm install
	@cd -

restart: stop start 

start:
	@npx pm2 start

stop: 
	@npx pm2 stop all

kill: 
	@npx pm2 kill

logs: 
	@npx pm2 logs
	
build:
	@cd ./tutorial-part-one && npm run build
	@cd -
	@cd ./tutorial-part-two && npm run build
	@cd -
	@cd ./tutorial-part-three && npm run build
	@cd -
	@cd ./association-sportive-saint-just && npm run build
	@cd -
	
serve:
	@cd ./tutorial-part-one && npm run serve -- --port ${APP_1_SERVE_PORT} &
	@cd -
	@cd ./tutorial-part-two && npm run serve -- --port ${APP_2_SERVE_PORT} &
	@cd -
	@cd ./tutorial-part-three && npm run serve -- --port ${APP_3_SERVE_PORT} &
	@cd -
	@cd ./association-sportive-saint-just && npm run serve -- --port ${APP_4_SERVE_PORT} &
	@cd -
