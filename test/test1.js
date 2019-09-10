let chai = require('chai');
let assert = chai.assert;
describe('register for an acoount', () => {
    it('should be able to go to register page', () => {
        browser.url('/');

        let title = browser.getTitle();
        let registerLink = $("a[href$='#register']");

        assert.equal(title, 'Conduit');
        registerLink.click();
        let inputUsername = $("[placeholder=Username]");
        inputUsername.addValue('username');
        // browser.debug();
    });
});
