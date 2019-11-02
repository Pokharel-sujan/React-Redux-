Syntax = const newObject = Object.assign({}, obj1, obj2);

//This creates newObject as a new object, which contains the properties that currently exist in obj1 and obj2.

const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
  };
  
  const immutableReducer = (state = defaultState, action) => {
    switch(action.type) {
      case 'ONLINE':
        return( Object.assign({ },state, {status:'online'}));
        // Everything same from the defaultState but only with status 'online'
        
      default:
        return state;
    }
  };
  
  const wakeUp = () => {
    return {
      type: 'ONLINE'
    }
  };
  
  const store = Redux.createStore(immutableReducer);