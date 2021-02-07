// spec.js
describe('Protractor Demo App', function() {
  var PageObjects= require('../Pages/pageObjectsInTheForm.js');
  PageObjects=new PageObjects();

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.waitForAngular();
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    PageObjects.AddFunc(1,2);
    expect(PageObjects.Latest.getText()).toEqual('3');
  });

  it('should add four and six', function() {
    PageObjects.AddFunc(4,6);
    expect(PageObjects.Latest.getText()).toEqual('10');
  });

 it('should read the value from an input', function() {
   PageObjects.First.sendKeys(1);
    expect(PageObjects.First.getAttribute('value')).toEqual('1');
  });
  
  it('Check the history',function(){
    PageObjects.AddFunc(1,2);
    PageObjects.AddFunc(1,3)
    PageObjects.History.then((arr) => {
    //expect(arr.length).toEqual(2);
    expect(arr[0].getText()).toContain('1 + 3');
    expect(arr[1].getText()).toContain('1 + 2'); 
      });
  });
});