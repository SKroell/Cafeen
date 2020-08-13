import moment from 'moment'
import Model from '../../utils/Model'
import User from '../user/User'

class Content extends Model {
	constructor(props) {
		super(props);

		this.initialize(props)
	}

	initialize(props) {
		super.initialize(props);

		this.slug = props.slug || '';
		this.title = props.title || '';
		this.content = props.content || '';
		this.published = props.published || false;
		this.lastEditAt = props.lastEditAt ? moment(props.lastEditAt) : null;

		// relate user model
		this.user = props.user ? new User(props.user) : null
	}
}

export default Content