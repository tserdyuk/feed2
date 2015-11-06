import controllers from './controllers'

angular.module('starter', ['ionic', 'starter.controllers'])
	.run(require('./bars'))
	.config(require('./routing'))
