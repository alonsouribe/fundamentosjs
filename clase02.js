console.log("El área de un triángulo de base 5 y de altura 7: " + 5 * 7 / 2)

////////////////////////////////////////////////////////////////////////////

console.log('El área de un triángulo de base 5 y de altura 7: ' + 5 * 7 / 2)

////////////////////////////////////////////////////////////////////////////

console.log(`El área de un triángulo de base 5 y de altura 7: ${5 * 7 / 2}`)

////////////////////////////////////////////////////////////////////////////

let base = 5
let height = 7
console.log(`El área de un triángulo de base ${base} y de ${height}: ${base * height / 2}`)

////////////////////////////////////////////////////////////////////////////

let base = 5
let height = 7

function triangleArea(base, height) {
  return base * height / 2
}

console.log(`El área de un triángulo de base ${base} y de ${height}: ${triangleArea(base, height)}`)

////////////////////////////////////////////////////////////////////////////

let base = 5
let height = 7

const triangleArea = (base, height) => base * height / 2

console.log(`El área de un triángulo de base ${base} y de ${height}: ${triangleArea(base, height)}`)

triangleArea(17, 84)
