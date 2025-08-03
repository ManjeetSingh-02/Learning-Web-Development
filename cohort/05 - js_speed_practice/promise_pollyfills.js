class MyPromise {
  constructor(execFn) {
    this._state = "pending";
    this._thenFns = [];
    this._catchFns = [];
    this._finallyFns = [];
    this._value = null;
    this._error = null;
    execFn(this.resolverFn.bind(this), this.rejectorFn.bind(this));
  }

  then(cb) {
    if (this._state === "fulfilled") cb(this._value);
    else this._thenFns.push(cb);
    return this;
  }
  catch(cb) {
    if (this._state === "rejected") cb(this._error);
    else this._catchFns.push(cb);
    return this;
  }
  finally(cb) {
    if (this._state !== "pending") cb();
    else this._finallyFns.push(cb);
    return this;
  }
  resolverFn(value) {
    this._value = value;
    this._state = "fulfilled";
    this._thenFns.forEach((cb) => cb(value));
    this._finallyFns.forEach((cb) => cb());
  }
  rejectorFn(error) {
    this._error = error;
    this._state = "rejected";
    this._catchFns.forEach((cb) => cb(error));
    this._finallyFns.forEach((cb) => cb());
  }
}

function wait(s) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => resolve("hi with wait"), s * 1000);
  });
}

function non_wait() {
  return new MyPromise((resolve, reject) => {
    resolve("Hi without wait");
  });
}

wait(3)
  .then((arg) => console.log(arg))
  .catch((err) => console.log(err))
  .finally(() => console.log("Final 1"));

non_wait()
  .then((arg) => console.log(arg))
  .catch((err) => console.log(err))
  .finally(() => console.log("Final 2"));
