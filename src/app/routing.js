
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
			'new': view('new')
		}
	})
	.state('tab.dash-detail', {
		url: '/dash/:id/:title',
		views: {
			'new': view('item', 'Item')
		}
	})
	.state('tab.chats', {
		url: '/chats',
		views: {
			'selected': view('selected')
		}
	})
	.state('tab.chat-detail', {
		url: '/chats/:id/:title',
		views: {
			'selected': view('item', 'Item')
		}
	})
	.state('tab.account', {
		url: '/account',
		views: {
			'read': view('read')
		}
	})
	.state('tab.account-detail', {
		url: '/account/:id/:title',
		views: {
			'read': view('item', 'Item')
		}
	})
	$urlRouterProvider.otherwise('/tab/dash')
}

function view(template, controller = null) {
	return {
		templateUrl: 'views/' + template + '.html',
		controller
	}
}
