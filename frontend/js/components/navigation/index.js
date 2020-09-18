import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout, isAuthenticated } from '../../modules/auth/service'

// import components
import { Navbar } from 'react-bootstrap';
import PrivateHeader from './PrivateHeader'
import PublicHeader from './PublicHeader'

class Navigation extends Component {
	static propTypes = {
		isAuthenticated: PropTypes.bool.isRequired,
		user: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		this.state = {
			showNavigation: false,
			showDropdown: false,
		}
	}

	toggleNavbar = () => {
		this.setState({
			showNavigation: !this.state.showNavigation,
		});
	};

	toggleDropdown = () => {
		this.setState({
			showDropdown: !this.state.showDropdown,
		})
	};

	logout = e => {
		e.preventDefault();

		this.props.dispatch(logout())
	};

	render() {
		return (
			<Navbar fixed="top" variant="light" expand="md" bg="light">
				<div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
				<Navbar.Brand to="/">
					<Navbar.Brand href="/">
						<img
							alt=""
							src="/media/logo.svg"
							width="80"
							height="80"
							className="d-inline-block align-top"
						/>{' '}
					</Navbar.Brand>
				</Navbar.Brand>
				<Navbar.Toggle className="d-lg-none" onClick={this.toggleNavbar} />
				{
					this.props.isAuthenticated
						? <PrivateHeader user={this.props.user}
										logout={this.logout} />
						: <PublicHeader showNavigation={this.state.showNavigation} />
				}
				</div>
			</Navbar>
		)
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: isAuthenticated(),
		user: state.user
	}
};

export default connect(mapStateToProps)(Navigation)