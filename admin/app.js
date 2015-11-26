import angular from 'angular'
import _ from 'lodash'

angular.module('feed-admin', [
	require('angular-ui-router')
])

.config(($stateProvider, $urlRouterProvider) => {
	$stateProvider
	.state('posts', {
		url: '/posts', templateUrl: 'posts.html', controller: 'Posts'
	}).state('new-post', {
		url: '/post', templateUrl: 'post.html', controller: 'Post'
	}).state('edit-post', {
		url: '/post/:id', templateUrl: 'post.html', controller: 'Post'
	})
	$urlRouterProvider.otherwise('/posts')
})

.controller('Main', function($scope) {
	$scope.posts = [{
		id: '1',
		title: '1',
		delay: '1'
	}, {
		id: '2',
		title: '2',
		delay: '2'
	}]
})

.controller('Posts', ($scope) => {
	const s = $scope
	s.remove = (post) => {
	}
})

.controller('Post', ($scope, $stateParams) => {
	const s = $scope
	s.post = _.find(s.posts, 'id', $stateParams.id)
	console.log($stateParams.id, s.post)
})
