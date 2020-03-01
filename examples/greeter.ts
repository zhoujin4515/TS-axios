class User {
    fullName: string
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + ' ' + lastName
    }
}

// 接口， 对象结构的描述, 编译后没有interface
interface Person {
    firstName: string
    lastName: string
}

// 类型注解
function greeter(person: Person) {
    return 'hello ' + person.firstName + ' ' + person.lastName
}

//let user = 'Jin'

//let user = {
//    firstName: 'zhou',
//    lastName: 'jin'
//}

let user = new User('zhou', 'jin')

console.log(greeter(user))