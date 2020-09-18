import Http, {setNewHeaders} from '../../utils/Http'
import * as authActions from './store/actions'
import Transformer from '../../utils/Transformer'

/**
 * fetch the current logged in user
 *
 * @returns {function(*)}
 */
// export function fetchUser() {
// 	return dispatch => {
// 		return Http.get('auth/me')
// 			.then(res => {
// 				const data = Transformer.fetch(res.data);
// 				dispatch(authActions.authUser(data))
// 			})
// 			.catch(err => {
// 				console.log(err)
// 			})
// 	}
// }

export async function obtainToken(credentials) {
  const response = await Http.post("token/obtain/", credentials);
  setNewHeaders(response);
  return response;
}

/**
 * login user
 *
 * @param credentials
 * @returns {function(*)}
 */
export function login(credentials) {
	return dispatch => (
		new Promise((resolve, reject) => {
			Http.post('auth/login', credentials)
				.then(res => {
          const data = Transformer.fetch(res.data);
          console.log(data)
					dispatch(authActions.authLogin(data.accessToken));
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
							errors: err.response.data.errors,
							replace: false,
							searchStr: '',
							replaceStr: '',
						};
						data.error = Transformer.resetValidationFields(resetErrors);
					} else if (statusCode === 401) {
						data.error = err.response.data.message;
          }
          console.log(data)
					return reject(data);
				})
		})
	)
}

export async function refreshToken(refresh) {
  const response = await Http.post("token/refresh/", {
    refresh,
  });
  setNewHeaders(response);
  return response;
}

/**
 * logout user
 *
 * @returns {function(*)}
 */
// eslint-disable-next-line
export function logout(accessToken) {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  // TODO: invalidate token on backend
}

export const isAuthenticated = () => {
  const token = localStorage.getItem("access_token");
  return !!token;
};