import HTTP from '../../../utils/Http';
import {
	AUTH_CHECK,
	AUTH_LOGIN,
	AUTH_LOGOUT,
	AUTH_LOGIN_SUCCESS,
	AUTH_RESET_PASSWORD,
} from './action-types';
import { obtainToken, logout } from '../service'

const initialState = {
  isAuthenticated: false,
  accessToken: localStorage.getItem("access_token"),
};

const reducer = (state = initialState.accessToken, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return action.token;
    case AUTH_LOGOUT:
      return "";
    default:
      return state;
  }
}

// const reducer = (state = initialState, { type, payload = null }) => {
// 	switch(type) {
// 		case AUTH_REFRESH_TOKEN:
// 		case AUTH_LOGIN:
// 			return loginUser(state, payload);
// 		case AUTH_CHECK:
// 			return checkAuth(state);
// 		case AUTH_LOGOUT:
// 			return logout(state);
// 		case AUTH_RESET_PASSWORD:
// 			return resetPassword(state);
// 		default:
// 			return state;
// 	}
// };

// function login(state, payload) {
// 	localStorage.setItem('access_token', payload);
// 	HTTP.defaults.headers.common['Authorization'] = `Bearer ${payload}`;

// 	return {
// 		...state, isAuthenticated: true,
// 	}
// }
export function loginUserSuccess(token) {
  return { type: AUTH_LOGIN_SUCCESS, token };
}

export function loginUser(credentials) {
  return async function (dispatch) {
    try {
      const response = await obtainToken(credentials);
      dispatch(loginUserSuccess(response.data.access));
    } catch (error) {
      console.log("Error obtaining token. " + error);
    }
  };
}

export function logoutUserSuccess() {
  return { type: AUTH_LOGOUT };
}

export function logoutUser() {
  return async function (dispatch) {
    await logout();
    dispatch(logoutUserSuccess());
  };
}

// function checkAuth(state) {
// 	state = Object.assign({}, state, {
// 		isAuthenticated: !!localStorage.getItem('access_token')
// 	});

// 	if (state.isAuthenticated) {
// 		HTTP.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
// 	}

// 	return state;
// }

// function logout(state) {
// 	localStorage.removeItem('access_token');

// 	return {
// 		...state, isAuthenticated: false
// 	}
// }

// function resetPassword(state) {
// 	return {
// 		...state, resetPassword: true,
// 	}
// }

// export const getAuth = state => state.auth.isAuthenticated;

export default reducer;