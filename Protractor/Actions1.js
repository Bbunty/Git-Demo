describe( 'Action',function(){
	
	it('Posse Website',function(){
        browser.get("http://posse.com/");	
        element(by.model("userInputQuery")).sendKeys("river");
        //Mouse Move
        browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
        //Move Down with Keyboard
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
            browser.sleep(5000);
            //Options Count
            expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
            element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();

            element(by.css("a[ng-href*='London/River Island']")).click().then(function(){
                //To change the focus to tabed open window.
                browser.getAllWindowHandles().then(function(tab){
                    //0 index is parent then 1 is child and so on....
                    browser.switchTo().window(tab[1]);
                    browser.getTitle().then(function(text){
                            console.log(text);
                    });
                })
               
            });
        });


	
	})
	
	
})