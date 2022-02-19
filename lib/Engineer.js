function Employee(name, id, email) {
    this.name = 'name';
    this.id= 'id';
    this.email = 'email';
    this.github = 'github';
}

Engineer.prototype.getName = function() {

}

Engineer.prototype.getId = function() {

}

Engineer.prototype.getEmail = function() {

}

Engineer.prototype.getRole = function() {
    return `The role of ${this.name} is Engineer.`
};

Engineer.prototype.getGithub = function() {
    return `The github username is ${this.github}`
}
module.exports = Engineer;