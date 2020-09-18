import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// import services actions
import { fetchUser, isAuthenticated } from '../modules/auth/service'

// import components
import PrivateLayout from './Private'
import PublicLayout from './Public'

function Layout(props) {

	const { user, children, dispatch } = props

	// useEffect(() => {
	// 	if (isAuthenticated && !user.id) {
	// 		dispatch(fetchUser())
	// 	}
	// }, [isAuthenticated, user, dispatch])


	const useInternalLayout = props.location.pathname.includes("internt");
	if (isAuthenticated() && useInternalLayout) {
		return <PrivateLayout {...props}>{children}</PrivateLayout>
	}
	return <PublicLayout {...props}>{children}</PublicLayout>
}

Layout.displayName = 'Layout';

Layout.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object,
}

const mapStateToProps = state => {
	return {
		isAuthenticated: isAuthenticated(),
		user: state.user,
	}
}

export default withRouter(connect(mapStateToProps)(Layout))