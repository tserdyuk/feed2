import indexBy from 'lodash/collection/indexBy'
import config from './config'

export default function($scope, $window, $http) {
	$scope.config = config
	$scope.model = {
		read: JSON.parse($window.localStorage.read || '[]'),
		selected: JSON.parse($window.localStorage.selected || '[]')
	}
	$scope.readMap = indexBy($scope.model.read, config.item.id)
	$scope.isNew = item => {
		return !(item[config.item.id] in $scope.readMap)
	}
	$scope.filterAll = function(items) {
		var time = new Date().getTime()
		$scope.model.all = items.filter(function(item) {
			return config.item.getDate(item).getTime() < time
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
