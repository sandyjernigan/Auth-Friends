export const ACTION = 'ACTION';

// Our action creators will return an action packet from reducer

export const action = (variable) => {
  // Function should increment number by 1
  return {
    type: ACTION,
    payload: { variable }
  }
};
