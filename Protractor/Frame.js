describe( 'Prtractor baby step',function(){
	
	it('Frame',function(){
		
        browser.waitForAngularEnabled(false);         
                                
        browser.get('http://www.qaclickacademy.com/practice.php');
        browser.switchTo().frame("courses-iframe");
        element(by.css("a[href='http://qaclickacademy.usefedora.com/sign_up']")).getText().then(function(text)
        {
            console.log(text);
        })
		
	})
	
	
})