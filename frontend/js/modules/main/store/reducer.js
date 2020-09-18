import {
	PAGE_UPDATE,
	PAGE_GET,
} from './action-types'

const initialState = {
	currentPage: 0,
	data: [],
	path: '',
};

const reducer = (state = initialState, { type, payload = null }) => {
	switch(type) {
		case PAGE_UPDATE:
			return update(state, payload);
		case PAGE_GET:
			return get(state, payload);
		default:
			return state
	}
};


function update(state, payload) {
	const data = state.data.map(obj => {
		if (obj.id === payload.id) {
			return { ...obj, ...payload }
		}
		return obj
	});

	return Object.assign({}, state, { data })
}

function get(state, payload) {
	// state = Object.assign({}, payload);
	state = {...payload};
	return state
}

export default reducer