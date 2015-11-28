
angular.module('feed', ['ionic'])
	.run(require('./bars'))
	.config(require('./routing'))
	.controller('Main', require('./control/Main'))
	.controller('New', require('./control/New'))
	.controller('Item', require('./control/Item'))
	.controller('Posts', require('./control/Posts'))
	.controller('Post', require('./control/Post'))
