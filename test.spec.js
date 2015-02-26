var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Simple test', function() {

	it('Every page should contain text aaa', function() {
		browser.driver.get('http://localhost:3000/');
		expect(browser.driver.findElement(by.xpath('//h1'))
			.getText())
			.to.eventually.eql('aaa');
	});
});

