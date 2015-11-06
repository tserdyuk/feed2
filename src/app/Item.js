import config from './config'

export default function($scope, $stateParams, $http, $window, $sce) {
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
			$scope.readMap[item[config.item.id]] = item
			$window.localStorage.read = JSON.stringify($scope.model.read)
		}
	})
}
