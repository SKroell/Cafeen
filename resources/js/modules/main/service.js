import Http from '../../utils/Http'
import * as contentActions from './store/actions'
import Transformer from '../../utils/Transformer'

function transformRequest(params) {
	return Transformer.send(params)
}

function transformResponse(params) {
	return Transformer.fetch(params)
}

export function infoPageRequest(slug) {
	return dispatch => {
		Http.get(`infopage${slug}`)
			.then((res) => {
				dispatch(contentActions.get(transformResponse(res.data)));
				console.log(transformResponse(res.data));
			})
			.catch((err) => {
				// TODO: handle err
				console.error(err.response)
			})
	}
}

export function pageUpdateRequest(params) {
	return dispatch => (
		new Promise((resolve, reject) => {
			Http.patch(`infopage/${params.id}`, transformRequest(params))
				.then(res => {
					dispatch(contentActions.update(transformResponse(res.data)));
					return resolve()
				})
				.catch((err) => {
					const statusCode = err.response.status;
					const data = {
						error: null,
						statusCode,
					};

					if (statusCode === 422) {
						const resetErrors = {
							errors: err.response.data,
							replace: false,
							searchStr: '',
							replaceStr: '',
						};
						data.error = Transformer.resetValidationFields(resetErrors);
					} else if (statusCode === 401) {
						data.error = err.response.data.message;
					}
					return reject(data);
				})
		})
	)
}