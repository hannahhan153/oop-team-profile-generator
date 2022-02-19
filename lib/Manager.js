function Manager(name, id, email, officeNumber) {
    this.name = 'name';
    this.id= 'id';
    this.email = 'email';
    this.officeNumber = 'officeNumber';
}

Manager.prototype.getName = function() {

}

Manager.prototype.getId = function() {

}

Manager.prototype.getEmail = function() {

}

Manager.prototype.getRole = function() {
    return `The role of ${this.name} is Manager.`
};

module.exports = Manager;