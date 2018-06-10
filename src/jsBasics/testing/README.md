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

## Example files
1. Covers the basic syntax of tests in JS 