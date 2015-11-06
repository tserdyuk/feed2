import _ from 'lodash'
import config from './config'
import { Item } from './model'

export default function($scope, $window, $http) {
	$scope.config = config
	$scope.model = {
		read: JSON.parse($window.localStorage.read || '[]'),
		selected: JSON.parse($window.localStorage.selected || '[]')
	}
	$scope.readMap = _.indexBy($scope.model.read, config.item.id)
	$scope.isNew = item => !(item.getId() in $scope.readMap)
	$scope.isRecent = item => item.getTime() < new Date().getTime()
	if ($window.localStorage.all) {
		$scope.model.all = JSON.parse($window.localStorage.all).map(Item)
	} else {
		$http.get(config.api.all).then(function(response) {
			$scope.model.all = response.data.items.map(Item)
			$window.localStorage.all = JSON.stringify(response.data.items)
		})
	}
}
