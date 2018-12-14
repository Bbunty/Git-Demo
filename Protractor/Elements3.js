//Lecture Codes Test file
//One more type of Object import from Jasmin Data Provider

describe( 'Protractor Elements Demo',function(){
        //Getting objects from the Object file i.e JDObject.js
        var obj = require("./Jsobject.js");
        var d = require("./data1.js");
        //dependencies add of data provider
        var using = require('jasmine-data-provider');
        
        //Pre request for Page
        beforeEach(function() {obj.getURL();  });

         //After the Test is done for screen shot and other work.

        //Spec
        //using is an jasmin data provider It works like An loop.
        using(d.Datadriven, function (data, description) {

	        it(description,function(){	
        //Core Logic
                obj.firstinput.sendKeys(data.firstinput);
                obj.secondinput.sendKeys(data.secondinput);
                obj.goButton.click();
                expect(obj.result.getText()).toBe(data.result);

                obj.result.getText().then(function(text){console.log(text);});
                });
        });        
        afterEach(function() {   console.log("Test is Done");    });
	
	
})