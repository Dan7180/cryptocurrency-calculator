class CryptoAPI {
	//query the api
	async queryAPI(currency, crypto) {
		const url = await fetch(
			`https://api.nomics.com/v1/currencies/ticker?key=demo-26240835858194712a4f8cc0dc635c7a&ids=${crypto}&convert=${currency}`,
		);

		const result = await url.json();

		return { result };
	}
	//fetch all cryptocurrencies

	//!!https://api.nomics.com/v1/currencies/ticker?key=demo-26240835858194712a4f8cc0dc635c7a&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR"
	async getCryptoList() {
		const url = await fetch(
			'https://api.nomics.com/v1/currencies/ticker?key=demo-26240835858194712a4f8cc0dc635c7a&ids=BTC,ETH,XRP&convert=EUR',
		);

		const cryptolist = await url.json();

		return {
			cryptolist,
		};
	}
}
