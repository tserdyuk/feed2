
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
				controller: 'DashCtrl'
			}
		}
	})
	.state('tab.dash-detail', {
		url: '/dash/:id/:title',
		views: {
			'tab-dash': {
				templateUrl: 'views/item.html',
				controller: 'ChatDetailCtrl'
			}
		}
	})
	.state('tab.chats', {
		url: '/chats',
		views: {
			'tab-chats': {
				templateUrl: 'views/selected.html',
				controller: 'ChatsCtrl'
			}
		}
	})
	.state('tab.chat-detail', {
		url: '/chats/:id/:title',
		views: {
			'tab-chats': {
				templateUrl: 'views/item.html',
				controller: 'ChatDetailCtrl'
			}
		}
	})
	.state('tab.account', {
		url: '/account',
		views: {
			'tab-account': {
				templateUrl: 'views/read.html',
				controller: 'AccountCtrl'
			}
		}
	})
	.state('tab.account-detail', {
		url: '/account/:id/:title',
		views: {
			'tab-account': {
				templateUrl: 'views/item.html',
				controller: 'ChatDetailCtrl'
			}
		}
	})
	$urlRouterProvider.otherwise('/tab/dash')
}
