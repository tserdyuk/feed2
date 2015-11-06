
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
			'tab-dash': view('new')
		}
	})
	.state('tab.dash-detail', {
		url: '/dash/:id/:title',
		views: {
			'tab-dash': view('item', 'Item')
		}
	})
	.state('tab.chats', {
		url: '/chats',
		views: {
			'tab-chats': view('selected')
		}
	})
	.state('tab.chat-detail', {
		url: '/chats/:id/:title',
		views: {
			'tab-chats': view('item', 'Item')
		}
	})
	.state('tab.account', {
		url: '/account',
		views: {
			'tab-account': view('read')
		}
	})
	.state('tab.account-detail', {
		url: '/account/:id/:title',
		views: {
			'tab-account': view('item', 'Item')
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
