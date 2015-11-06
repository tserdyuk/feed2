import _ from 'lodash'
import { item as ic, api } from './config'

export default function($scope, $stateParams, $http, $window, $sce) {
	const { id } = $stateParams
	$scope.item = $scope.model.index[id]
	$scope.select = _.contains($scope.model.selected, id)
	$scope.change = function(value) {
		if (value) {
			$scope.model.selected.unshift(id)
		} else {
			_.remove($scope.model.selected, id)
		}
		$window.localStorage.selected = JSON.stringify($scope.model.selected)
	}
	$scope.loading = true
	$http.get(api.item + id).then(function(response) {
		$scope.content = $sce.trustAsHtml(response.data[ic.content]
			.replace(/<i>/ig, '<i style="font-style: italic;"'))
		$scope.loading = false
		if (!_.contains($scope.model.read, id)) {
			$scope.model.read.unshift(id)
			$window.localStorage.read = JSON.stringify($scope.model.read)
		}
	})
}
