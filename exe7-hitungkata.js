function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var counter = 1
  for (let i = 0; i < kalimat.length; i++){
    if (kalimat[i] == " "){
      counter++
    }
  }
  if (kalimat == "" || kalimat == " "){
    counter = 0
  }
  return counter
}
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5