const arr = [1, 2, 3];

if (!Array.prototype.fill) {
    // Fallback if function doesn't exist in the browser
    // This is POLYFILL function
  Array.prototype.fill = function () {};
}

arr.fill();
