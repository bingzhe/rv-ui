function Foo(who) {
    this.me = who;
}

Foo.prototype.identify = function () {
    return " I am " + this.me;
}

function Bar(who) {
    Foo.call(this, who);
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function () {
    alert("Hello, " + this.identify() + ".");
}

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();
b2.speak();


Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[Object Array]';
}

function getStrLen(str) {
    if (str === null) return 0;
    if (typeof str !== "string") {
        str += "";
    }
    return str.replace(/[^\x00-\xff]/g, "01").length;
}