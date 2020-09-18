import React  from 'react'
import PropTypes from "prop-types"
import {Col, Nav, Card, Tab} from "react-bootstrap";
//import Pagination from "../../../news/pages/manage/components/Pagination";
import {Link} from "react-router-dom";

export default function Page() {
	return (
		<React.Fragment>
			<Col lg={8} md={8} sm={12}>
				<Tab.Container defaultActiveKey="optaelling">
				<Card>
					<Card.Header>
						<Nav variant="tabs">
							<Nav.Item><Nav.Link eventKey="optaelling">Optællings Ark</Nav.Link></Nav.Item>
							<Nav.Item><Nav.Link eventKey="udlejning">Udlejnings Ark</Nav.Link></Nav.Item>
							<Nav.Item><Nav.Link eventKey="aadh">ÅDH</Nav.Link></Nav.Item>
							<Nav.Item><Nav.Link eventKey="bestomkost">Bestyrelsesomkostning</Nav.Link></Nav.Item>
							<Nav.Item><Nav.Link eventKey="levering">Levering</Nav.Link></Nav.Item>
						</Nav>
					</Card.Header>
					<Card.Body>
						<Tab.Content>
							<Tab.Pane eventKey="optaelling">
								<Card.Title>Optællings Ark</Card.Title>
								<table className="table table-responsive table-striped">
									<thead className="thead-inverse">
									<tr>
										<th>#</th>
										<th>Dato</th>
										<th>Åbner - Lukker</th>
										<th>Oprettet</th>
										<th>Ændret</th>
										<th><Link to='/internt/nyheder/opret' className="btn btn-success">Opret</Link></th>
									</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
								{/*<Pagination meta={this.props.meta} onChange={() => {}}/>*/}
							</Tab.Pane>
							<Tab.Pane eventKey="udlejning">
								<Card.Title>Udlejning Ark</Card.Title>
								<table className="table table-responsive table-striped">
									<thead className="thead-inverse">
										<tr>
											<th>#</th>
											<th>Dato</th>
											<th>Ansvarlige</th>
											<th>Oprettet</th>
											<th>Ændret</th>
											<th><Link to='/internt/nyheder/opret' className="btn btn-success">Opret</Link></th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
								{/*<Pagination meta={this.props.meta} onChange={() => {}}/>*/}
							</Tab.Pane>
							<Tab.Pane eventKey="aadh">
								<Card.Title>ÅDH Ark</Card.Title>
								<table className="table table-responsive table-striped">
									<thead className="thead-inverse">
									<tr>
										<th>#</th>
										<th>Dato</th>
										<th>Ansvarlig</th>
										<th>U/I åbning?</th>
										<th>Oprettet</th>
										<th>Ændret</th>
										<th><Link to='/internt/nyheder/opret' className="btn btn-success">Opret</Link></th>
									</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
								{/*<Pagination meta={this.props.meta} onChange={() => {}}/>*/}
							</Tab.Pane>
							<Tab.Pane eventKey="bestomkost">
								<Card.Title>Bestyrelsesomkostninger</Card.Title>
								<table className="table table-responsive table-striped">
									<thead className="thead-inverse">
									<tr>
										<th>#</th>
										<th>Dato</th>
										<th>Ansvarlig</th>
										<th>Formål</th>
										<th>U/I Åbning?</th>
										<th>Oprettet</th>
										<th>Ændret</th>
										<th><Link to='/internt/nyheder/opret' className="btn btn-success">Opret</Link></th>
									</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
								{/*<Pagination meta={this.props.meta} onChange={() => {}}/>*/}
							</Tab.Pane>
							<Tab.Pane eventKey="levering">
								<Card.Title>Leveringer</Card.Title>
								<table className="table table-responsive table-striped">
									<thead className="thead-inverse">
									<tr>
										<th>#</th>
										<th>Dato</th>
										<th>Modtager</th>
										<th>Leverandør</th>
										<th>U/I åbning?</th>
										<th>Oprettet</th>
										<th>Ændret</th>
										<th><Link to='/internt/nyheder/opret' className="btn btn-success">Opret</Link></th>
									</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
								{/*<Pagination meta={this.props.meta} onChange={() => {}}/>*/}
							</Tab.Pane>
						</Tab.Content>
					</Card.Body>
				</Card>
				</Tab.Container>
			</Col>
		</React.Fragment>
	);
}

Page.displayName = 'Optælling';
Page.propTypes = {
	dispatch: PropTypes.func.isRequired,
};