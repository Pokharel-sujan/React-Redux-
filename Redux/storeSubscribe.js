const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};
const store = Redux.createStore(reducer);
// global count variable:
let count = 0;
//const addOne = ()=> count++;   
//store.subscribe(addOne);  
store.subscribe(()=>count++);// callback inside



// change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

// store has subscribe() method. allows to subscribe listener functions to the store. it is called whenever an action is dispatched against store. 
//One simple use for this method is to subscribe a function to  store that simply logs a message every time an action is received and the store is updated.