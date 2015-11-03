angular.module('starter.controllers', [])

.controller('Main', function($scope, $window, $http) {
  $scope.config = config
  $scope.model = {}
  if ($window.localStorage.all) {
    $scope.model.all = JSON.parse($window.localStorage.all)
  } else {
    $http.get(config.api.all).then(function(response) {
      $scope.model.all = response.data.items
      $window.localStorage.all = JSON.stringify($scope.model.all)
    })
  }
  $scope.model.read = JSON.parse($window.localStorage.read || '[]')
  $scope.model.selected = JSON.parse($window.localStorage.selected || '[]')

  var read = {}
  $scope.model.read.forEach(function(item) {
    read[item.id] = true
  })
  var time = new Date().getTime()
  $scope.model.all = $scope.model.all.filter(function(item) {
    return config.item.getDate(item).getTime() < time
  }).filter(function(item) {
    return !read[item.id]
  })
})

.controller('DashCtrl', function($scope) {
})

.controller('ChatsCtrl', function($scope, $http) {
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $http, $window) {
  $scope.select = $scope.model.selected.filter(function(item) {
    return item.id == $stateParams.id
  }).length > 0
  $scope.change = function(value) {
    if (value) {
      var item = {}
      item[config.item.title] = $stateParams.title
      item[config.item.id] = $stateParams.id
      $scope.model.selected.unshift(item)
    } else {
      $scope.model.selected = $scope.model.selected.filter(function(item) {
        return item.id != $stateParams.id
      })
    }
    $window.localStorage.selected = JSON.stringify($scope.model.selected)
  }
  $scope.title = $stateParams.title
  $scope.loading = true
  $http.get(config.api.item + $stateParams.id).then(function(response) {
    $scope.content = response.data.body
    $scope.loading = false
    if ($scope.model.read.filter(function(item) {
      return item.id == $stateParams.id
    }).length == 0) {
      var item = {}
      item[config.item.title] = $stateParams.title
      item[config.item.id] = $stateParams.id
      $scope.model.read.unshift(item)
      $window.localStorage.read = JSON.stringify($scope.model.read)
      $scope.model.all = $scope.model.all.filter(function(item) {
        return item.id != $stateParams.id
      })
    }
  })
})

.controller('AccountCtrl', function($scope) {
})
