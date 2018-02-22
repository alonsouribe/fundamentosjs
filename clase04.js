function platzom (str) {
  let translation = str

  // Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith(`ar`)) {
    translation = str.slice(0, -2)
  }

  return translation
}

console.log(platzom('Programar'))

////////////////////////////////////////////////////////////////////////////

function platzom (str) {
  let translation = str

  // Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith(`ar`)) {
    translation = str.slice(0, -2)
  }

  // Si la palbra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith(`z`)) {
    translation += 'pe'
  }

  return translation
}

console.log(platzom('Programar'))
console.log(platzom('Zorro'))
console.log(platzom('Zarpar'))

////////////////////////////////////////////////////////////////////////////

function platzom (str) {
  let translation = str

  // Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith(`ar`)) {
    translation = str.slice(0, -2)
  }

  // Si la palbra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith(`z`)) {
    translation += 'pe'
  }

  // Si la palabra traducida tien e10 o más letras,
  // se debe partir a la mitad y unir con un guión

  const length = translation.length

  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2))
    const secondHalf = translation.slice(Math.round(length / 2))
    translation = `${firstHalf}-${secondHalf}`
  }

  return translation
}

console.log(platzom('Programar'))
console.log(platzom('Zorro'))
console.log(platzom('Zarpar'))
console.log(platzom('abecedario'))

////////////////////////////////////////////////////////////////////////////

function platzom (str) {
  let translation = str

  // Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith(`ar`)) {
    translation = str.slice(0, -2)
  }

  // Si la palbra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith(`z`)) {
    translation += 'pe'
  }

  // Si la palabra traducida tien e10 o más letras,
  // se debe partir a la mitad y unir con un guión

  const length = translation.length

  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2))
    const secondHalf = translation.slice(Math.round(length / 2))
    translation = `${firstHalf}-${secondHalf}`
  }

  return translation
}

console.log(platzom('Programar'))
console.log(platzom('Zorro'))
console.log(platzom('Zarpar'))
console.log(platzom('abecedario'))

////////////////////////////////////////////////////////////////////////////

function platzom (str) {
  let translation = str

  // Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith(`ar`)) {
    translation = str.slice(0, -2)
  }

  // Si la palbra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith(`z`)) {
    translation += 'pe'
  }

  // Si la palabra traducida tien e10 o más letras,
  // se debe partir a la mitad y unir con un guión

  const length = translation.length

  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2))
    const secondHalf = translation.slice(Math.round(length / 2))
    translation = `${firstHalf}-${secondHalf}`
  }

  // Si la palabra original es un palíndromo
  // ninguna regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayúsculas y minúsculas

  const reverse = (str) => str.split ('').reverse().join('')

  function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }

    return translation
  }

  if (str == reverse(str)) {
    return minMay(str)
  }

  return translation
}

console.log(platzom('Programar'))
console.log(platzom('Zorro'))
console.log(platzom('Zarpar'))
console.log(platzom('abecedario'))
console.log(platzom('sometemos'))
