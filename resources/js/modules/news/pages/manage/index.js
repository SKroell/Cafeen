import { connect } from 'react-redux'
import Entry from '../../Entry'

// import components
import Page from './Page'

const mapStateToProps = state => {
	const {data, ...meta} = state.entries

	return {
		entries: data.map((entry) => new Entry(entry)),
		meta: Object.assign({}, meta)
	}
}

export default connect(mapStateToProps)(Page)