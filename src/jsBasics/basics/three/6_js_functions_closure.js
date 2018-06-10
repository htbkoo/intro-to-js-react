function simpleClosureExample(outerParam) {
    var secret = "third";

    return function (innerParam) {
        return innerParam + " " + outerParam + " " + secret;
    }
}

var newFunction = simpleClosureExample("second"); // currying, referene: https://en.wikipedia.org/wiki/Currying
console.log(newFunction("first"));

console.log(simpleClosureExample("fourth")("fifth"));