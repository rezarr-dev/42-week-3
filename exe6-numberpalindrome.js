function angkaPalindrome(num) {
  // you can only write your code here!
  function balikAngka(angka){
    var terbalik = 0
    while(angka > 0){
      let kanan = Math.floor(angka%10)
      terbalik = terbalik * 10 + kanan
      angka = Math.floor(angka/10)
    }
    return terbalik
  }
  var display = []
  for (let i = 0; i < 1000; i++){
    if(num === balikAngka(num)){
      display = num
      break
    } else {
      num++
    }
  }
  if (display < 10){
    display++
  }
  return display
}

//   // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001