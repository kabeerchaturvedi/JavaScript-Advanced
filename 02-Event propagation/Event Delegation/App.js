document.getElementById('#category').addEventListener('click', (e) => {
	//fetching the target according to click
	console.log(e.target.id);

	//re-routing according to the target clicked
	window.location.href = '/' + e.target.id;
});
