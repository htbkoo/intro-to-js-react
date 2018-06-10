// Although no longer recommended (replaced by Prototype based inheritance), this is learnt from "Private Members in JavaScript" from "Douglas Crockford's JavaScript"
// Reference: https://www.crockford.com/javascript/private.html

function Encapsulated(arg) {
    var encapsulated = arg, secret = "anotherSecret";

    this.getSecret = function () {
        return secret;
    };

    this.setSecret = function (param) {
        secret = param;
    };

    return this;
}

var encapsulated = new Encapsulated(0);
console.log(encapsulated.encapsulated);
console.log(encapsulated.secret);
console.log(encapsulated.getSecret());
encapsulated.setSecret("newSecret");
console.log(encapsulated.getSecret());