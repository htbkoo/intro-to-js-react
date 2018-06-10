var chai = require("chai");

describe("our first proper test", function () {
    it("should assert true=true", function () {
        chai.expect(true).to.equal(true);
    });
});