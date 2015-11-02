angular.module('starter.controllers', [])

.controller('Main', function($scope, $window, $http) {
  $scope.config = config
  if ($window.localStorage.all) {
    $scope.all = JSON.parse($window.localStorage.all)
  } else {
    $http.get(config.api.all).then(function(response) {
      $scope.all = response.data.items
      $window.localStorage.all = JSON.stringify($scope.all)
    })
  }
  $scope.read = JSON.parse($window.localStorage.read || '[]')
})

.controller('DashCtrl', function($scope) {
})

.controller('ChatsCtrl', function($scope, $http) {
  $http.get(config.api.all).then(function(response) {
    $scope.items = response.data.items
  })
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $http, $window) {
  $scope.title = $stateParams.title
  $http.get(config.api.item + $stateParams.id).then(function(response) {
    $scope.content = response.data.body
    if (!$scope.read.find(function(item) {
      return item.id == $stateParams.id
    })) {
      var item = {}
      item[config.item.title] = $stateParams.title
      item[config.item.id] = $stateParams.id
      $scope.read.unshift(item)
      $window.localStorage.read = JSON.stringify($scope.read)
    }
  })
})

.controller('AccountCtrl', function($scope) {
})
