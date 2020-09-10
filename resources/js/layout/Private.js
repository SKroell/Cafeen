import React from 'react'
import PropTypes from 'prop-types'

// import components
import Navigation from '../components/navigation/index'
import Footer from '../components/footer/index'

const containerStyle = {
	paddingTop: '7rem',
};

const displayName = 'Internt';
const propTypes = {
	children: PropTypes.node.isRequired,
};

function PrivateLayout({ children }) {
	return <div style={containerStyle}>
		<Navigation/>
		<main style={{ minHeight: '100vh'}}>
			{ children }
		</main>
		<Footer/>
	</div>
}

PrivateLayout.dispatch = displayName;
PrivateLayout.propTypes = propTypes;

export default PrivateLayout