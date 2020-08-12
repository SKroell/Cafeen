import { connect } from 'react-redux'
import Entry from '../../modules/news/entry'

// components
import Entries from './components/Entries'

const mapStateToProps = state => {
	const {data, ...meta} = state.entries

	return {
		entries: data.map((article) => new Entry(article)),
		meta: Object.assign({}, meta)
	}
};

export default connect(mapStateToProps)(Entries)