//Lecture Codes Test file
//Type of Object import from another file

describe( 'Protractor Elements Demo2',function(){
        //Getting objects from the Object file i.e JDObject.js
        var obj = require("./Jsobject.js");
        var d = require("./data.js");

        //Pre request for Page
        beforeEach(function()
         {obj.getURL();  }
         );

         //After the Test is done for screen shot and other work.

        //Spec
	it('Locators1',function(){	
        //Core Logic
                obj.firstinput.sendKeys(d.datadrive.firstinput);
                obj.secondinput.sendKeys(d.datadrive.secondinput);
                obj.goButton.click();
                expect(obj.result.getText()).toBe(d.datadrive.result);

                obj.result.getText().then(function(text){console.log(text);});

           // if non angular site then un comment the code
                browser.waitForAngularEnabled(false);
                browser.get('http://google.com');

              
 
        })
       
        afterEach(function()
        { console.log("Test is Done");    
        });
	
})