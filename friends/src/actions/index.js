// we'll need axios
import axios from 'axios'

// Data action types
export const GET_START = 'GET_START' // fetching data
export const GET_SUCCESS = 'GET_SUCCESS' // request successful
export const GET_FAILED = 'GET_FAILED'// request fails

// Login action types
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

// action creator to fetch Data
export function getData() {
	return (dispatch) => { 
		// enter the "loading" state
		dispatch({ type: GET_START })

		axios.get('http://localhost:5000/api/friends')
			.then((res) => {
				dispatch({ type: GET_SUCCESS, payload: res.data })
			})
			.catch((err) => {
				dispatch({ type: GET_FAILED, payload: err })
			})
	}
}

// action creator for login
export function login(username, password) {
	return (dispatch) => {
		dispatch({ type: LOGIN_START })

		return axios.post('http://localhost:5000/api/login', { username, password })
			.then((res) => {
				localStorage.setItem('token', res.data.token)
				dispatch({ type: LOGIN_SUCCESS })
			})
			.catch((err) => {
				const payload = err.response ? err.response.data : err
				dispatch({ type: LOGIN_FAILED, payload })
			})
	}
}