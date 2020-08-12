import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Entry from './Entry'

class Entries extends Component {
	static displayName = 'Nyheder'
	static propTypes = {
		entries: PropTypes.array.isRequired,
		dispatch: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props)

		this.state = {
			//
		}
	}

	renderEntries() {
		return this.props.entries.map((entry, index) => {
			return <Entry key={`entry-${index}`}
							index={index}
							entry={entry}/>
		})
	}

	render() {
		return (<section id="components-entries">
			<div className="container">
				<div className="row">
					{ this.props.entries && this.renderEntries() }
				</div>
			</div>
		</section>)
	}
}

export default Entries