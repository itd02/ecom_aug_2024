function redirectToPage(select) {
	console.log("working")
	if (select.value === 'indian') {
		window.location.href = 'index.html';
	} else if (select.value === 'german') {
		window.location.href = 'index2.html';
	}
}