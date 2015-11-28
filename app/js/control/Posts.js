import _ from 'lodash'

export default function($scope) {
	const s = $scope
	s._ = _
	s.setId = (item, id) => { item.id = id; return item }
	s.isRecent = item =>
		(s.model.start + item.delay * 1000 * 60) < new Date().getTime()
}
