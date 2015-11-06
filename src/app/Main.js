import _ from 'lodash'
import { api } from './config'
import { Item } from './model'

export default function($scope, $window, $http) {
	$scope.model = {
		read: JSON.parse($window.localStorage.read || '[]').map(Item),
		selected: JSON.parse($window.localStorage.selected || '[]').map(Item)
	}
	$scope.readMap = _.indexBy($scope.model.read, _.method('getId'))
	$scope.isNew = item => !(item.getId() in $scope.readMap)
	$scope.isRecent = item => item.getTime() < new Date().getTime()
	if ($window.localStorage.items) {
		$scope.model.items = JSON.parse($window.localStorage.items).map(Item)
	} else {
		$http.get(api.all).then(function(response) {
			$scope.model.items = response.data.items.map(Item)
			$window.localStorage.items = JSON.stringify(response.data.items)
		})
	}
}
