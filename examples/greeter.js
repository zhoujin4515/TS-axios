var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
// 类型注解
function greeter(person) {
    return 'hello ' + person.firstName + ' ' + person.lastName;
}
//let user = 'Jin'
//let user = {
//    firstName: 'zhou',
//    lastName: 'jin'
//}
var user = new User('zhou', 'jin');
console.log(greeter(user));
