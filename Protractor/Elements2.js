//Lecture Codes Test file
//One more type of Object import

describe( 'Protractor Elements Demo',function(){
        //Getting objects from the Object file i.e JDObject.js
        var obj = require("./Jsobject.js");
        
        //Pre request for Page
        beforeEach(function() {obj.getURL();  });

         //After the Test is done for screen shot and other work.

        //Spec
	it('Locators3',function(){	
        //Core Logic
                obj.firstinput.sendKeys("3");
                obj.secondinput.sendKeys("3");
                obj.goButton.click();
                obj.result.getText().then(function(text){console.log(text);});

           // if non angular site then un comment the code
                browser.waitForAngularEnabled(false);
                browser.get('http://google.com');

                afterEach(function() {   console.log("Test is Done");    });
 
        })
       
	
	
})