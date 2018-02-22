const starWars7 = 'Star Wars: El despertar de la Fuerza'
const pgStarWars7 = 13

const nameSasha = 'Sasha'
const ageSasha = 26

const nameSanti = 'Santi'
const ageSanti = 12

function canWatchStarWars7(name, age) {
  if(age >= pgStarWars7) {
    alert(`${name} puede pasar a ver ${starWars7}`)
  }
  else {
    alert(`${name} no puede pasar a ver ${starWars7} tiene ${age} años y necesita tener ${pgStarWars7}`)
  }
}

canWatchStarWars7(nameSasha, ageSasha)
canWatchStarWars7(nameSanti, ageSanti)

////////////////////////////////////////////////////////////////////////////

const starWars7 = 'Star Wars: El despertar de la Fuerza'
const pgStarWars7 = 13

const nameSasha = 'Sasha'
const ageSasha = 26

const nameSanti = 'Santi'
const ageSanti = 12

function canWatchStarWars7(name, age, isWithAdult = false) {
  if (age >= pgStarWars7) {
    alert(`${name} puede pasar a ver ${starWars7}`)
  } else if (isWithAdult) {
    alert(`${name} puede pasar a ver ${starWars7} aunque su edad es ${age} se encuentra acompañada/o por un adulto`)
  }
  else {
    alert(`${name} no puede pasar a ver ${starWars7} tiene ${age} años y necesita tener ${pgStarWars7}`)
  }
}

canWatchStarWars7(nameSasha, ageSasha)
canWatchStarWars7(nameSanti, ageSanti, true)

////////////////////////////////////////////////////////////////////////////

const starWars7 = 'Star Wars: El despertar de la Fuerza'
const pgStarWars7 = 13

const nameSasha = 'Sasha'
const ageSasha = 26

const nameSanti = 'Santi'
const ageSanti = 12

const canWatchStarWars7 = (name, age, isWithAdult = false) => {
  if (age >= pgStarWars7) {
    alert(`${name} puede pasar a ver ${starWars7}`)
  } else if (isWithAdult) {
    alert(`${name} puede pasar a ver ${starWars7} aunque su edad es ${age} se encuentra acompañada/o por un adulto`)
  }
  else {
    alert(`${name} no puede pasar a ver ${starWars7} tiene ${age} años y necesita tener ${pgStarWars7}`)
  }
}

canWatchStarWars7(nameSasha, ageSasha)
canWatchStarWars7(nameSanti, ageSanti, true)
