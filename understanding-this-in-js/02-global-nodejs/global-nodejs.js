console.log('node.js - global - this');
console.log(this)

/* nodeJS */
//So, this, at the module level, is actually the exports object.
console.log('node.js - global this is module.exports at the module level');
console.log(this === module.exports);

function anyFunction() {
    // this is a global nodeJS object
    console.log('node.js - global this is a node.js object inside any function');
    console.log(this === global);
}

anyFunction();

(function () {
    console.log('node.js - global this is a node.js object inside any function (included IIFE');
    console.log(this === global)
})();
