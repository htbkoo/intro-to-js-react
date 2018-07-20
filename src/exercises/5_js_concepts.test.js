var chai = require("chai");

describe("JS concepts", function () {
    // These tests do not pass, try fixing them
    // Hint: There are "Hints" on top of the test cases which link to the corresponding MDN docs, take a look if needed!

    // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Lexical_scoping
    describe("lexical scoping", function () {
        // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Creating_closures_in_loops_A_common_mistake
        it("should get 0,1,2,3,4 from fn()", function () {
            // given
            var fn = [];

            // when
            // TODO: fix this
            for (var i = 0; i < 5; i++) {
                fn.push(function () {
                    return i;
                })
            }

            // then
            [
                0,
                1,
                2,
                3,
                4,
            ].forEach(function (expected, index) {
                chai.expect(fn[index]()).to.equal(expected);
            });
        });
    });

    // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
    describe("this", function () {
        it("seems that 'this' does not work", function () {
            // given
            var getHead = function () {
                return this[0];
            };

            // when
            var context = ["someSecret", 2, 3];

            // then
            // TODO: fix this
            chai.expect(replaceThis).to.equal("someSecret");
        });
    });
});