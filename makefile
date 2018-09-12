#!make
include .env
export $(shell sed 's/=.*//' .env)

pm2=npx pm2

help:
	@echo "need help ?"

ls:
	@${pm2} ls

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
	@${pm2} start

stop: 
	@${pm2} stop all

kill: 
	@${pm2} kill

logs: 
	@${pm2} logs
	
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
