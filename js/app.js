//INSTANTIATE THE CLASSES

const cryptoAPI = new CryptoAPI();

const ui = new UI();

//variables

const form = document.getElementById('form');

//event listener
form.addEventListener('submit', (e) => {
	e.preventDefault();

	const selectedCurrency = document.getElementById('currency').value,
		cryptocurrency = document.getElementById('cryptocurrency').value;

	//validate the inputs
	if (selectedCurrency === '' || cryptocurrency === '') {
		//show error
		ui.printMessage(
			'All Fields are mandatory',
			'deep-orange darken-4 card-panel',
		);
	} else {
		cryptoAPI.queryAPI(selectedCurrency, cryptocurrency).then((data) => {
			ui.displayResult(data.result[0], selectedCurrency);
		});
	}
});
