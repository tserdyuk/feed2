import _ from 'lodash'
import { api } from './config'
import { Item } from './model'

export default function($scope, $window, $http) {
	function init(items) {
		$scope.model = {
			items: items.map(Item),
			read: JSON.parse($window.localStorage.read || '[]').map(Item),
			selected: JSON.parse($window.localStorage.selected || '[]').map(Item)
		}
		$scope.readMap = _.indexBy($scope.model.read, _.method('getId'))
	}
	if ($window.localStorage.items) {
		init(JSON.parse($window.localStorage.items))
	} else {
		$http.get(api.all).then(function(response) {
			$window.localStorage.items = JSON.stringify(response.data.items)
			init(response.data.items)
		})
	}
}
