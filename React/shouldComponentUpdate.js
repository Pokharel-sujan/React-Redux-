class OnlyEvens extends React.Component {
	constructor(props) {
		super(props);
    }
    
    // it takes two params, and output from here will be either true or falseS
	shouldComponentUpdate(nextProps, nextState) {
		console.log('should I update?');
        
        // it is nextProps.value

		/*nextProps``` differs from ```props``` in that it is a value that has not been rendered in the UI yet 
    so in the ```shouldComponentUpdate()``` method, you are essentially asking permission to update the UI with the 
    ```nextProps``` value.*/

		if (nextProps.value % 2 === 0) {
			return true;
		} else {
			return false;
		}
	}
	componentDidUpdate() {
		console.log('Component re-rendered.');
	}
	render() {
		return <h1>{this.props.value}</h1>;
	}
}

class Controller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
		};
		this.addValue = this.addValue.bind(this);
	}
	addValue() {
		this.setState({
			value: this.state.value + 1,
		});
	}
	render() {
		return (
			<div>
				<button onClick={this.addValue}>Add</button>
				<OnlyEvens value={this.state.value} />
			</div>
		);
	}
}
