function functionDefinedInThisWay(argumentOne){
    console.log(0);
    return argumentOne;
}

var functionCanAlsoBeDefinedLikeThis = function(){
    console.log(2);
    // returns undefined if no return statement
};

let returnValue = functionDefinedInThisWay(1);
console.log(returnValue); // functions are triggered by added () after the function name
console.log(functionCanAlsoBeDefinedLikeThis());

let functionIsAlsoAnObject = functionDefinedInThisWay;
console.log(functionIsAlsoAnObject(3));
console.log(typeof functionIsAlsoAnObject);
