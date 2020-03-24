class Stack {
    constructor() {
        this.item = []
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

// ES2015新增了一种叫作Symbol的基本类型，它是不可变的，可以用作对象的属性