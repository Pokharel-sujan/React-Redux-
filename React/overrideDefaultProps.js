const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* To override a default props value, the syntax 
  
  <Component propsName={Value}/>
   */ }
      return <Items quantity={ 10 } />
      
    }
  };
  