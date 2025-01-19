const request = require('supertest');
const subject = require('../app');
jest.mock('node-fetch', () => jest.fn());

const fetch = require('node-fetch');

describe('Testing the server', () => {
	it('can run the express server and return a 200', async () => {
		const response = await request(subject).get('/');
		expect(response.statusCode).toBe(200);
	});
});

test('should mock fetch and return data', async () => {

	const mockData = {
		data: {
			items: [
				{
					symbolInput: "FTSE:FSI",
					basic: {
						symbol: "FTSE:FSI",
						name: "FTSE 100 Index",
						exchange: "FTSE International",
						exhangeCode: "FSI",
						bridgeExchangeCode: "GBFT",
						currency: "GBP"
					},
				},
				{
					symbolInput: "INX:IOM",
					basic: {
						"symbol": "INX:IOM",
						"name": "S&P 500 INDEX",
						"exchange": "CME:Index and Options Market",
						"exhangeCode": "IOM",
						"bridgeExchangeCode": "USCO",
						"currency": "USD"
					}
				}
			]
		},
		timeGenerated: "2022-03-02T18:39:38"
	}

	fetch.mockResolvedValueOnce({
		json: async () => (mockData),
	});

	const response = await fetch('https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=FTSE:FSI,INX:IOM');
	const json = await response.json();

	expect(fetch).toHaveBeenCalledTimes(1);
	expect(fetch).toHaveBeenCalledWith(
		'https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=FTSE:FSI,INX:IOM'
	);
	expect(json).toEqual(mockData);
});
// add your own tests here
