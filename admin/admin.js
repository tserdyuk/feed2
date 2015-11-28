import angular from 'angular'
import Firebase from 'firebase'
import _ from 'lodash'
import config from './config'

angular.module('feed-admin', [
	require('angularfire'),
	require('angular-sanitize'),
	require('angular-ui-router')
])

.config(($stateProvider, $urlRouterProvider) => {
	$stateProvider
	.state('posts', {
		url: '/posts', templateUrl: 'posts.html', controller: 'Posts'
	}).state('add-post', {
		url: '/post', templateUrl: 'post.html', controller: 'AddPost'
	}).state('edit-post', {
		url: '/post/:id', templateUrl: 'post.html', controller: 'EditPost'
	})
	$urlRouterProvider.otherwise('/posts')
})

.controller('Main', function($scope, $firebaseArray) {
	$scope.posts = $firebaseArray(new Firebase(config.posts))
})

.controller('Posts', ($scope) => {
	const s = $scope
	s.remove = s.posts.$remove
})

.controller('AddPost', ($scope) => {
	const s = $scope
	s.action = '$add'
	s.post = {}
})
.controller('EditPost', ($scope, $stateParams) => {
	const s = $scope
	s.action = '$save'
	s.post = _.find(s.posts, '$id', $stateParams.id)
})
.controller('Post', ($scope, $state) => {
	const s = $scope
	s.save = () => s.posts[s.action](s.post)
		.then(() => $state.go('posts'))
})
