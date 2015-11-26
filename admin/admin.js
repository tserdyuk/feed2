import angular from 'angular'
import Firebase from 'firebase'
import _ from 'lodash'
import config from './config'

angular.module('feed-admin', [
	require('angularfire'),
	require('angular-ui-router')
])

.config(($stateProvider, $urlRouterProvider) => {
	$stateProvider
	.state('posts', {
		url: '/posts', templateUrl: 'posts.html', controller: 'Posts'
	}).state('new-post', {
		url: '/post', templateUrl: 'post.html',
		controller: ($scope) => $scope.post = {}
	}).state('edit-post', {
		url: '/post/:id', templateUrl: 'post.html',
		controller: ($scope, $stateParams) =>
			$scope.post = _.find($scope.posts, 'id', $stateParams.id)
	})
	$urlRouterProvider.otherwise('/posts')
})

.controller('Main', function($scope, $firebaseArray) {
	$scope.items = $firebaseArray(new Firebase(config.posts))
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

.controller('Post', ($scope) => {
	const s = $scope
	console.log(s.post)
})