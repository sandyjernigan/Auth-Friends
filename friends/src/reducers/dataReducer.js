import { ACTION } from '../actions';

const initialState = {
  stateItem: 0
}

// Our reducer that handles the action(s)
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      // This will be the action taken
      return { 
        ...state,
        stateItem: 1
      }
    default:
      return state;
  }
};
