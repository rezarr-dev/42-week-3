function palindrome(kata) {
  // you can only write your code here!
  var terbalik = ""
  for (let i = kata.length-1; i >= 0; i--){
    terbalik += kata[i]
  }  
  if (terbalik === kata){
    return true
  } else {
    return false
  }
}
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false