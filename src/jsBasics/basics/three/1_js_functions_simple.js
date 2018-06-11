function functionDefinedInThisWay(argumentOne){
    console.log(0);
    return argumentOne;
}

var functionCanAlsoBeDefinedLikeThis = function(){
    console.log(2);
    // returns undefined if no return statement
};

var returnValue = functionDefinedInThisWay(1); // functions are triggered by added () after the function name
console.log(returnValue);
console.log(functionCanAlsoBeDefinedLikeThis());

var functionIsAlsoAnObject = functionDefinedInThisWay;
console.log(functionIsAlsoAnObject(3));
console.log(typeof functionIsAlsoAnObject);
