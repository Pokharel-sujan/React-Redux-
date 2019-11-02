const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

//to create an asynchronous action,  return a function in the action creator that takes dispatch as an argument. 
//Within this function, you can dispatch actions and perform asynchronous requests.

// action creator for async act is normal  but has dispatch as an argument 
const handleAsync = () => {
  return function(dispatch) {
    // dispatch request action here

    //It's common to dispatch an action before initiating any asynchronous behavior
    //Then, once you receive the data, you dispatch another action which carries the data as a payload along with information 
    //that the action is completed.
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // dispatch received data action here

    }, 2500);
  }
};

// actions
const defaultState = {
  fetching: false,
  users: []
};


// Reducers
const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
// to include Redux Thunk middleware, we pass it as an argument to Redux.applyMiddleware like above. BUT
// this statement remains as the 2nd optional parameter to createStore() function.

//to create an asynchronous action, you return a function in the action creator that takes dispatch as an argument. 
//Within this function, you can dispatch actions and perform asynchronous requests.