
angular.module('starter', ['ionic'])
	.run(require('./bars'))
	.config(require('./routing'))
	.controller('Main', require('./Main'))
	.controller('New', require('./New'))
	.controller('Item', require('./Item'))
