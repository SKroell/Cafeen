import React from 'react'
import PropTypes from 'prop-types'

// import components
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card";

const displayName = 'EntryComponent';
const propTypes = {
	index: PropTypes.number.isRequired,
	entry: PropTypes.object.isRequired,
};

const renderPublishedAt = (entry) => {
	return entry.publishedAt && `${entry.publishedAt.format('D MMMM, YYYY')}`
};

function render ({ entry }) {
	return(
		<React.Fragment>
			<Card>
				<Card.Body>
					<Card.Title>{entry.title}</Card.Title>
					<Card.Subtitle className="text-muted">{renderPublishedAt(entry)}</Card.Subtitle>
					<Card.Text>{ entry.content }</Card.Text>
				</Card.Body>
			</Card>
		</React.Fragment>
	);
}

render.displayName = displayName;
render.propTypes = propTypes;

export default render