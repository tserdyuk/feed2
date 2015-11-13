import _ from 'lodash'
import store from 'store'
import { api } from '../config'
import { Item } from '../model'

export default function($scope, $http) {
	function init(items) {
		items.forEach(Item)
		$scope.model = {
			items: items,
			index: _.indexBy(items, _.method('getId')),
			read: store.get('read') || [],
			selected: store.get('selected') || []
		}
	}
	const items = store.get('items')
	if (items) {
		init(items)
	} else {
		$http.get(api.all).then(({ data: { items } }) => {
			store.set('items', items)
			init(items)
		})
	}
}
