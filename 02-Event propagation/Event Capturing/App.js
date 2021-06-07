//for the particular flow we can see that the events are flowing from outside to inside
//Hence it is an example of Event Capturing as the events are being captured
//The basic difference between event capturing and bubbling is passing the value of UseCapture
//By default : true =>Event Capturing
//false or no value passed: event bubbling

document.getElementById('grandparent').addEventListener(
	'click',
	(e) => {
		console.log('grandparent clicked');
	},
	true
);

document.getElementById('parent').addEventListener(
	'click',
	(e) => {
		console.log('parent clicked');
	},
	true
);

document.getElementById('child').addEventListener(
	'click',
	(e) => {
		console.log('Child clicked');
	},
	true
);
