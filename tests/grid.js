describe('GridBatchEditing', function() {
  it('[jQueryWidget]EditStringCell', function() {
    var cellValue = "Chai";
    browser.ignoreSynchronization = true;
    browser.get('http://jivanova.bedford.progress.com/kendo/playground/local/grid.html');

    element(by.cssContainingText('td', cellValue)).click();
    var cellInput = element(by.css('.k-input'));
    cellInput.clear().then(function() {
        cellInput.sendKeys('Chai1');
    })
    cellInput.click();
    element(by.css('a.k-grid-save-changes')).click();
    var td = element(by.cssContainingText('td', cellValue + '1'));
    expect(browser.isElementPresent(td)).toBeTruthy();
  });
});