function pasanganTerbesar(num) {
  // you can only write your code here!
  var string = num.toString()
  var newNum = []
  var result = []
  for (let i = 0; i < string.length-1; i++){
    newNum.push(string[i]+string[i+1])
  }
  newNum.sort()
  result = Number(newNum[newNum.length-1])
  return result
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99