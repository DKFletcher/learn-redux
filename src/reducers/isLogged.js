const loggedReducer = ( state = false, action) => {
  switch(action.type){
    case 'SIGN_IN':
      return !state
    default:
      return state
  //   case 'LOGOUT':
  //     return state.loggedIn = false
  }
}

export default loggedReducer