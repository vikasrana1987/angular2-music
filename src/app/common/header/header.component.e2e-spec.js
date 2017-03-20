describe('Header', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <my-header>', function () {
    var header = element(by.css('my-app my-header'));
    expect(header.isPresent()).toEqual(true);
    expect(header.getText()).toEqual("Header Works!");
  });

});
