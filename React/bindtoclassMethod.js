class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello"
      };
      //  
      this.handleClick= this.handleClick.bind(this)
      { /*In addition to setting and updating state, you can also define methods for your component class.
         A class method use "this" keyword so it can access properties on the class (such as state and props) 
         inside the scope of the method 
      
        One common way is to explicitly bind this in the constructor so this becomes bound to the class methods */ }
      
    }
    handleClick() {
      this.setState({
        text: "You clicked!"
      });
    }
    render() {
      return (
        <div>
          { /* like here thisis used; this.method name */ }
          <button onClick={this.handleClick} >Click Me</button>
          
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  };
  


  