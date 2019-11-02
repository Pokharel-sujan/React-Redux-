const ADD_TO_DO = "ADD_TO_DO";


const todos = [
  "Go to the store",
  "Clean the house",
  "Cook dinner",
  "Learn to code"
];

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
     

      return todos.concat(action.todo);
    // or return [...todos, action.todo]

    // [...myArray, 'new value']. This would return a new array composed of the 
    //values in myArray and the string 'new value' as the last value.

    default:
      return state;
  }
};


const addToDo = todo => {
  return {
    type: ADD_TO_DO,
    todo
  };
};

const store = Redux.createStore(immutableReducer);


/**Problem Explanation
The goal of this challenge is to return a new copy of state in reducer function because of state immutability in Redux.

Hints
Hint 1
const means: it cannot change through re-assignment, and it cannot be re-declared.
Since objects and arrays are mutable, you can add to it by index (array[3] = 3), by property (object.name=“sam”), by extending (with various array methods)

Hint 32
.push() and .splice() directly modify the array

Hint 33
.concat() doesn’t modify array but just returns a new array

Hint 4
.slice() doesn’t modify array but just returns a new array

Hint 5
spread operator […array] doesn’t modify array but just returns a new array */