describe( 'Protractor baby step',function(){

    function selectItems(p){
    //take 4 cards into list
    //go through each index in the list - and get the title= if title =desired title then in that index i will select add button
        element.all(by.tagName("app-card")).each(function(item){
            item.element(by.css("h4 a")).getText().then(function(text){
                if(text==p){
                    item.element(by.buttonText("Add")).click();
                }
            })
        })
    }
	
	it('Forms',function(){
        
        browser.driver.manage().window().maximize();   
        browser.waitForAngularEnabled(false);    
        browser.get('https://qaclickacademy.github.io/protocommerce/');

        element(by.name("name")).sendKeys("Mystudents");
        element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("password2");
        element(by.css("input[type='checkbox']")).click();
        //New Tag
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        //New Locator
        element(by.buttonText("Submit")).click().then(function(){

            element(by.css("div[class='alert alert-success alert-dismissible']")).getText().then(function(text){
                console.log(text);
            })
        })
        element(by.name("name")).clear();
        element(by.name("name")).sendKeys("M").then(function(){
            element(by.css("[class='alert alert-danger']")).getText().then(function(text){
                console.log(text);
            })
        })



        //Dynamic Data


        //New Locator
        element(by.linkText("Shop")).click();
        //Taking Cards or div
       selectItems("iphone X");
       selectItems("Samsung Note 8");
        element(by.partialLinkText("Checkout")).getText().then(function(text){
            
        })


	})
	
	
})