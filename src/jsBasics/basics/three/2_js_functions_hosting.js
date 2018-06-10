// "Hosting means variable and function declarations are physically moved to the top of your code"
// Strictly speaking, this is not the case in JS.
// And "Hoisting is a term you will not find used in any normative specification prose prior to ECMAScript® 2015 Language Specification (http://www.ecma-international.org/ecma-262/6.0/index.html)"
// From Glossary - Hoisting in MDN
// Reference: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

// TL;DR: In layman's term, hoisting means you can use functions that are declared in the later part of the code

console.log(hoistedFunction());
console.log(alternativeWayDeclaredButUnassigned());

function hoistedFunction() {
    return 0;
}

var alternativeWayDeclaredButUnassigned = function() {
    return 1;
};