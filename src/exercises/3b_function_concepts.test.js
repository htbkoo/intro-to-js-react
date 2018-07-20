var chai = require("chai");

describe("JS functions (more advanced concepts)", function () {
    // These tests do not pass, try fixing them
    // Hint: There are "Hints" on top of the test cases which link to the corresponding MDN docs, take a look if needed!

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

    // Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
    describe("new", function () {
        it("should create new instance", function () {
            // given
            function MyClass(value) {
                var _value = value;
                this.publicValue = value + 5;
                this.getValue = function () {
                    return _value;
                };
                return this;
            }

            // when
            var myClass = new MyClass(10);

            // then
            // TODO: fix this
            chai.expect(myClass.getValue()).to.equal(replaceThis);
            chai.expect(myClass.publicValue).to.equal(replaceThis);
        });
    });
});