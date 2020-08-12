import React from 'react'
import PropTypes from 'prop-types'

// import components
import Navigation from '../components/navigation/index'
import Footer from '../components/footer/index'

const containerStyle = {
	paddingTop: '7.5rem',
}

const displayName = 'Public'
const propTypes = {
	children: PropTypes.node.isRequired,
}

function PublicLayout({ children }) {
	return <div style={containerStyle}>
		<Navigation/>
		<main style={{ minHeight: '100vh'}}>
			{ children }
		</main>
		<Footer/>
	</div>
}

PublicLayout.dispatch = displayName
PublicLayout.propTypes = propTypes

export default PublicLayout