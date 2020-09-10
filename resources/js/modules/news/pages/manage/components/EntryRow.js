import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

const displayName = 'EntryRow';
const propTypes = {
	index: PropTypes.number.isRequired,
	entry: PropTypes.object.isRequired,
	togglePublish: PropTypes.func.isRequired,
	handleRemove: PropTypes.func.isRequired,
};

const EntryRow = ({ index, entry, togglePublish, handleRemove }) => {
	return (<tr key={index}>
		<th scope="row">{index+1}</th>
		<td>{entry.title}</td>
		<td>{entry.description}</td>
		<td>{entry.createdAt && entry.createdAt.format('MMMM, DD YYYY')}</td>
		<td>{entry.updatedAt && entry.updatedAt.format('MMMM, DD YYYY')}</td>
		<td>{entry.publishedAt && entry.publishedAt.format('MMMM, DD YYYY')}</td>
		<td>
			<div className="btn-group" role="group" aria-label="Actions">
				{
					entry.published
						? <button className="btn btn-warning" onClick={() => togglePublish(entry.id)}>Afpublicer</button>
						: <button className="btn btn-success" onClick={() => togglePublish(entry.id)}>Publicer</button>
				}
				<Link className="btn btn-primary" to={`nyheder/${entry.id}/edit`}><FontAwesomeIcon icon={faEdit}/></Link>
				<button className="btn btn-danger" onClick={() => handleRemove(entry.id)}><FontAwesomeIcon icon={faTrash}/></button>
			</div>
		</td>
	</tr>)
};

EntryRow.displayName = displayName;
EntryRow.propTypes = propTypes;

export default EntryRow