var arrayInJS = [1, 2, 3, "we can mix type in JS"];
console.log(arrayInJS);
console.log("we can access the item in an array like this: " + arrayInJS[1]);

var objectInJS = {
    "object consists of a key": "and a value",
    "thisShouldLookFamilarToYouIfYouKnow": "JSON",
    1: 2
};
console.log(objectInJS);
console.log(JSON.stringify(objectInJS));

var date = new Date();
console.log(date);

var boolean = true;
console.log(boolean);
console.log(boolean === false);

var u = undefined;
console.log(u);

var n = null; // Rule of thumb: I seldom use "null" and stick with "undefined" most of the time
console.log(n);
