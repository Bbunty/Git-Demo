
//Testing of Our Platform

describe( 'Protractor Elements Demo',function(){
//It is an test suite	.It can be only one
	it('Locators',function(){
             //It is an testcase  .It can be multiple it blocks
	
	browser.get('http://3cubehealth.com/easy_cirm/#/page/login');

        var a=element.all(by.css("div[class='input-group m-b']")).first();
        a.element(by.model("credentials.email")).sendKeys("admin@3cubehealth.com");
        browser.sleep(5000);
        var b=element.all(by.css("div[class='input-group m-b']")).last();
        b.element(by.model("credentials.password")).sendKeys("Octavia@33");
        browser.sleep(5000);
        //element(by.id('gobutton')).click();
        element(by.css("button[class='btn labelColor btn-oval']")).click().then(function(){
                browser.sleep(5000);
                      })     
        });
 
	})