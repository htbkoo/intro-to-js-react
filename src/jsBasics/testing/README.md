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
        2. Visit the [chai.js](http://www.chaijs.com/api/bdd/) documentations for more details 