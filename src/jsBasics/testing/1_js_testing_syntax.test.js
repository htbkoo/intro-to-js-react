// This can be run immediately if the IDE (e.g. IntelliJ) supports mocha
// Alternatively, follow the steps in the README to add the npm script and run "npm test"

describe("describe means the test suite", function () {
    it("it means the test case", function () {
        console.log(0);
    });
    it("you can have more than one test case", function () {
        console.log(1);
    });
    describe("you can also have nested test suite", function () {
        it("yet another test case", function () {
            console.log(2);
        });
    });
});