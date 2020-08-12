import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import components
import { Dropdown, Nav } from 'react-bootstrap'

// initiate Component
export default function PrivateHeader({user, showDropdown, toggleDropdown, logout}) {
	return (
		<Navbar.Collapse className="navbar-collapse">
			<Nav className="navbar-nav mr-auto">
				<Nav.Link to="/internt">Start</Nav.Link>
				<Nav.Link to="/internt/wiki">Wiki</Nav.Link>
				<Nav.Link to="/internt/nyheder">Nyheder</Nav.Link>
				<Nav.Link to="/internt/optaelling">Optælling</Nav.Link>
				<Nav.Link to="/internt/konteringsark">Konteringsark</Nav.Link>
				<Nav.Link to="/internt/bestomk">Bestyrelsesomkostninger</Nav.Link>
				<Nav.Link to="/internt/priser">Prisjustering</Nav.Link>
				<Nav.Link to="/internt/stat">Statistik</Nav.Link>
			</Nav>

			<Nav className="navbar-nav">
				<Dropdown isOpen={ showDropdown } toggle={ toggleDropdown }>
					<Dropdown.Toggle nav caret>
						{ user.name }
					</Dropdown.Toggle>
					<Dropdown.Menu className="dropdown-menu-right">
						<Link className='dropdown-item' to={ `/users/${ user.id }/edit` }>
							<span className="fa fa-user-o" title="logout" aria-hidden="true"/> Profile
						</Link>
						<Dropdown.Item divider/>
						<Dropdown.Item onClick={ e => logout(e) }>
							<span className="fa fa-sign-out" title="logout" aria-hidden="true"/> Logout
						</Dropdown.Item>
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
	showNavigation: PropTypes.bool.isRequired,
	showDropdown: PropTypes.bool.isRequired,
	toggleDropdown: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
}