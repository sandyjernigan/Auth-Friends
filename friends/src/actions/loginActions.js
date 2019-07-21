// we'll need axios
import axios from 'axios'

// Login action types
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

// action creator for login
export function login(username, password) {
	return (dispatch) => {
		dispatch({ type: LOGIN_START })

		return axios.post('http://localhost:5000/api/login', { username, password })
			.then((res) => {
				localStorage.setItem('token', res.data.payload)
				dispatch({ type: LOGIN_SUCCESS })
			})
			.catch((err) => {
				console.log(err.response.data.error)
				const payload = err.response ? err.response.data.error : err
				dispatch({ type: LOGIN_FAILED, payload })
			})
	}
}