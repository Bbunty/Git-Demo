//Lecture Codes Test file

describe( 'Protractor Elements Demo',function(){
	
	it('Locators',function(){
	
		browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("3");
        element(by.id('gobutton')).click();
        element(by.css("h2[class='ng-binding']")).getText().then(function(text){
                console.log(text);
        });

           // if non angular site then un comment the code
           browser.waitForAngularEnabled(false);
           browser.get('http://google.com');
           browser.sleep(10000);
 
	})
	
	
})