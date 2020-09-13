import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import {connect} from "react-redux";

const PublicRoutes = ({ component: Component, isAuthenticated, ...rest }) => {
	return <Route {...rest} render={props => {
		return <Suspense fallback={<div>Loading...</div>}>
			<Component {...props}/>
		</Suspense>
	}}/>
};

PublicRoutes.propTypes = {
	component: PropTypes.object.isRequired,
	location: PropTypes.object,
	isAuthenticated: PropTypes.bool.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
	return {
		isAuthenticated: store.auth.isAuthenticated,
	}
}

export default connect(mapStateToProps)(PublicRoutes)