import { loginUser } from '../../store/reducer'
import { Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import ReeValidate from 'ree-validate'
import {Col} from "react-bootstrap";
import PropTypes from 'prop-types'
import _ from 'lodash'

// import components
import Form from './components/Form'

// initialize component
class Page extends Component {
	// set name of the component
	static displayName = 'LoginPage';

	// validate props
	static propTypes = {
		isAuthenticated: PropTypes.bool.isRequired,
		dispatch: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);

		this.validator = new ReeValidate.Validator({
			email: 'required|email',
			password: 'required|min:6'
		});

		// set the state of the app
		this.state = {
			credentials: {
				email: '',
				password: '',
				remember: false,
			},
			errors: this.validator.errors,
		};

		// bind component with event handlers
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// event to handle input change
	handleChange(name, value) {
		const { errors } = this.validator;

		this.setState({ credentials: { ...this.state.credentials, [name]: value } });

		errors.remove(name);

		this.validator.validate(name, value)
			.then(() => {
				this.setState({ errors })
			})
	}

	// event to handle form submit
	handleSubmit(e) {
		e.preventDefault();
		const { credentials } = this.state;
		const { errors } = this.validator;

		this.validator.validateAll(credentials)
			.then((success) => {
				if (success) {
          console.log("Validated: " + credentials)
          this.submit(credentials)
          // loginUser(username, password);
				} else {
					this.setState({ errors })
				}
			})
	}

	submit(credentials) {
		this.props.dispatch(loginUser(credentials))
			.catch(({ error, statusCode }) => {
				const { errors } = this.validator;
        console.log(statusCode)
        console.log(errors)
				if (statusCode === 422) {
					_.forOwn(error, (message, field) => {
						errors.add(field, message);
					});
				} else if (statusCode === 401) {
					errors.add('password', error);
				}

				this.setState({ errors })
			})
	}

	render() {

		// If we are already authenticated go to home page
		if (this.props.isAuthenticated) {
			return <Redirect to="/" />
		}

		const props = {
			email: this.state.credentials.email,
			password: this.state.credentials.password,
			remember: this.state.credentials.remember,
			errors: this.state.errors,
			handleChange: this.handleChange,
			handleSubmit: this.handleSubmit,
		};

		return (
			<Col lg={6} md={8} sm={12}>
				<Form {...props}/>
			</Col>
		)
	}
}

export default Page