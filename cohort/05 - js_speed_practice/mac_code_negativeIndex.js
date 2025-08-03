function proxiedArr(arr) {
  return new Proxy(arr, {
    get(target, index) {
      index = Number(index);
      if (index >= 0) return target[index];
      else return target[target.length + index];
    },
    set(target, index, value) {
      index = Number(index);
      if (index >= 0) target[index] = value;
      else target[target.length + index] = value;
      return true;
    },
  });
}

let arr = [1, 2, 3, 4];
let newArr = proxiedArr(arr);

console.log(newArr[3]);
console.log(newArr[-1]);

newArr[-1] = 5;
console.log(newArr[-1]);
