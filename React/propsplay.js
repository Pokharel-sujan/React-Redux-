const CurrentDate = (props) => {
    return (
      <div>
        
        <p>The current date is: {props.date}</p>
        
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          
          <CurrentDate date = {Date()} />
          { /* It is seen that the Date is assigned to date in calendar component and is transferred to 
        CurrentDate with props.
        Can we say props is plane?? From the parent component to child component */ }
        </div>
      );
    }
  };