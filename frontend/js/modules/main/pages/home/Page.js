import React, { useLayoutEffect } from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'


// import components
import NewsArticles from "../../../../components/news/index"

// import services
import { newsArticleListRequest } from '../../../news/service'
import {Button, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default function Page({ dispatch, isAuthenticated }) {
	useLayoutEffect(() => {
		dispatch(newsArticleListRequest({ url: '/news/published' }))
	}, [dispatch]);

	return (
		<React.Fragment>
			{/*News*/}
			<Col lg={6} md={8} sm={12}>
				<h3 style={{textAlign:"center"}}>
					NYHEDER
					{
						isAuthenticated
							? <Button variant="link" as={Link} to="/internt/nyheder"><FontAwesomeIcon icon={faPlus} /></Button>
							: ""
					}
				</h3>
				<NewsArticles/>
			</Col>
		</React.Fragment>
	);
}

Page.displayName = 'Forside'
Page.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};