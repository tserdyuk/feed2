import _ from 'lodash'
import store from 'store'
import { item as ic, api } from '../config'

export default function($scope, $stateParams, $http, $sce) {
	const { id } = $stateParams
	$scope.item = $scope.model.index[id]
	$scope.select = _.contains($scope.model.selected, id)
	$scope.change = value => {
		if (value) {
			$scope.model.selected.unshift(id)
		} else {
			_.remove($scope.model.selected, id)
		}
		store.set('selected', $scope.model.selected)
	}
	$scope.loading = true
	$http.get(api.item + id).then(({ data }) => {
		$scope.loading = false
		$scope.content = $sce.trustAsHtml(data[ic.content]
			.replace(/<i>/ig, '<i style="font-style: italic;"'))
		if (!_.contains($scope.model.read, id)) {
			$scope.model.read.unshift(id)
			store.set('read', $scope.model.read)
		}
	})
}
