//everything same as passing the props. Even the array should be passed as JSX
//To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.
const List = (props) => {
  
    return (
          <>
         <p>{props.tasks.join(', ')}</p>
         
        </>
  
    
    )};

  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          
          <List tasks = {["walk dog", "workout"]}/>
          <h2>Tomorrow</h2>
          <List tasks = {["walk","samikshya", "dog", "workout"]}/>

          
     
        </div>
      );
    }
  };
  