import indexBy from 'lodash/collection/indexBy'
import config from './config'

export default function($scope, $window, $http) {
	$scope.config = config
	$scope.model = {
		read: JSON.parse($window.localStorage.read || '[]'),
		selected: JSON.parse($window.localStorage.selected || '[]')
	}
	$scope.readMap = indexBy($scope.model.read, config.item.id)
	$scope.isNew = item => !(item[config.item.id] in $scope.readMap)
	$scope.isRecent = item => config.item.getDate(item).getTime() < new Date().getTime()
	if ($window.localStorage.all) {
		$scope.model.all = JSON.parse($window.localStorage.all)
	} else {
		$http.get(config.api.all).then(function(response) {
			$scope.model.all = response.data.items
			$window.localStorage.all = JSON.stringify(response.data.items)
		})
	}
}
