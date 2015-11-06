
export default function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('view', {
		abstract: true,
		templateUrl: 'views/tabs.html'
	})
	.state('view.new', {
		url: '/new',
		views: {
			'new': view('new')
		}
	})
	.state('view.new-item', {
		url: '/new/:id/:title',
		views: {
			'new': view('item', 'Item')
		}
	})
	.state('view.selected', {
		url: '/selected',
		views: {
			'selected': view('selected')
		}
	})
	.state('view.selected-item', {
		url: '/selected/:id/:title',
		views: {
			'selected': view('item', 'Item')
		}
	})
	.state('view.read', {
		url: '/read',
		views: {
			'read': view('read')
		}
	})
	.state('view.read-item', {
		url: '/read/:id/:title',
		views: {
			'read': view('item', 'Item')
		}
	})
	$urlRouterProvider.otherwise('/new')
}

function view(template, controller = null) {
	return {
		templateUrl: 'views/' + template + '.html',
		controller
	}
}
