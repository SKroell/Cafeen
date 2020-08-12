import React from 'react'
import PropTypes from 'prop-types'

import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";

// define component name
const displayName = 'Public';

// validate properties
const propTypes = {
	showNavigation: PropTypes.bool.isRequired,
};

const PublicHeader = () => (
	<Navbar.Collapse>
		<Nav className="mr-auto">
			<Nav.Link href="/">Forside</Nav.Link>
			<Nav.Link href="/bliv-bartender">Bliv Bartender</Nav.Link>
			<Nav.Link href="/frebar">Frebar</Nav.Link>
			<Nav.Link href="/webcam">Webcam</Nav.Link>
			<Nav.Link href="/om-cafeen">Om Caféen?</Nav.Link>
			<Nav.Link href="/bestyrelsen">Bestyrelsen</Nav.Link>
			<Nav.Link href="/kontakt">Kontakt</Nav.Link>
		</Nav>
	</Navbar.Collapse>);

// bind properties
PublicHeader.displayName = displayName;
PublicHeader.propTypes = propTypes;

// export component
export default PublicHeader