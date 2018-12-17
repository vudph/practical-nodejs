function Course() {
    this.name = 'WMA';
    this.getName = function() {
        console.log(this.name);
    }
}

module.exports = new Course();