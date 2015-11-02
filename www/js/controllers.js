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

.controller('ChatDetailCtrl', function($scope, $stateParams, $http, $window) {
  $scope.title = $stateParams.title
  $http.get(config.api.item + $stateParams.id).then(function(response) {
    $scope.content = response.data.body
    var read = JSON.parse($window.localStorage.read || '[]')
    if (!read.find(function(item) { return item.id == $stateParams.id })) {
      var item = {}
      item[config.item.title] = $stateParams.title
      item[config.item.id] = $stateParams.id
      read.unshift(item)
      $window.localStorage.read = JSON.stringify(read)
    }
  })
})

.controller('AccountCtrl', function($scope, $window) {
  function update() {
    $scope.items = JSON.parse($window.localStorage.read || '[]')
  }
  update()
  $scope.$on('$ionicView.enter', update)
})
