import { connect } from 'react-redux'
import Content from '../../modules/main/content'
import ContentComponent from './components/content'
import { isAuthenticated } from "../../modules/auth/service";


const mapStateToProps = state => {
	const {pages, ...meta} = state;
	return {
		content: new Content(pages),
		meta: Object.assign({}, meta),
		isAuthenticated: isAuthenticated(),
	}
};

export default connect(mapStateToProps)(ContentComponent)