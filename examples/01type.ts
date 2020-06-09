// 数字类型
let decListeral: number = 20
let hexLiteral: number = 0x14

// 字符串
let name: string = 'Jin'
let age: number = 26
let sentence = `Hello, my name is ${name}

I'm ${age} old`

// 数组
let list: number[] = [1, 2, 3]
// 数组泛型
let list2: Array<number> = [1, 2, 3]

// 元祖 tuple
let x: [string, number]
x = ['str', 20]
x[1] = 'sjfa'

// 枚举
enum Color {
    Red,
    Green,
    Blue,
}

let c:Color = Color.Green
