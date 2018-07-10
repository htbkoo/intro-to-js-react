import chai from "chai";

describe("Some JS basic exercises", function () {
    // These tests does not pass, try fixing them

    describe("basic syntax", function () {
        it("should assert sum", function () {
            // given
            // when
            let sum = 2 + 2;

            // then
            // TODO: fix this
            chai.expect(sum).to.equal(5);
        });

        it("should assert arrow function", function () {
            // given
            // when
            let fn = () =
        >
            0;

            // then
            // TODO: fix this
            chai.expect(fn()).to.equal(replaceThis);
        });
    });

    describe("array / object destructuring", function () {
        it("should destruct array", function () {
            // given
            const array = [1, 2, 3];

            // when
            let [a, b, c] = array;

            // then
            // TODO: fix these
            chai.expect(a).to.equal(replaceThis);
            chai.expect(b).to.equal(replaceThis);
            chai.expect(c).to.equal(replaceThis);
        });

        it("should destruct object", function () {
            // given
            const object = {
                "a": "value1",
                "b": "value2",
            };

            // when
            let {a, b} = object;

            // then
            // TODO: fix this
            chai.expect(a).to.equal(replaceThis);
            chai.expect(b).to.equal(replaceThis);
        });
    });
});