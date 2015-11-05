angular.module('starter.controllers', [])

.controller('Main', function($scope, $window, $http) {
  $scope.config = config
  $scope.model = {
    read: JSON.parse($window.localStorage.read || '[]'),
    selected: JSON.parse($window.localStorage.selected || '[]')
  }
  $scope.filterAll = function(items) {
    var read = {}
    $scope.model.read.forEach(function(item) {
      read[item.id] = true
    })
    var time = new Date().getTime()
    $scope.model.all = items.filter(function(item) {
      return config.item.getDate(item).getTime() < time
    }).filter(function(item) {
      return !read[item.id]
    })
  }
  if ($window.localStorage.all) {
    $scope.filterAll(JSON.parse($window.localStorage.all))
  } else {
    $http.get(config.api.all).then(function(response) {
      $scope.filterAll(response.data.items)
      $window.localStorage.all = JSON.stringify(response.data.items)
    })
  }
})

.controller('DashCtrl', function($scope) {
})

.controller('ChatsCtrl', function($scope, $http) {
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $http, $window, $sce) {
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
    $scope.content = $sce.trustAsHtml(response.data[config.item.content]
      .replace(/<i>/ig, '<i style="font-style: italic;"'))
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
