var greet = function(){
    console.log('Inside greet file');
};

//Now this module is exposing the greet function it's making it available for use outside of the module.
module.exports = greet;
