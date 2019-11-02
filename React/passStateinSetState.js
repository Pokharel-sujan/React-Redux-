class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibility: false,
		};
		// remember, it is inside the constructor
		this.toggleVisibility = this.toggleVisibility.bind(this);
		// change code above this line
	}
	//it is only state.visibilty, not this.state.

	/** We can pass state and props in setState, this ensures that we are working with the most current values */
	toggleVisibility() {
		this.setState(state => ({
			visibility: !state.visibility,
		}));
	}

	render() {
		if (this.state.visibility) {
			return (
				<div>
					<button onClick={this.toggleVisibility}>Click Me</button>
					<h1>Now you see me!</h1>
				</div>
			);
		} else {
			return (
				<div>
					<button onClick={this.toggleVisibility}>Click Me</button>
				</div>
			);
		}
	}
}
