function targetTerdekat(arr) {
  // you can only write your code here!
  var o = 0
  var x = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == "o"){
      o = i
      break
    }
  }
  for (let j = 0; j < arr.length; j++){
    if (arr[j] == "x"){
      x.push(j)
    }
  }
  var range = x[0]-o
  for (let k = 0; k < x.length; k++){
    if (range < 0){
      range *= -1
      if (range > x[k]-o){
        range = o-x[k]
      }
    }
    else if (range > x[k]-o){
      range = x[k]-o
    }
  }
  if (x == false){
    return 0
  }
  return range
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2