const superagent = require('supertest');
const app = require('../app');

function request() {
	return superagent(app.listen())
}


describe('Upload test start ...', function () {

	before(function () {
	})

	after(function () {
	})

	afterEach(async function () {
	})

	beforeEach(async function () {
	})

	describe('njs value', function () {
		request().get('/')
			.end(function (err, res) {
				// console.log(res.body)
			})
	})
})
