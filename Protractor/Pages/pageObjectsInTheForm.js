module.exports=function(){

    this.First= element(by.model('first'));
    this.Second= element(by.model('second'));
    this.Plus= element.all(by.model('operator'));
    this.GoBtn= element(by.id('gobutton'));
    this.Latest=element(by.binding('latest'));
    this.History=element.all(by.repeater('result in memory'));
    
    this.AddFunc = function(Number1,Number2)
    {
        this.First.sendKeys(Number1);
        this.Second.sendKeys(Number2);
        this.Plus.sendKeys('+').click();
        this.GoBtn.click();
    }

}