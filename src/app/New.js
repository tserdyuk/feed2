
export default function($scope) {
	$scope.isNew = item => !(item.getId() in $scope.readMap)
	$scope.isRecent = item => item.getTime() < new Date().getTime()
}
