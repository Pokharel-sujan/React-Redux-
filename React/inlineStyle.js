const styles = {
	color: 'purple',
	fontSize: 40,
	border: '2px solid purple',
};

class Colorful extends React.Component {
	render() {
		// change code below this line
		return <div style={styles}>Style Me!</div>;
		/** Hyphenated words like font-size are invalid syntax for
         *  JavaScript object properties, so React uses camel case.
		 * As a rule, any hyphenated style properties are written using camel 
         * case in JSX.*/
	}
}
