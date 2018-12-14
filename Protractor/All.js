describe('Prtractor All', function () {
    //Functions must be always out side of the it block.
    function Add(a, b, c) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        //Tagname locator.
        element.all(by.tagName("option")).each(function (key) {
            //getAttribute function.
            key.getAttribute("value").then(function (values) {
                if (values == c) { key.click(); }
            })
        })

        element(by.id("gobutton")).click();
    }

    it('Locators', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
        Add(13, 2, "SUBTRACTION");
        Add(10, 2, "ADDITION");
        Add(10, 2, "DIVISION");
        Add(13, 2, "SUBTRACTION");

        //For List count.
        element.all(by.repeater("result in memory")).count().then(function (text) {
            console.log(text + " Count");
        })
        //For list.
        element.all(by.repeater("result in memory")).each(function (item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text);
            })

        })

    })


})