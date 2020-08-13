import React, { useEffect } from "react"
import PropTypes from "prop-types"

// import components
import Content from "../../../../components/content/index"

// import services
import { infoPageRequest } from '../../../main/service'
import {Col} from "react-bootstrap";

export default function Page({ dispatch }) {
	useEffect(() => {
		dispatch(infoPageRequest(window.location.pathname))
	}, []);

	return (
		<React.Fragment>
			{/*News*/}
			<Col lg={6} md={8} sm={12}>
				<Content/>
			</Col>
		</React.Fragment>
	);
}

Page.displayName = 'InfoPage'
Page.propTypes = {
	dispatch: PropTypes.func.isRequired,
};