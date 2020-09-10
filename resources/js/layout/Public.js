import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// import components
import Navigation from '../components/navigation/index'
import Footer from '../components/footer/index'
import {Col, Container, Row} from "react-bootstrap";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const containerStyle = {
	paddingTop: '7.5rem',
};

const displayName = 'Public';
const propTypes = {
	children: PropTypes.node.isRequired,
};

function PublicLayout({ children, isAuthenticated }) {
	return <div style={containerStyle}>
		<Navigation/>
		<main style={{ minHeight: '100vh'}}>
		<Container>
			<Row>
				{/* Calendar */}
				<Col lg={3} md={4} sm={12}>
					<h3 style={{textAlign:"center"}}>KALENDER
					{
						isAuthenticated
							? <Button variant="link"><FontAwesomeIcon icon={faPlus} /></Button>
							: ""
					}
					</h3>
				</Col>

				{/* Content */}
				{ children }

				{/* Social */}
				<Col lg={3} sm={12}>
					<iframe
						src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCafeen1993%2F&tabs=timeline&width=250&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1093442537387487"
						height="500" width="250" style={{border:"none",overflow:"hidden",display:"block",margin:"0 auto"}} scrolling="no" frameBorder="0"
						allow="encrypted-media">
					</iframe>
				</Col>
			</Row>
		</Container>
		</main>
		<Footer/>
	</div>
}

PublicLayout.dispatch = displayName;
PublicLayout.propTypes = propTypes;

export default PublicLayout