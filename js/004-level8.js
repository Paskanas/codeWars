function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  return (
    a.reduce((aa, bb) => aa + bb ** 2, 0) >
    b.reduce((aa, bb) => aa + bb ** 3, 0)
  );
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]));
