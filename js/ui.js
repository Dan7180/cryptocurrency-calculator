class UI {
	constructor() {
		this.init();
	}

	init() {
		this.printCryptos();
	}

	//get all the current cryptocurrencies
	printCryptos() {
		cryptoAPI
			.getCryptoList()
			.then((result) => {
				const cryptocurrencies = result.cryptolist;

				//create the select
				const select = document.getElementById('cryptocurrency');

				cryptocurrencies.forEach((currency) => {
					//build the options template
					const option = document.createElement('option');
					option.value = currency.id;
					option.textContent = currency.name;

					select.appendChild(option);
				});
			})
			.catch((err) => {});
	}

	//prents a messages (takes 2 parameters - the message, and the classname)
	printMessage(message, className) {
		const div = document.createElement('div');

		//add class
		div.className = className;
		//add message
		div.textContent = message;

		//insert the div
		const messageDiv = document.querySelector('.messages');
		messageDiv.appendChild(div);

		setTimeout(() => {
			document.querySelector('.messages div').remove();
		}, 3000);
	}

	//print crypto
	displayResult(result, currency) {
		//remove previous result
		const preDiv = document.querySelector('#result > div');
		console.log(preDiv);
		if (preDiv) {
			preDiv.remove();
		}

		let myTemplate = '';

		myTemplate += `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                <img src="${result.logo_url}" height="50px"  />
                    <span class="card-title">Result</span>
                    <p>The price of ${result.name} is : ${currency} ${result.price}</p>
                    <span class="card-title">-------------------</span>
                    <p>Circulating supply: ${result.circulating_supply}</p>
                    <p>Market cap: ${result.market_cap}</p>
                </div>
            </div>
        `;

		this.dispaySpinner();

		const divResult = document.querySelector('#result');

		setTimeout(() => {
			document.querySelector('.spinner img').remove();
			divResult.innerHTML = myTemplate;
		}, 3000);
	}

	//spinner
	dispaySpinner() {
		const spinner = document.createElement('img');
		spinner.src = 'img/spinner.gif';
		document.querySelector('.spinner').appendChild(spinner);
	}
}
