const arr = [1, 2, 3, 4, 5, 6];

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callback) {
    const orgArr = this;
    for (let i = 0; i < orgArr.length; i++) {
      callback(orgArr[i], i);
    }
  };
}
arr.myForEach(function (value, index) {
  console.log(`Index: ${index}, Value: ${value}`);
});

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const value = callback(this[i]);
      result.push(value);
    }
    return result;
  };
}
const ans = arr.myMap((e) => e * 4);
console.log(ans);

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) result.push(this[i]);
    }
    return result;
  };
}
const res = arr.myFilter((e) => e % 2 == 0);
console.log(res);

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback) {
    let ans = 0;
    for (let i = 0; i < this.length; i++) {
      ans = callback(ans, this[i]);
    }
    return ans;
  };
}
const sum = arr.myReduce((prev, next) => prev + next);
console.log(sum);
