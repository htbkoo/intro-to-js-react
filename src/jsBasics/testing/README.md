# JavaScript automated testing

## Setup
1. Run ```npm -D i mocha sinon chai``` in the project folder
    1. This will *install* (```npm i```) **mocha**, **chai** and **sinon** and add them as *dev dependencies* (```-D```) for the project (more details in the [Node.js / npm section](https://github.com/htbkoo/intro-to-js-react/wiki/Node.js---npm-basics))
2. Check the [```package.json```](https://github.com/htbkoo/intro-to-js-react/blob/master/package.json) file to see that mocha, chai and sinon are installed
    1. Hint: you can also check the versions installed 
3. Add this to the package.json (inside the object, at the same level as ```devDependencies```)
    
    ```
    "scripts": {
       "test": "    "test": "mocha src/**/*.test.js"
    }
    ```
    1. With this, the tests can be run by ```npm test``` (especially needed if your IDE does not support mocha)
    2. This pattern means running all tests if the file name matches "*.test.js" under any folder    
4. The naming convention of the test files is **\<filename\>.test.js** OR **\<filename\>.spec.js** for the src **\<filename\>.js** 
    1. As of 11-Jun-2018, with at least IntelliJ 2017.3, following the above naming convention would enable the *test navigation* short-cut (Ctrl+Shift+T)
5. There is no (confirmed) convention in where to place the test files
    1. **In our projects, we follow the maven project structure**
    2. Alternatively, Some people suggested placing the test files right next to the src files (for easier modules importing)
    
## Example files
1. Covers the basic syntax of tests in JS 
    1. In short, ```describe``` specifies the test suites while ```it``` specifies the test case
        1. FYI, this syntax is based on the [Jasmine testing framework](https://jasmine.github.io/2.0/introduction.html)
    2. Add an ```x``` (i.e. ```xdescribe``` and ```xit``` ) to temporarily ignore the test suite / test case
2. Covers the assertion framework (chai.js)
    1. There are multiple styles supported by chai.js (e.g. BDD style, TDD style)
        1. **In our projects, we picked the "expect" style**
        2. Visit the [chai.js](http://www.chaijs.com/api/bdd/) documentations for more details 2. Covers the assertion framework (chai.js)
3. Covers the mocking framework (sinon.js)
    1. In short
        1. ```spy``` is used for asserting if invocation has happened 
        2. ```stub``` is used for returning mocked return value 
        3. ```mock``` can do both but [it is recommended to use the above if possible](http://sinonjs.org/releases/v5.1.0/mocks/)
        4. There are other functions like ```sinon.createStubInstance``` and sand boxed environment - visit the [sinon documentation for more details](http://sinonjs.org/releases/v5.1.0/)  
    2. From Sinon v5, there is a new function ```fake``` introduced which ["simplifies and merges concepts from spies and stubs"](http://sinonjs.org/releases/v5.1.0/fakes/) 
        1. I have not used this yet so I could not comment too much on this.
        2. **And in our projects, we would not be upgrading to the edge version soon anyway so :)**