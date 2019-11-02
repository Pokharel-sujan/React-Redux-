const defaultState = {    //action
  authenticated: false
};

const authReducer = (state = defaultState, action) => {   // Reducer
  switch(action.type){
    case ('LOGIN'):
    return {authenticated:true}
    case ('LOGOUT'):
    return {authenticated:false}
    default:
    return({authenticated:false})
  }
  // always keep the default
};

const store = Redux.createStore(authReducer);

const loginUser = () => {   // action creator
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {    //action Creator
  return {
    type: 'LOGOUT'
  }
};