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
	s.remove = post => s.posts.$remove(post)
})

.controller('AddPost', ($scope) => {
	const s = $scope
	s.post = {}
	s.save = () => s.posts.$add(s.post)
})
.controller('EditPost',  ($scope, $stateParams) => {
	const s = $scope
	s.post = _.find(s.posts, '$id', $stateParams.id)
	s.save = () => s.posts.$save(s.post)
})
.controller('Post', ($scope) => {
	const s = $scope
	console.log(s.post)
})
