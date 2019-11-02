class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: true,
		};
		this.toggleDisplay = this.toggleDisplay.bind(this);
	}
	toggleDisplay() {
		this.setState(state => ({
			display: !state.display,
		}));
	}
	render() {
		return (
			<div>
				<button onClick={this.toggleDisplay}>Toggle Display</button>

				{this.state.display && <h1>Displayed!</h1>}
			</div>
		);
	}
}
////You don’t have to do a full if/then statement. Just write the condition you are checking.

//{this.state.dinnerCooked &&<h1>Dinner is Cooked!</h1>}//h1 tag contents will be displayed
