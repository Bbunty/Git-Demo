function Car(){
    //Properties
    this.color="Red";
    this.engine="Turbo";
    this.brand="BMW";
    this.search="by.css('input')";
    this.firstinput=element(by.model("first"));
    this.secondinput=element(by.model("second"));
    this.goButton=element(by.id("gobutton"));
    this.result=element(by.css("h2[class='ng-binding']"));

    //Method
    this.getModel =function()
    { console.log("A4");};

    this.getURL=function()
    {browser.get('http://juliemr.github.io/protractor-demo/');};
};


module.exports=new Car();



