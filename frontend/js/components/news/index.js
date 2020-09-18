import { connect } from 'react-redux'
import Entry from '../../modules/news/Entry'

// components
import Entries from './components/Entries'

const mapStateToProps = state => {
	const {data, ...meta} = state.entries

	return {
		entries: data?.map((entry) => new Entry(entry)),
		meta: Object.assign({}, meta)
	}
};

export default connect(mapStateToProps)(Entries)