function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  var beda = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i+1]/arr[i] !== beda[0]){
      beda.push(Math.floor(arr[i+1]/arr[i]))
    }
  }
  if (beda.length > 2){
    return false
  } else {
    return true
  }
}
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false