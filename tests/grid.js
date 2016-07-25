describe('GridBatchEditing', function() {
  it('EditStringCell', function() {
    var cellValue = "Chai";
    browser.ignoreSynchronization = true;
    browser.get('http://jivanova.bedford.progress.com/kendo/playground/local/grid.html');

    element(by.cssContainingText('td', cellValue)).click();
    $('.k-input')
      .clear()
      .sendKeys(cellValue + '1')
      .click();
    $('a.k-grid-save-changes').click();
    var td = element(by.cssContainingText('td', cellValue + '1'));
    expect(browser.isElementPresent(td)).toBeTruthy();
  });
});