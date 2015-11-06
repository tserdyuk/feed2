import controllers from './app/controllers'

angular.module('starter', ['ionic', 'starter.controllers'])
	.run(require('./app/bars'))
	.config(require('./app/routing'))
