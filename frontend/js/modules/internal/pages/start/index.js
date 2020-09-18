import { connect } from 'react-redux'
import Page from './Page'
import { isAuthenticated } from './../../../auth/service'

const mapStateToProps = state => {
	return {
		isAuthenticated: isAuthenticated(),
	}
};

export default connect(mapStateToProps)(Page)