import config from './config'

export default function($scope, $window, $http) {
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
}
