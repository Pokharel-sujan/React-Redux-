class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // simple Javascript in render
      name = this.state.name;
      
      return (
        <div>
          { /* Jsx here in return */ }
          <h1>{name}</h1>
  
        </div>
      );
    }
  };