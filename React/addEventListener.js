class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: '',
		};
		this.handleEnter = this.handleEnter.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	/* ComponentDidMount is the best palce to attachany event Listeners
  onClick is one of synthetic event Handlers
  React's synthetic event system is great to use for most interactions you'll manage on DOM elements. 
  However, if you want to attach an event handler to the document or window objects, you have to do this directly. */
  
  // within the class use this.handleKeyPress
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}
	/** document.addEventListener and document.removeEventListener will take in a quoted string for its event, 
     * and when passing in the function you
   will reference the function handleKeyPress() as this.handleKeyPress. 
   
   If you invoke the function as this.handleKeyPress(), the event listener will evaluate the function first and will 
   pass back a value of undefined. */
	handleEnter() {
		this.setState({
			message: this.state.message + 'You pressed the enter key! ',
		});
	}
	handleKeyPress(event) {
		if (event.keyCode === 13) {
			this.handleEnter();
		}
	}
	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
			</div>
		);
	}
}
