console.log('browser - global - this');
console.log(this)

/* browser */
//So, this, at the module level, is actually the window object.
console.log('browser - global this is window at the module level');
console.log(this === window);

function anyFunction() {
    // this is a global window object
    console.log('browser - global this is window object inside any function');
    console.log(this);
}

anyFunction();

(function () {
    console.log('browser - global this is a window object inside any function (included IIFE)');
    console.log(this)
})();
