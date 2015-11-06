
export default function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('view', {
		abstract: true,
		templateUrl: 'views/tabs.html'
	})
	.state('view.new', state('/new', {
		'new': view('new', 'New')
	}))
	.state('view.new-item', state('/new/:id', {
		'new': view('item', 'Item')
	}))
	.state('view.selected', state('/selected', {
		'selected': view('selected')
	}))
	.state('view.selected-item', state('/selected/:id', {
		'selected': view('item', 'Item')
	}))
	.state('view.read', state('/read', {
		'read': view('read')
	}))
	.state('view.read-item', state('/read/:id', {
		'read': view('item', 'Item')
	}))
	$urlRouterProvider.otherwise('/new')
}

function state(url, views) {
	return { url, views }
}

function view(template, controller = null) {
	return {
		templateUrl: 'views/' + template + '.html',
		controller
	}
}
