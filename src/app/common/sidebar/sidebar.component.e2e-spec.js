describe('Sidebar', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <my-sidebar>', function () {
    var sidebar = element(by.css('my-app my-sidebar'));
    expect(sidebar.isPresent()).toEqual(true);
    expect(sidebar.getText()).toEqual("Sidebar Works!");
  });

});
