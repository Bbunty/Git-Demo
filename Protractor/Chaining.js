describe( 'Prtractor Chaning',function(){
	
	it('Locators',function(){
		
		browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
        element(by.model("first")).sendKeys("3");
        element(by.model("operator")).element(by.css("option:nth-child(5)")).click();
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
            console.log(text);

        })
        
	})
	
	
})