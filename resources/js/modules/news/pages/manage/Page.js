// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { newsArticleListRequest, newsArticleUpdateRequest, newsArticleRemoveRequest } from '../../service'

// import components
import EntryRow from './components/EntryRow'
import Pagination from './components/Pagination'
import { Link } from 'react-router-dom'
import {Container, Col} from "react-bootstrap";

class Page extends Component {
	static displayName = 'NewsPage';
	static propTypes = {
		meta: PropTypes.object.isRequired,
		entries: PropTypes.array.isRequired,
		dispatch: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { dispatch } = this.props;

		dispatch(newsArticleListRequest({}))
	}

	pageChange = (pageNumber) => {
		this.props.dispatch(newsArticleListRequest({ pageNumber }))
	};

	togglePublish = (id) => {
		const entry = this.props.entries.find(entry => (entry.id === id));

		if (!entry)
			return;

		entry.published = !entry.published;
		if (entry.published) {
			entry.publishedAt = moment()
		} else {
			entry.publishedAt = null
		}

		this.props.dispatch(newsArticleUpdateRequest(entry.toJson()))
	};

	handleRemove = (id) => {
		this.props.dispatch(newsArticleRemoveRequest(id))
	};

	renderNews() {
		return this.props.entries.map((entry, index) => {
			return <EntryRow key={index}
							   entry={entry}
							   index={index}
							   togglePublish={this.togglePublish}
							   handleRemove={this.handleRemove}/>
		})
	}

	render() {
		return (
			<Col lg={8} md={8} sm={12}>
				<h3>Nyheder</h3>
				<table className="table table-responsive table-striped">
					<thead className="thead-inverse">
					<tr>
						<th>#</th>
						<th>Titel</th>
						<th>Beskrivelse</th>
						<th>Oprettet</th>
						<th>Ændret</th>
						<th>Udgivet</th>
						<th><Link to='/internt/nyheder/opret' className="btn btn-success">Opret</Link></th>
					</tr>
					</thead>
					<tbody>
					{ this.renderNews() }
					</tbody>
				</table>
				<Pagination meta={this.props.meta} onChange={this.pageChange}/>
			</Col>)
	}
}

export default Page