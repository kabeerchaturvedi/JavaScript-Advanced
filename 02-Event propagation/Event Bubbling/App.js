//for the particular flow we can see that the events are flowing from inside to the outside
//Hence it is an example of Event Bubbling

document.getElementById('grandparent').addEventListener('click', (e) => {
	console.log('grandparent clicked');
});

document.getElementById('parent').addEventListener('click', (e) => {
	console.log('parent clicked');
});

document.getElementById('child').addEventListener('click', (e) => {
	console.log('Child clicked');
});
