import _ from 'lodash'

export default function($scope) {
	$scope.isNew = item => !_.contains($scope.model.read, item.getId())
	$scope.isRecent = item => item.getTime() < new Date().getTime()
}
