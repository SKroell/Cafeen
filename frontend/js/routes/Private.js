import React, {Suspense} from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuthenticated } from './../modules/auth/service'

const PrivateRoute = ({ component: Component, ...rest }) => {
	return <Route {...rest} render={props => {
		return <Suspense fallback={<div>Loading...</div>}>
			{
				isAuthenticated()
					? <Component {...props}/>
					: <Redirect to={{
						pathname: '/login',
						state: { from: props.location },
					}}/>
			}
		</Suspense>
	}}/>
}

PrivateRoute.propTypes = {
	component: PropTypes.object.isRequired,
	location: PropTypes.object,
	isAuthenticated: PropTypes.bool.isRequired,
}

// Retrieve data from store as props
function mapStateToProps(store) {
	return {
		isAuthenticated: isAuthenticated(),
	}
}

export default connect(mapStateToProps)(PrivateRoute)