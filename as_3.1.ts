// Typescript script greeter class //

// class declaration //

class greetMe 
{
public greeting: string;

// constructor to create objects during object instantiation //
    constructor(message: string ) 
{

    this.greeting = message;
}
    greet(){
        return "Hello " + this.greeting;
    }
}

// object instantiation //
let greeter = new greetMe("World");

console.log(greeter.greet());
