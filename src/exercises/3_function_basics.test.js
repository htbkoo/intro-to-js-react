var chai = require("chai");

describe("JS functions (basic)", function () {
    // These tests do not pass, try fixing them
    // Hint: There are "Hints" on top of the test cases which link to the corresponding MDN docs, take a look if needed!

    // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
    describe("basic syntax", function () {
        it("should get return value from function", function () {
            // given
            function num() {
                // TODO: fix this
                var result = "a secret";
            }

            // when
            var result = num();

            // then
            chai.expect(result).to.equal("a secret");
        });

        it("should get return value from function", function () {
            // given
            var ran = false;

            function num() {
                ran = true;
            }

            // when
            // TODO: fix this
            num;

            // then
            chai.expect(ran).to.equal(true);
        });
    });

    describe("parameters", function () {
        it("should utilize the parameters", function () {
            // given
            // TODO: fix this
            function sum() {
                return a + b;
            }

            // when
            // then
            chai.expect(sum(1, 2)).to.equal(3);
        });

        // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
        it("should utilize the parameters using the arguments variable", function () {
            // given
            // Do NOT change the signature of the function
            function sum() {
                // TODO: fix this
                return replaceThis;
            }

            // when
            // then
            chai.expect(sum(1, 2)).to.equal(3);
        });
    });
});