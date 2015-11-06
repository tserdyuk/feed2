
angular.module('starter', ['ionic'])
	.run(require('./bars'))
	.config(require('./routing'))
	.controller('Main', require('./Main'))
	.controller('Item', require('./Item'))
