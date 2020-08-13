import React, { useLayoutEffect } from "react"
import PropTypes from "prop-types"

// import components
import NewsArticles from "../../../../components/news/index"

// import services
import { newsArticleListRequest } from '../../../news/service'
import {Col} from "react-bootstrap";

export default function Page({ dispatch }) {
	useLayoutEffect(() => {
		dispatch(newsArticleListRequest({ url: '/news/published' }))
	}, []);

	return (
		<React.Fragment>
			{/*News*/}
			<Col lg={6} md={8} sm={12}>
				<h3 style={{textAlign:"center"}}>NYHEDER</h3>
				<NewsArticles/>
			</Col>
		</React.Fragment>
	);
}

Page.displayName = 'Forside'
Page.propTypes = {
	dispatch: PropTypes.func.isRequired,
};