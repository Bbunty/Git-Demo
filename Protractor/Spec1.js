///First File

describe( 'Prtractor baby step',function(){
	
	it('Locators',function(){
		
		browser.get('http://3cubehealth.com/easy_cirm')
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.sleep(10000);
		console.log("Last Step to execute")
		expect(browser.getTitle()).toEqual('Super Calculator');
	})
	
	
})