const isLogged = (state = true, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return (state = !state);
    default:
      return state;
  }
};

export default isLogged;
