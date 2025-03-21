//スタック・キューの両方として利用できるデータ構造の実装を行う
var CustomDataStructure = /** @class */ (function () {
    function CustomDataStructure() {
        this.numberArray = [];
    }
    CustomDataStructure.prototype.peekLast = function () {
        if (this.numberArray.length === 0) {
            throw new Error("stack is empty");
        }
        return this.numberArray[this.numberArray.length - 1];
    };
    CustomDataStructure.prototype.peekFirst = function () {
        if (this.numberArray.length === 0) {
            throw new Error("stack is empty");
        }
        return this.numberArray[0];
    };
    CustomDataStructure.prototype.pop = function () {
        if (this.numberArray.length === 0) {
            throw new Error("stack is empty");
        }
        return this.numberArray.pop();
    };
    CustomDataStructure.prototype.poll = function () {
        if (this.numberArray.length === 0) {
            throw new Error("stack is empty");
        }
        return this.numberArray.shift();
    };
    CustomDataStructure.prototype.push = function (n) {
        this.numberArray.push(n);
    };
    CustomDataStructure.prototype.addFirst = function (n) {
        this.numberArray.unshift(n);
    };
    return CustomDataStructure;
}());
var ds = new CustomDataStructure();
ds.push(10); // [10]
ds.push(20); // [10, 20]
ds.push(30); // [10, 20, 30]
console.log(ds.peekLast()); // 30
console.log(ds.pop()); // 30 -> [10, 20]
console.log(ds.peekFirst()); // 10
console.log(ds.poll()); // 10 -> [20]
ds.addFirst(5); // [5, 20]
console.log(ds.peekFirst()); // 5
console.log(ds.peekLast()); // 20
