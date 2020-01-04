# React-Redux
Basic revision of React and Redux 

Action Creator:> Action Creator is a function that is going to create or return a plain javaScript object. We refer to this javascript object as the  an action. An action has type property and a payload property. Type property on an action describes some change that we might want to make inside of data. Payload property describes some context that we might want to make. 

Action: The purpose of the action is to describe some change we want to make inside the data of the application.

Dispatch function: Dispatch function is going to take action and make copies of that object and pass it off to bunch of different places inside of the application.

Reducer: Reducer is the function that is responsible for taking in action and some existing amount of data. It is going to process that action and make some change to the data and return it so that it can be centralized in some location. 

 Reducer is always going to be function, always have two arguments


// if the reducer is called for the very first time, it receives the value undefined,
// we need to default the value the first argument, just make it (= [ ])
// 2nd option will replace the undefined with empty array.

Very important… 
When we want to add without mutating the array, it was easy
[…myarray, newthingthatistobeadded]

When deleting, use the filter method (name => name !== action.payload.name)

 Overall goal of Reducer is to take some existing data, some action and then modify and return that existing data based upon the content of action.

Store is the single object.
Store in Redux is essentially the assembly of collection of different Reducer and action creator.

Calling combineReducers and passing  each of our Reducers in key and value form.

First of all we combine Reducer using the CombineReducer function from the Redux Store and pass all the created Reducers as object. 

Secondly, we use the CreateStore function and pass our combine Reducers.

In order to call dispatch,  we first have to pass in an action that is created by action Creator. Lets first create an action by calling an action creator and we can pass in action to dispatcher.


Different Reducers we put together were simple functions. All these different functions, need to be wired up to be together. We wired up these function by making use of combineReducers function provided by Redux. We have keys and values pairs in the combineReducers so we ended up with state object .
At any point in time, we can take the store object and pull the state out of it and read the current data for our application. Store is never touched, we cannot get direct access to store and modify.
We are only going to modify our state by dispatching an action that has been created by an action creator. 



