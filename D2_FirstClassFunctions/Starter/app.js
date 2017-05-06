// Your Javascript Code Goes Here
function greet() {
    console.log('hi');
}
greet();

// functions are first-class to treat function as any other variable (meanse we can pass them around like a variables)
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// function expression - A special type of expression. An expression being a block of code that results in a value.
// Ex: 'name' (string), 4 (number)
var greetMe = function() {      // wrote anonymous(no name) function on fly. Funciton as value.
    console.log('Hi Jagadeesh');
}
greetMe();

// it's still first-class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
    console.log('use a function expression on the fly');
});

