var hello = {
    x : 'Hello',
    y : 'world!',
    greeting : function() {
        console.log(this.x + ' ' + this.y);
    }
}

module.exports = hello;