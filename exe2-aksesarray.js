//input "hello world!"
var input = "hello world!"

function balikString (string){
  var terbalik = ""  
  for (let i = string.length-1; i >= 0; i--){
    terbalik += string[i]
  }
  return terbalik
}
console.log(balikString(input))
//output
//"!dlrow olleh"