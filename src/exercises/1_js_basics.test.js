var chai = require("chai");

describe("Some JS basic exercises", function () {
    // These tests do not pass, try fixing them
    // Hint: There are "Hints" on top of the test cases which link to the corresponding MDN docs, take a look if needed!

    describe("basic syntax", function () {
        it("should assert sum", function () {
            // given
            // when
            var sum = 2 + 2;

            // then
            // TODO: fix this
            chai.expect(sum).to.equal(5);
        });

        // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types
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
        // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
        it("should get the value from array", function () {
            var array = [0, 1, 2, 3];

            // then
            // TODO: fix this
            chai.expect(array[replaceThis]).to.equal(1);
        });

        it("should append to array", function () {
            // given
            var array = [0, 1, 2, 3];

            // when
            // TODO: fix this
            array.push(replaceThis);

            // then
            chai.expect(array).to.deep.equal([0, 1, 2, 3, 4]);
        });

        // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
        it("should copy array", function () {
            // given
            var oldArray = [0, 1, 2, 3];

            // when
            // TODO: fix this
            var array = oldArray.slice(replaceThis, replaceThis);

            // then
            chai.expect(oldArray).to.deep.equal([0, 1, 2, 3]);
            chai.expect(array).to.deep.equal([1, 2]);
        });

        // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        it("should extract from array", function () {
            // given
            var oldArray = [1, 2, 3, 4, 5, 6, 7];

            // when
            // TODO: fix this
            var array = oldArray.splice(replaceThis, replaceThis);

            // then
            chai.expect(array).to.deep.equal([3, 4, 5]);
            chai.expect(oldArray).to.deep.equal([1, 2, 6, 7]);
        });
    });

    describe("object", function () {
        // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
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

        // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Deleting_a_property_from_an_object
        it("should remove value from object", function () {
            var object = {
                key: "should be removed"
            };
            // TODO: fix this
            object;

            // then
            chai.expect(Object.keys(object).length).to.equal(0);
        });

        it("should extract value from nested object", function () {
            var object = {
                innerObj: {
                    key: "embeddedValue"
                }
            };

            // then
            // TODO: fix this
            chai.expect(replaceThis).to.equal("embeddedValue");

        });
    });

    describe("general programming challenges", function () {
        it("should implement a tail recursive version of fibonacci", function () {
            // given
            // TODO: implement this
            function tail_recursive_fibonacci() {
            }

            // when
            var n = 10;
            var actual = tail_recursive_fibonacci(n);

            // then
            chai.expect(actual).to.equal(55);
        });
    });
});
