function check(a, x) {
  // your code here
  // return a.indexOf(x) > -1;//my variant
  return a.includes(x); //my variant
}

console.log(check([66, 101], 66));
