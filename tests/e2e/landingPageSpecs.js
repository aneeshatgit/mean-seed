
describe('landing page', function() {
	var ptor;
	beforeEach(function () {
        ptor = protractor.getInstance();
        ptor.get('/landing');
    });

	it('should load the landing page', function () {
		var title = ptor.findElement(protractor.By.tagName("h1")).getText();
		expect(title).toBe("Landing page of MEAN seed");
	});

	it('should be able to save a new employee', function () {
		var input = ptor.findElement(protractor.By.id("nameInput"));
		input.sendKeys("Some Name");
		ptor.findElement(protractor.By.id('addName')).click();
		ptor.findElements(protractor.By.tagName('li')).then(function(els){
			var len = els.length;
			expect(els[len-1].getText()).toBe("Some Name");		
			ptor.get('/landing');
			ptor.findElements(protractor.By.tagName('li')).then(function(els){
				expect(els[len-1].getText()).toBe("Some Name");		
			});
		});
	}, 5000);
});