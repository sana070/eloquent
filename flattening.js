let arrays = [[1, 2, 3], [4, 5], [6]];
arrays=arrays.reduce((a , b , c) => a.concat(b));
console.log(arrays)
