let chai = require('chai');
let assert = chai.assert;
describe('register for an acoount', () => {
    it('should be able to go to register page', () => {
        browser.url('/');

        let title = browser.getTitle();
        assert.equal(title, 'Conduit');
    })
});
