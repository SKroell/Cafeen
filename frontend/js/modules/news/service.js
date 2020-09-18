import Http from '../../utils/Http'
import * as newsActions from './store/actions'
import Transformer from '../../utils/Transformer'

// eslint-disable-next-line no-unused-vars
function transformRequest(parms) {
	return Transformer.send(parms)
}

function transformResponse(params) {
	return Transformer.fetch(params)
}

export function newsArticleListRequest(params) {
	let { pageNumber = 1, url = '/news' } = params

	return dispatch => {
		if (pageNumber > 1) {
			url = url + `?page=${pageNumber}`
		}

		Http.get(url)
			.then((res) => {
				dispatch(newsActions.list(transformResponse(res.data)))
				console.log(transformResponse(res.data));
			})
			.catch((err) => {
				// TODO: handle err
				console.error(err.response)
			})
	}
}

// eslint-disable-next-line no-unused-vars
export function newsArticleRemoveRequest(params) {
	//TODO
}

// eslint-disable-next-line no-unused-vars
export function newsArticleUpdateRequest(params) {
	//TODO
}