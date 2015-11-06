
export default function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('tab', {
		url: '/tab',
		abstract: true,
		templateUrl: 'views/tabs.html'
	})
	.state('tab.dash', {
		url: '/dash',
		views: {
			'tab-dash': {
				templateUrl: 'views/new.html',
				controller: null
			}
		}
	})
	.state('tab.dash-detail', {
		url: '/dash/:id/:title',
		views: {
			'tab-dash': {
				templateUrl: 'views/item.html',
				controller: 'Item'
			}
		}
	})
	.state('tab.chats', {
		url: '/chats',
		views: {
			'tab-chats': {
				templateUrl: 'views/selected.html',
				controller: null
			}
		}
	})
	.state('tab.chat-detail', {
		url: '/chats/:id/:title',
		views: {
			'tab-chats': {
				templateUrl: 'views/item.html',
				controller: 'Item'
			}
		}
	})
	.state('tab.account', {
		url: '/account',
		views: {
			'tab-account': {
				templateUrl: 'views/read.html',
				controller: null
			}
		}
	})
	.state('tab.account-detail', {
		url: '/account/:id/:title',
		views: {
			'tab-account': {
				templateUrl: 'views/item.html',
				controller: 'Item'
			}
		}
	})
	$urlRouterProvider.otherwise('/tab/dash')
}
