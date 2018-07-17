var chai = require("chai");

describe("JS concepts", function () {
    // These tests do not pass, try fixing them

    describe("lexical scoping", function () {
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