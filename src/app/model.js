import config from './config'

const ci = config.item
function getId() { return this[ci.id] }
function getTitle() { return this[ci.title] }
function getDate() { return ci.getDate(this) }
function getTime() { return this.getDate().getTime() }

export default {
	Item(item) {
		item.getId = getId
		item.getTitle = getTitle
		item.getDate = getDate
		item.getTime = getTime
		return item
	}
}
