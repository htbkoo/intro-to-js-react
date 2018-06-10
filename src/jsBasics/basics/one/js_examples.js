// This file can be run by "node js_examples.js"

var variableName = "variable value";

console.log(variableName);

variableName = 15;

console.log(variableName + 3);

for (var i = 0; i < 5; i++) {
    var sum = variableName + i;
    if (sum < 18){
        console.log(sum + " is smaller than 18");
    }else{
        console.log(sum + " is greater than or equal to 18");
    }
}

console.log(sum);

