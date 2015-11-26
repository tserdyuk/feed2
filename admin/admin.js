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
	/*$scope.posts = [{
		id: '1',
		title: '1',
		delay: '1'
	}, {
		id: '2',
		title: '2',
		delay: '2'
	}]*/
})

.controller('Posts', ($scope) => {
	const s = $scope
	s.remove = (post) => {
	}
})

.controller('AddPost', ($scope) => {
	$scope.post = {}
})
.controller('EditPost',  ($scope, $stateParams) => {
	$scope.post = _.find($scope.posts, 'id', $stateParams.id)
})
.controller('Post', ($scope) => {
	const s = $scope
	console.log(s.post)
})
