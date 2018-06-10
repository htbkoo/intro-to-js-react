function outerFunction(callback) {
    callback(0);
    console.log(1);
}

outerFunction(function(arg){
   console.log(arg);
});
