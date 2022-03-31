function correctPolishLetters(string) {
  // my variant
  // return string
  //   .replace(/ą/g, 'a')
  //   .replace(/ć/g, 'c')
  //   .replace(/ę/g, 'e')
  //   .replace(/ł/g, 'l')
  //   .replace(/ń/g, 'n')
  //   .replace(/ó/g, 'o')
  //   .replace(/ś/g, 's')
  //   .replace(/ź/g, 'z')
  //   .replace(/ż/g, 'z');
  var dict = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z',
  };
  return string.replace(/[ąćęłńóśźż]/g, (match) => dict[match]);
}

console.log(correctPolishLetters('Władysław Reymont'));
