import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import components
import { Dropdown, Nav, Navbar } from 'react-bootstrap'

// initiate Component
export default function PrivateHeader({user, logout}) {
	return (
		<Navbar.Collapse className="navbar-collapse">
			<Nav className="navbar-nav mr-auto">
				<Nav.Link href="/">Forside</Nav.Link>
				<Nav.Link href="/bliv-bartender">Bliv Bartender</Nav.Link>
				<Nav.Link href="/frebar">Frebar</Nav.Link>
				<Nav.Link href="/webcam">Webcam</Nav.Link>
				<Nav.Link href="/om-cafeen">Om Caféen?</Nav.Link>
				<Nav.Link href="/bestyrelsen">Bestyrelsen</Nav.Link>
				<Nav.Link href="/kontakt">Kontakt</Nav.Link>
			</Nav>

			<Nav className="navbar-nav">
				<Dropdown>
					<Dropdown.Toggle className="caret">
						internt
					</Dropdown.Toggle>
					<Dropdown.Menu className="dropdown-menu-right">
						<Link className='dropdown-item' to={ `/users/${ user.id }/edit` }>
							<span className="fa fa-user-o" title="logout" aria-hidden="true"/> {user.name}
						</Link>
						<Dropdown.Item onClick={ e => logout(e) }>
							<span className="fa fa-sign-out" title="logout" aria-hidden="true"/> Logout
						</Dropdown.Item>
						<Dropdown.Item className="divider"/>
						<Dropdown.Item as={Link} to="/internt">Start</Dropdown.Item>
						<Dropdown.Item as={Link} to="/internt/wiki">Wiki</Dropdown.Item>
						<Dropdown.Item as={Link} to="/internt/nyheder">Nyheder</Dropdown.Item>
						<Dropdown.Item as={Link} to="/internt/optaelling">Optælling</Dropdown.Item>
						<Dropdown.Item as={Link} to="/internt/konteringsark">Konteringsark</Dropdown.Item>
						<Dropdown.Item as={Link} to="/internt/bestomk">Bestyrelsesomkostninger</Dropdown.Item>
						<Dropdown.Item as={Link} to="/internt/priser">Prisjustering</Dropdown.Item>
						<Dropdown.Item as={Link} to="/internt/stat">Statistik</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Nav>
		</Navbar.Collapse>
	);
}

// bind properties
PrivateHeader.displayName = 'PrivateHeader'
PrivateHeader.propTypes = {
	user: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired,
}