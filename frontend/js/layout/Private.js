import React from 'react'
import PropTypes from 'prop-types'

// import components
import Navigation from '../components/navigation/index'
import Footer from '../components/footer/index'
import {Col, Container, Row, Nav, Card} from "react-bootstrap";

const containerStyle = {
	paddingTop: '7.5rem',
};

const displayName = 'Internt';
const propTypes = {
	children: PropTypes.node.isRequired,
};

function PrivateLayout({ children }) {
	return <div style={containerStyle}>
		<Navigation/>
		<main style={{ minHeight: '100vh'}}>
		<Container>
			<Row>
				<Col lg={3} md={4} sm={12}>
					{/*<h3 style={{textAlign:"center"}}>SIDEBAR</h3>*/}
					<Card>
						<Card.Body>
							<Card.Title>SIDEBAR</Card.Title>
							<Nav defaultActiveKey="/home" className="flex-column">
								<Nav.Link href="/internt">Start</Nav.Link>
								<Nav.Link href="/internt/wiki">Wiki</Nav.Link>
								<Nav.Link href="/internt/nyheder">Nyheder</Nav.Link>
								<Nav.Link href="/internt/optaelling">Optælling</Nav.Link>
								<Nav.Link href="/internt/kontark">Konteringsark</Nav.Link>
								<Nav.Link href="/internt/bestomk">Bestyrelsesomkostninger</Nav.Link>
								<Nav.Link href="/internt/prisjust">Prisjustering</Nav.Link>
								<Nav.Link href="/internt/statistik">Statistik</Nav.Link>
							</Nav>
						</Card.Body>
					</Card>
				</Col>
			{ children }
			</Row>
		</Container>
		</main>
		<Footer/>
	</div>
}

PrivateLayout.dispatch = displayName;
PrivateLayout.propTypes = propTypes;

export default PrivateLayout