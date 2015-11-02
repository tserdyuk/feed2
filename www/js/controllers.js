angular.module('starter.controllers', [])

.controller('Main', function($scope) {
  $scope.config = config
})

.controller('DashCtrl', function($scope, $http) {
  $http.get(config.api.all).then(function(response) {
    $scope.items = response.data.items
  })
})

.controller('ChatsCtrl', function($scope, $http) {
  $http.get(config.api.all).then(function(response) {
    $scope.items = response.data.items
  })
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $http) {
  $scope.title = $stateParams.title
  $http.get(config.api.item + $stateParams.id).then(function(response) {
    $scope.content = response.data.body
  })
})

.controller('AccountCtrl', function($scope, $http) {
  $http.get(config.api.all).then(function(response) {
    $scope.items = response.data.items
  })
})
