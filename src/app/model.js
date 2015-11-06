
export default function(config) {
	const ci = config.item
	return {
		Item(item) {
			item.getId = () => item[ci.id]
			item.getDate = () => ci.getDate(item)
			item.getTime = () => item.getDate().getTime()
			return item
		}
	}
}
