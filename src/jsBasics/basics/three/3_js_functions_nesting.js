outerFunction();

function outerFunction(){
    var outerVariable = 2;

    function innerFunction(){
        console.log(1);
    }

    console.log(0);
    innerFunction();
    functionCanBeDefinedAnywhere();

    function functionCanBeDefinedAnywhere(){
        console.log(outerVariable);
    }
}