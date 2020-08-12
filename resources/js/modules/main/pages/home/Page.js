import React, { useLayoutEffect } from "react"
import PropTypes from "prop-types"

// import components
import NewsArticles from "../../../../components/news/index"

// import services
import { newsArticleListRequest } from '../../../news/service'
import {Col, Container, Row} from "react-bootstrap";

export default function Page({ dispatch }) {
	useLayoutEffect(() => {
		dispatch(newsArticleListRequest({ url: '/news/published' }))
	}, []);

	return (
		<React.Fragment>
			<Container>
				<Row>
					{/* Calendar */}
					<Col lg={3} md={4} sm={12}>
						<h3 style={{textAlign:"center"}}>KALENDAR</h3>
					</Col>

					{/*News*/}
					<Col lg={6} md={8} sm={12}>
						<h3 style={{textAlign:"center"}}>NYHEDER</h3>
						<NewsArticles/>
					</Col>

					{/* Social */}
					<Col lg={3} sm={12}>
						<iframe
							src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCafeen1993%2F&tabs=timeline&width=250&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1093442537387487"
							height="500" width="250" style={{border:"none",overflow:"hidden",display:"block",margin:"0 auto"}} scrolling="no" frameBorder="0"
							allow="encrypted-media">
						</iframe>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}

Page.displayName = 'Forside'
Page.propTypes = {
	dispatch: PropTypes.func.isRequired,
};