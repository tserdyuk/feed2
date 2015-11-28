import _ from 'lodash'

export default function($scope) {
	const s = $scope
	s.posts = _.values(_.map(s.model.posts,
		(post, id) => { post.id = id; return post }))
	s.isRecent = item =>
		(s.model.start + item.delay * 1000 * 60) < new Date().getTime()
}
