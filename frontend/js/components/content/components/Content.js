import React from "react";
import ContentEditable from "react-contenteditable";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

class ContentComponent extends React.Component {
	static displayName = 'Content';
	static propTypes = {
		content: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {
			//
		}
	}

	/**
	 * Handle admin changes to page.
	 * TODO: API Call to save to DB
	 */
	handleChange = evt => {
		console.log(evt)
	};

	/**
	 * Render editable content page
	 */
	renderContent() {
		return(
			<React.Fragment>
				<Card>
					<Card.Body>
						<Card.Title>{ this.props.content.title }</Card.Title>
						<ContentEditable
							html={this.props.content.content} // innerHTML of the editable div
							disabled={!this.props.isAuthenticated} // use true to disable edition
							onBlur={(e)=>{console.log(e.currentTarget.innerHTML)}} // handle innerHTML change
							onChange={()=> null} // We handle changes in onBlur to avoid unnecessary calls.
						/>
					</Card.Body>
				</Card>
			</React.Fragment>
		);
	}

	render() {
		return (
			<React.Fragment>
				{this.props.content && this.renderContent()}
			</React.Fragment>
		);
	}
}

export default ContentComponent;
