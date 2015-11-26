
angular.module('feed-admin')

.controller('Main', function($scope) {
})

.controller('Posts', ($scope) => {
	const s = $scope
	s.items = [{
		title: '1',
		delay: '1'
	}, {
		title: '2',
		delay: '2'
	}]
	s.add = () => {
	}
	s.edit = (post) => {
	}
	s.remove = (post) => {
	}
})
