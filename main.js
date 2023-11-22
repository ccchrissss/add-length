function addLength(str) {
  // 'hello there'

  // take the string
  // get rid of spaces
  // isolate individual words
  let arr = str.split(' ')
  console.log(arr)
  // ['hello', 'there']

  // let solution = arr.map( (e, i, array) => e + ' ' + e.length )
  let solution = arr.map( (e, i, array) => {
    return e + ' ' + e.length
  })

  // for loop 
    // add and reassign a space and arr[i].length to arr[i]
  // for(let i = 0; i < arr.length; i++) { 
  //   arr[i] += ` ${arr[i].length}`
  // }

  // return arr
  return solution
}

console.log(addLength('hello there'))
console.log(addLength('hi mom'))