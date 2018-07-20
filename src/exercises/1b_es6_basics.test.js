const chai = require("chai");

describe("Some JS basic exercises", function () {
    // These tests do not pass, try fixing them
    // Hint: There are "Hints" on top of the test cases which link to the corresponding MDN docs, take a look if needed!

    describe("basic syntax", function () {
        // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
        // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
        it("should assert sum", function () {
            // given
            // when
            let sum = 2 + 2;

            // then
            // TODO: fix this
            chai.expect(sum).to.equal(5);
        });

        // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        it("should assert arrow function", function () {
            // given
            // when
            let fn = () => 0;

            // then
            // TODO: fix this
            chai.expect(fn()).to.equal(replaceThis);
        });
    });

    // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
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

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    describe("class", function () {
        it("should get new instance from class", function () {
            // given
            class myClass {
                getNum() {
                    return 0
                };
            }

            // when
            // TODO: fix this
            let instance;

            // then
            chai.expect(instance.getNum()).to.equal(0);
        });
    });
});