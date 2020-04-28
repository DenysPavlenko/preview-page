export default () => {
	let i;
	let undefined;
	let el = document.createElement('div');
	let transitions = {
		'transition':'transitionend',
		'OTransition':'otransitionend',
		'MozTransition':'transitionend',
		'WebkitTransition':'webkitTransitionEnd'
	};

	for (i in transitions) {
		if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
			return transitions[i];
		}
	}
}