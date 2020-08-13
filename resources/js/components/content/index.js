import { connect } from 'react-redux'
import Content from '../../modules/main/content'
import ContentComponent from './components/content'

const mapStateToProps = state => {
	const {pages, ...meta} = state;
	return {
		content: new Content(pages),
		meta: Object.assign({}, meta)
	}
};

export default connect(mapStateToProps)(ContentComponent)