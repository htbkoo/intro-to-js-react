var chai = require("chai"); // This is the syntax to import other module in Node.js (https://www.quora.com/How-is-the-Node-js-module-system-different-than-CommonJS), basing on the CommonJS (https://en.wikipedia.org/wiki/CommonJS) syntax
                            // This would be covered with more details in the Node.js / npm section (https://github.com/htbkoo/intro-to-js-react/wiki/Node.js---npm-basics))

describe("our first proper test suite", function () {
    it("should assert true=true", function () {
        chai.expect(true).to.equal(true);
    });
    it("should fail this case if we assert true=false", function () {
        chai.expect(true).to.equal(false);
    });
});