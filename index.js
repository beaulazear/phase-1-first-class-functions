function receivesAFunction(cb) {
    return cb(receivesAFunction);
}

function returnsANamedFunction() {
    return function sayHello() {
        console.log(`Hello`);
    }
}
function returnsAnAnonymousFunction() {
    return function(){
        console.log(`anon`);
    }
}