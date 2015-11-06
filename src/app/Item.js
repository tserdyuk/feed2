import _ from 'lodash'
import { item as ic, api } from './config'

export default function($scope, $stateParams, $http, $window, $sce) {
	$scope.select = _.find($scope.model.selected, ic.id, $stateParams.id) != null
	$scope.change = function(value) {
		if (value) {
			var item = {}
			item[ic.title] = $stateParams.title
			item[ic.id] = $stateParams.id
			$scope.model.selected.unshift(item)
		} else {
			$scope.model.selected = $scope.model.selected.filter(function(item) {
				return item.id != $stateParams.id
			})
		}
		$window.localStorage.selected = JSON.stringify($scope.model.selected)
	}
	$scope.title = $stateParams.title
	$scope.loading = true
	$http.get(api.item + $stateParams.id).then(function(response) {
		$scope.content = $sce.trustAsHtml(response.data[ic.content]
			.replace(/<i>/ig, '<i style="font-style: italic;"'))
		$scope.loading = false
		if (!$scope.readMap[$stateParams.id]) {
			var item = {}
			item[ic.title] = $stateParams.title
			item[ic.id] = $stateParams.id
			$scope.model.read.unshift(item)
			$scope.readMap[item[ic.id]] = item
			$window.localStorage.read = JSON.stringify($scope.model.read)
		}
	})
}
