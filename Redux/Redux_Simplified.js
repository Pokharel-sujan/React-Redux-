
// People Dropping form/ Action Creator
// 1. Create Policy

const createPolicy = (name, amount)=>{
  return { // Action, a from in our analogy
    type: "CREATE_POLICY",
    //By convention, we write All CAPITAL and _ in space
    payload:{
      name:name,
      amount:amount
    }
    
    
  }
}
//rather than Hard coding, is is usually passed as arguments

const deletePolicy = (name)=>{
  return {
    type: "DELETE_POLICY",
    payload: {
      name:name
    }
    
  }
}

const createClaim =(name, claimAmount)=>{
  return{ 
  type:"CREATE_CLAIM",
  payload: {
    name:name,
    claimAmount: claimAmount
  }}
}
// Reducer , Deparments

const claimsHistory = (oldListOfClaims =[ ], action)=>{
  if ( action.type==='CREATE_CLAIM'){
    // We care about this action or form
    // Never use Push inside of the Reducer
    //oldListOfClaims.push(action.payload) // Changing the same, not advised
    return [...oldListOfClaims, action.payload]; // Brand New 
    // take all of oldListOfClaims and inside there, add  new brand of Array
    
   
  }
  // We dont care about that action or form
  return oldListOfClaims;
}

const accounting = (bagOfMoney= 100, action)=>{
  // We take care of it
  if (action.type === "CREATE_CLAIM"){
    return (bagOfMoney-action.payload.claimAmount)
      
      }
  //We dont take care of this
  else if(action.type=== "CREATE_POLICY"){
    return (bagOfMoney + action.payload.amount)
    
  }
  return bagOfMoney;
}
  
// Reducer
const Policies =(listOfPolicies =[ ], action)=>{
  if (action.type==="CREATE_POLICY"){
    return [...listOfPolicies , action.payload.name]
  }
  else if( action.type ==="DELETE_POLICY"){
    // It will give new array , which does not have name of person saying delete policy
    return (listOfPolicies.filter(name=>name !== action.payload.name))
  }
  return listOfPolicies;
}
  

console.log(Redux)
const { createStore, combineReducers} = Redux;

const ourDepartment= combineReducers({
  accounting:accounting,
  claimHistory:claimsHistory,
  Policies:Policies
})

const store= createStore(ourDepartment);

const action= createPolicy('Alex',20)
console.log(action)



//store.dispatch(action);

store.dispatch(createPolicy('Alex', 20))
store.dispatch(createPolicy('Jim', 30))
// store.state gives access to gigantic one
console.log(store.getState(action))

store.dispatch(createClaim('Alex',120))
store.dispatch(deletePolicy('Alex'))


store.dispatch(createClaim('Alex', 10));
console.log(store.getState())

store.dispatch(createPolicy('Ajax', 200))




console.log(store.getState())
store.dispatch(createClaim('Ajax', 180))
console.log(store.getState());
















