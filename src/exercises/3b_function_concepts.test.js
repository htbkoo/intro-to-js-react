var chai = require("chai");

describe("JS functions (more advanced concepts)", function () {
    // These tests do not pass, try fixing them

    describe("function as first class object", function () {
        it("should pass callback function as an argument", function () {
            // given
            function fn(options, callback) {
                chai.expect(options.key).to.equal("a secret");
                return callback();
            }

            // when
            // TODO: fix this
            var options = replaceThis;
            var callback = replaceThis;

            // then
            chai.expect(fn(options, callback)).to.equal("callback return value");
        });
    });
});