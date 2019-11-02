const inputStyle = {
	width: 235,
	margin: 5,
};

class CheckUserAge extends React.Component {
	constructor(props) {
        super(props);
        
		this.state = {
			userAge: '',
			input: '',
		};
		this.submit = this.submit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({
			input: e.target.value,
			userAge: '',
		});
	}
	submit() {
		this.setState(state => ({
			userAge: state.input,
		}));
	}
	render() {
		const buttonOne = <button onClick={this.submit}>Submit</button>;
		const buttonTwo = <button>You May Enter</button>;
		const buttonThree = <button>You Shall Not Pass</button>;
		return (
			<div>
				<h3>Enter Your Age to Continue</h3>
				<input style={inputStyle} type="number" value={this.state.input} onChange={this.handleChange} />
				<br />
                


                {this.state.userAge === '' ? buttonOne : this.state.userAge >= 18 ? buttonTwo : buttonThree}
			</div>
            
		);
	}
}
/**Above is three buttons  and ternary case is used
 * when the page loads up, say , this.state.userAge ==='' it will show button One that is submit button
 * if the age is greater than 18 it will show up 2nd buttin that is button two
 * else it will show up 3rd 
 */
