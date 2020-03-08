function groupAnimals(animals) {
  // you can only write your code here!
  var sortedAnimals = animals.sort()
  var firstLetter = sortedAnimals[0][0]
  var temp = []
  var result = []
  for (let i = 0; i < sortedAnimals.length; i++){
    if (sortedAnimals[i][0] == firstLetter){
      temp.push(sortedAnimals[i])
    }
    else {
      result.push(temp)
      temp = []
      firstLetter = sortedAnimals[i][0]
      temp.push(sortedAnimals[i])
    }
    if (i == sortedAnimals.length-1){
      result.push(temp)
    }
  }
  return result
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]