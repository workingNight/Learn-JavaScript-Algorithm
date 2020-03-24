//十进制转二进制
//js是没有stack类的，要使用的话需要自己构造一个。或者直接用数组模拟
class Stack {
    constructor() {
        this.items = []
    }
    //方法
    push(element) {
        this.items.push(element);
      }
      pop() {
        return this.items.pop();
      }
      //栈最后添加的元素是什么，即访问数组最后一个元素
      peek() {
        return this.items[this.items.length -1];
      }
      isEmpty() {
        return this.items.length === 0;
      }
      size() {
        return this.items.length;
      }
      clear() {
        this.items = [];
      }
}

// function decimalToBinary(decNumber) {
//     const remStack = new Stack()
//     let number = decNumber
//     let rem
//     let binaryString = ''
//     while(number > 0) {
//         rem = Math.floor(number % 2)
//         remStack.push(rem)
//         number = Math.floor(number / 2)
//     }
//     while(! remStack.isEmpty()) {
//         binaryString += remStack.pop().toString()
//     }
//     return binaryString
// }

// console.log(decimalToBinary(20))   //10100

//进制转换
function baseConverter(decNumber, base) {
    if(!(base >= 2 && base <= 36)) {
        throw SyntaxError('base range error')
    }
    const remStack = new Stack()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = decNumber
    let rem 
    let baseString = ''

    while(number > 0) {
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }
    while(!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]
    }
    return baseString
}

console.log(baseConverter(6000, 36))


// 栈的一些其他算法  汉诺塔，匹配括号