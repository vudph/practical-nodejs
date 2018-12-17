const hi = require('./pattern0');
hi.greeting();

var myHello = {
    x : 'Vu says', 
    y: '"Hello world!"'
}
hi.greeting.apply(myHello);