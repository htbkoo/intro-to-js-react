var chai = require("chai");

describe("Some JS basic exercises", function () {
    // These tests does not pass, try fixing them

    it("should assert sum", function () {
        // given
        // when
        var sum = 2 + 2;

        // then
        // TODO: fix this
        chai.expect(sum).to.equal(5);
    });

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