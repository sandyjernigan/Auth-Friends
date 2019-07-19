import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions';

const initialState = {
  errorMessage: null
}

// Our reducer that handles the action(s)
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
		case LOGIN_START: {
			return {
				...state,
				isLoading: true,
			}
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				isLoading: false,
				errorMessage: null,
			}
		}
		case LOGIN_FAILED: {
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload.message,
			}
		}
    default:
      return state;
  }
};
