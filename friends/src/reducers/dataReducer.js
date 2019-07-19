import { GET_START, GET_SUCCESS, GET_FAILED } from "../actions";

const initialState = {
    friends: [],
    isLoading: false,
    errorMessage: null
}

// Our reducer that handles the action(s)
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    // action type FETCHING
    case GET_START: {
			return {
				...state,
				fetching: true,
			}
    }
    // action type SUCCESS
		case GET_SUCCESS: {
      console.log(action.payload)
			return {
                ...state,
                friends: action.payload,
				fetching: false,
				error: null
			}
		}
    // action type FAILURE
		case GET_FAILED: {
			return {
				...state,
				fetching: false,
				error: action.payload.message,
			}
		}
    default:
      return state;
  }
};
