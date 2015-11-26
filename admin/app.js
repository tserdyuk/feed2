import angular from 'angular'

angular.module('feed-admin', [
	require('angular-ui-router')
])

.config(($stateProvider, $urlRouterProvider) => {
	$stateProvider
		.state('posts', {
			url: '/posts',
			templateUrl: 'posts.html',
			controller: 'Posts'
		})
		.state('post', {
			url: '/post',
			templateUrl: 'post.html',
			controller: 'Post'
		})
	$urlRouterProvider.otherwise('/posts')
})

.controller('Main', function($scope) {
})

.controller('Posts', ($scope) => {
	const s = $scope
	s.items = [{
		title: '1',
		delay: '1'
	}, {
		title: '2',
		delay: '2'
	}]
	s.edit = (post) => {
	}
	s.remove = (post) => {
	}
})

.controller('Post', ($scope) => {
	alert('Post!')
})
