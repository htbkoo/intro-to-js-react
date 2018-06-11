var chai = require("chai");
var sinon = require("sinon");

describe("JS mocking in tests", function () {
    describe("spy", function () {
        it("should assert spy has been called", function () {
            // given
            var spy = sinon.spy();
            chai.expect(spy.callCount).to.equal(0);

            // when
            spy();

            // then
            chai.expect(spy.callCount).to.equal(1);
        });

        it("should assert spy has been called with specific arguments", function () {
            // given
            var spy = sinon.spy();
            var argment = 10;

            // when
            spy(argment);

            // then
            chai.expect(spy.calledWithExactly(argment)).to.equal(true);
        });
    });

    describe("stub", function () {
        it("should get expected return value from stub", function () {
            // given
            var stub = sinon.stub();
            var expectedReturnValue = 20;
            stub.returns(expectedReturnValue);

            // when
            var actualReturnValue = stub();

            // then
            chai.expect(actualReturnValue).to.equal(expectedReturnValue);
        });

        it("should get expected return value from stub only if argument matches", function () {
            // given
            var stub = sinon.stub();
            var expectedArgument = "args", expectedReturnValue = 20;
            stub.withArgs(expectedArgument).returns(expectedReturnValue);

            // when
            var returnsUndefinedIfNotSpecified = stub();
            // then
            chai.expect(returnsUndefinedIfNotSpecified).to.not.equal(expectedReturnValue);
            chai.expect(returnsUndefinedIfNotSpecified).to.be.undefined;

            // when
            var actualReturnValue = stub(expectedArgument);
            // then
            chai.expect(actualReturnValue).to.equal(expectedReturnValue);
        });

        it("should be able to specify different returns value for stub in subsequent calls", function () {
            // given
            var stub = sinon.stub();
            stub
                .onFirstCall().returns(1)
                .onSecondCall().returns(2)
                .onThirdCall().returns(3)
                .returns(42);

            // when
            // then
            [
                1,
                2,
                3,
                42,
                42,
                42,
            ].forEach(function(expected){
                var actual = stub();
                chai.expect(actual).to.equal(expected);
            });
        });
    });

    xdescribe("mock", function () {
        // TODO: to decide adding examples for mock or not
        xit("should be able to mock", function () {
        });
    });
});