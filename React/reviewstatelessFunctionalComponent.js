class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper />
        </div>
      );
    }
  };
  /** A stateless functional component is any function you write which accepts props and returns JSX. 
   * A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state 
   * . Finally, a stateful component is a class component that does maintain its own internal state. */ 
  
  const Camper=props=><p>{props.name}</p>
  // above is stateless functional Component
  
  Camper.defaultProps = {
      name:"CamperBot"
    }
  
  Camper.propTypes = {name: PropTypes.string.isRequired}
  
  