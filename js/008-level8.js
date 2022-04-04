function differenceInAges(ages) {
  const min = Math.min(...ages);
  const max = Math.max(...ages);
  console.log(Math.min(...ages));
  console.log(Math.max(...ages));
  return [min, max, max - min];
}

console.log(differenceInAges([82, 15, 6, 38, 35]));
