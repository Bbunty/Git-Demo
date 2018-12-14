
describe( 'Protractor baby step',function(){
	
	it('SyncExample',function(){

        browser.get('http://3cubehealth.com/easy_cirm/#/page/login');
        var a=element.all(by.css("div[class='input-group m-b']")).first();
        a.element(by.model("credentials.email")).sendKeys("admin@3cubehealth.com");
        browser.sleep(5000);
        var b=element.all(by.css("div[class='input-group m-b']")).last();
        b.element(by.model("credentials.password")).sendKeys("Octavia@33");
        browser.sleep(5000);
       // var EC = protractor.ExpectedConditions;

        //element(by.id('gobutton')).click();
        element(by.css("button[class='btn labelColor btn-oval']")).click();
       // browser.wait(EC.urlIs('http://3cubehealth.com/easy_cirm/#/app/listcrew'),5000);

    
        
	})
	
	
})