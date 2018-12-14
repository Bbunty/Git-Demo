describe( 'Prtractor baby step',function(){
	
	it('Alerts',function(){

        browser.waitForAngularEnabled(false);                                         
        browser.get('http://www.qaclickacademy.com/practice.php');
        element(by.id("confirmbtn")).click();
        //for positive button
        browser.switchTo().alert().accept().then(function(){
            browser.sleep(3000);
        })

        element(by.id("confirmbtn")).click();
        browser.sleep(3000);
        //for positive button
        browser.switchTo().alert().dismiss().then(function(){
            browser.sleep(3000);
        })

    })
	
})