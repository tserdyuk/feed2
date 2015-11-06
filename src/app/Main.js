import _ from 'lodash'
import { api } from './config'
import { Item } from './model'

export default function($scope, $window, $http) {
	function init(items) {
		items.forEach(Item)
		$scope.model = {
			items: items,
			index: _.indexBy(items, _.method('getId')),
			read: JSON.parse($window.localStorage.read || '[]'),
			selected: JSON.parse($window.localStorage.selected || '[]')
		}
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
