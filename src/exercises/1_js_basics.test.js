var chai = require("chai");

describe("Some JS basic exercises", function () {
    // These tests does not pass, try fixing them

    describe("basic syntax", function () {
        it("should assert sum", function () {
            // given
            // when
            var sum = 2 + 2;

            // then
            // TODO: fix this
            chai.expect(sum).to.equal(5);
        });

        it("should get the type", function () {
            // then
            // TODO: fix these
            chai.expect(typeof 5).to.equal();
            chai.expect(typeof "").to.equal();
            chai.expect(typeof function () {
            }).to.equal();
            chai.expect(typeof true).to.equal();
            chai.expect(typeof {}).to.equal();
            chai.expect(typeof []).to.equal();
        });
    });

    describe("array", function () {
        it("should get the value from array", function () {
            var array = [0, 1, 2, 3];

            // then
            // TODO: fix this
            chai.expect(array[replaceThis]).to.equal(1);
        });
    });

    describe("object", function () {
        it("should get the value from object", function () {
            var object = {
                anotherKey: "not this",
                someKey: "someValue",
                1: "nor this"
            };

            // then
            // TODO: fix this
            chai.expect(object[replaceThis]).to.equal("someValue");
        });

        it("should assign value to object", function () {
            var object = {};
            // TODO: fix this
            object;

            // then
            chai.expect(object["key"]).to.equal("someValue");
        });

        it("should remove value from object", function () {
            var object = {
                key: "should be removed"
            };
            // TODO: fix this
            object;

            // then
            chai.expect(Object.keys(object).length).to.equal(0);
        });
    });
});