import _ from 'lodash'
import store from 'store'
import { api } from '../config'
import { Item } from '../model'

export default function($scope, $http) {
	function init(items) {
		items.forEach(Item)
		$scope.model = {
			items: items,
			posts: store.get('posts'),
			start: store.get('start'),
			index: _.indexBy(items, _.method('getId')),
			read: store.get('read') || [],
			selected: store.get('selected') || []
		}
	}
	if (store.get('start')) {
		init(store.get('items'))
	} else {
		$http.get(api.posts).then(({ data }) => {
			store.set('posts', data)
			store.set('start', new Date().getTime())
			$http.get(api.all).then(({ data: { items } }) => {
				store.set('items', items)
				init(items)
			})
		})
	}
}
