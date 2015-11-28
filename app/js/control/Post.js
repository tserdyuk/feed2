
export default function($scope, $stateParams, $sce) {
	const s = $scope
	const post = s.model.posts[$stateParams.id]
	s.content = $sce.trustAsHtml(post.content)
	s.title = post.title
}
