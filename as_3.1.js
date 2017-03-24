// Typescript script greeter class //
// class declaration //
var greetMe = (function () {
    // constructor to create objects during object instantiation //
    function greetMe(message) {
        this.greeting = message;
    }
    greetMe.prototype.greet = function () {
        return "Hello " + this.greeting;
    };
    return greetMe;
}());
// object instantiation //
var greeter = new greetMe("World");
console.log(greeter.greet());
