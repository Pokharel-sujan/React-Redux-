class ReturnTempPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              
              <p>Your temporary password is:<strong>{this.props.tempPassword}</strong></p>
             { /* below props is passed using this.props */ }
          </div>
      );
    }
  };
  
  class ResetPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            <h2>Reset Password</h2>
            <h3>We've generated a new temporary password for you.</h3>
            <h3>Please reset this password from your account settings ASAP.</h3>
            { /* change code below this line */ }
            <ReturnTempPassword  tempPassword= "helloween"/>
            { /* this is father component and will only just  have props like in variable */ }
          </div>
      );
    }
  };
  