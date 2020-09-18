import { connect } from "react-redux"
import { isAuthenticated } from './../../../auth/service'


// import components
import Page from "./Page"

const mapStateToProps = state => {
	return {
		isAuthenticated: isAuthenticated(),
	}
}

export default connect(mapStateToProps)(Page)