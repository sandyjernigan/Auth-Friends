import { GET_START, GET_SUCCESS, GET_FAILED } from "../actions";

const initialState = {
    friends: [],
    isLoading: false,
    errMsg: null
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
				errMsg: null
			}
		}
    // action type FAILURE
		case GET_FAILED: {
			return {
				...state,
				fetching: false,
				errMsg: action.payload.message,
			}
		}
    default:
      return state;
  }
};
