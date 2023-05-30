const webTableTest = require('../../webTableTest');


describe('webdriverio Typescript Demo', function() {
	it('Dynamic table in WebdriverIO ',async function() {
		browser.url('https://testautomationpractice.blogspot.com/');
		await browser.pause(1000)
        console.log(await webTableTest.getRowCount())
		console.log(await webTableTest.getCloumnCount())
		console.log(await webTableTest.getHeaderCount())
		console.log(await webTableTest.getRowValues(2,1))
		console.log(await webTableTest.getAllTableValue())
	});
});