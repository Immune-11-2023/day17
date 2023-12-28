// OOP ==> programación orientada a objetos
// FP ==> programación orienta a funciones
const player = {
  lives: 3,
  pos: {
    x: 0,
    y: 0,
  },
  weapon: "tuna",
  isAlive: true,
  hasSkin: true,
  jump() {
    this.pos.y += 10
    console.log("ESTOY DENTRO DEL OBJETO ==>", this)
  },
  code() {
    console.log("Hello world")
  },
  getOwnLives() {
    return this.lives
  },
}

// player.jump()
// console.log("LAS VIDAS DEL JUGADOR ==>", player.getOwnLives())
// console.log(globalThis)

// THIS KEYWORD => cómo referir a el propio objeto o contexto de ejercución

// REPRESENTACIÓN PROGRAMÁTICA DE LA REALIDAD => da pie a un paradigma en programación

const tinderUser = {
  isOtaku: true,
  hasDaddyIssues: true,
  isLoyal: false,
  favoriteAnime: "Evangelion",
  name: "Pako",
  gender: "male",
  nailColor: "black",
  tinderBio: "Buscando amigos ;P",
  personality: "narcissistic",
  chat() {
    console.log("ni dos besos ni nada, olvidona?")
  },
  changeTinderBio() {
    this.tinderBio = "No busco nada serio"
    console.log("La nueva bio ==>", this.tinderBio)
  },
}

// FÁBRICA DE USUARIOS DE TINDER
function createTinderUser(
  name,
  isOtaku,
  hasDaddyIssues,
  isLoyal,
  favoriteAnime,
  gender,
  nailColor,
  tinderBio,
  personality
) {
  const basicTinderUser = {
    isOtaku,
    hasDaddyIssues,
    isLoyal,
    favoriteAnime,
    name,
    gender,
    nailColor,
    tinderBio,
    personality,
    chat(message) {
      console.log(message)
    },
    changeTinderBio(bio) {
      this.tinderBio = bio
    },
  }
  return basicTinderUser
}

// const tinderUser1 = createTinderUser(
//   "Manolo",
//   false,
//   false,
//   true,
//   "One Piece",
//   "male",
//   "white",
//   "",
//   "cold"
// )

// const tinderUser2 = createTinderUser(
//   "Víctor",
//   false,
//   false,
//   true,
//   "One Piece",
//   "male",
//   "white",
//   "",
//   "smart"
// )

// const tinderUser3 = createTinderUser(
//   "Mauro",
//   false,
//   false,
//   true,
//   "One Piece",
//   "male",
//   "white",
//   "No busco nada serio 😈",
//   "cocky"
// )

// CLASS SYNTAX => sintaxis más familiar y menos enrevesada para ciertas operaciones
class TinderUser {
  constructor(name, age, gender, job, hobbies, tinderBio = "") {
    this.name = name
    this.age = age
    this.gender = gender
    this.job = job
    this.hobbies = hobbies
    this.tinderBio = tinderBio
  }

  sayHi() {
    console.log("Hey, q tal? :D")
  }

  editBio(bio) {
    this.tinderBio = bio
    console.log("LA NUEVA BIO ==>", this.tinderBio)
  }
}

const newTinderUser1 = new TinderUser("Manolo", 45, "male", "police officer", [
  "programming",
  "dancing",
])

// newTinderUser1.editBio("Policía de día, amante de noche")

// INHERITANCE and SUPER KEYWORD
class MaleTinderUser extends TinderUser {
  constructor(
    name,
    age,
    gender,
    job,
    hobbies,
    tinderBio = "",
    hasFishPhoto,
    isGymRat,
    isOtaku = true,
    isGamer
  ) {
    super(name, age, gender, job, hobbies, tinderBio)
    this.hasFishPhoto = hasFishPhoto
    this.isGymRat = isGymRat
    this.isOtaku = isOtaku
    this.isGamer = isGamer
  }

  sharePhoto() {
    console.log("Mirad esta minita xavules")
  }

  flex() {
    console.log("Nueva motito ;)")
  }

  greet() {
    super.sayHi()
    console.log("Buenos días, cachorrita ;P")
  }
}

// DAR MÉTODOS PROPIOS...
const maleTinderUser = new MaleTinderUser(
  "Pepe",
  18,
  "male",
  undefined,
  ["posting weird pics on IG", "golf"],
  "tu diablo ;P",
  false,
  true,
  true,
  true
)

// maleTinderUser.greet()

// PRIVATE (?)

// EJERCICIO => pako VS jeSsih: pako y jeSsih se encuentran en Tinder

// Han quedado para una cita y sus amigos están juzgando la situación

// Crea una clase Friend con un método constructor y estas propiedades: name, age, job, isLoyal, toxicity, salary, trustPoints
// Friend tiene tres métodos: help, betray, getToxicity y getARaise

// Friend
class Friend {
  constructor(name, age, job, isLoyal, toxicity, salary, trustPoints) {
    this.name = name
    this.age = age
    this.job = job
    this.isLoyal = isLoyal
    this.toxicity = toxicity
    this.salary = salary
    this.trustPoints = trustPoints
  }

  help() {
    console.log("Vamos a hablar!!!")
  }

  betray() {
    this.isLoyal = false
  }

  getToxicity() {
    return this.toxicity
  }

  getARaise() {
    this.salary += 10000
  }
}

const bestFriend = new Friend("Carla", 26, "Fullstack dev", true, 20, 120000)

// Crea una clase para los amigos de Pako y otra clase para los amigos de Jessih (ambas clases se extienden de Friend)
// Cada una de estas clases tiene que tener un método constructor
// Además de los atributos de la clase Friend, cada clase tiene estas propiedades extra
// PakoFriend: lookingForAJob, por defecto false y el método askForPic, que aumenta la toxicidad por 10 puntos
// JessihFriend: isStudying y el método judgeConversation, que también aumenta la toxicidad por 10 puntos

// 1 Creación clase PakoFriend
class PakoFriend extends Friend {
  constructor(
    name,
    age,
    job,
    isLoyal,
    toxicity,
    salary,
    trustPoints,
    lookingForAJob = false
  ) {
    super(name, age, job, isLoyal, toxicity, salary, trustPoints)
    this.lookingForAJob = lookingForAJob
  }

  askForPic() {
    this.toxicity += 10
    console.log("Pasa foto")
  }
}
// Crea 3 amigos de Pako. Puedes inventarte los valores del constructor
const manolo = new PakoFriend(
  "Manolo",
  35,
  "Soccer trainer",
  false,
  10,
  100000,
  5,
  false
)
const carlos = new PakoFriend(
  "Carlos",
  31,
  "Teacher",
  true,
  5,
  200000,
  10,
  true
)
const luis = new PakoFriend("Mauro", 28, undefined, false, 100, 0, 2, false)

const pakoFriends = [manolo, carlos, luis]

// 2 Creación clase JessihFriend
class JessihFriend extends Friend {
  constructor(
    name,
    age,
    job,
    isLoyal,
    toxicity,
    salary,
    trustPoints,
    isStudying
  ) {
    super(name, age, job, isLoyal, toxicity, salary, trustPoints)
    this.isStudying = isStudying
  }

  judgeConversation() {
    this.toxicity += 10
    console.log("Redflag brutal, tía")
  }
}
// Crea 3 amigos de Jessih. Puedes inventarte los valores del constructor
const carla = new JessihFriend("Carla", 27, "lawyer", true, 7, 120000, 10, true)
const laura = new JessihFriend("Laura", 21, "unemployed", true, 25, 0, 6, true)
const gabriela = new JessihFriend(
  "Gabriela",
  25,
  "Fullstack dev",
  false,
  200,
  250000,
  7,
  false
)

const jessihFriends = [carla, laura, gabriela]

// Raise salary: crear un array completo de todos los amigos (los de jessih y los de pako)
const friends = [...pakoFriends, ...jessihFriends]
console.log("LOS FRIENDS ==>", friends)
// Crea una función raiseSalary que, compruebe si un amigo es leal y si sus niveles de toxicidad son menores o igual a 10
// Si ese es el caso, aumenta el salario de tal amigo por 10000
// retorna un array con los amigos cuyo salario ha subido

const raiseSalary = (friends) => {
  const filteredFriends = []
  for (const friend of friends) {
    if (friend.isLoyal && friend.toxicity <= 10) {
      friend.salary += 10000
      filteredFriends.push(friend)
    }
  }
  return filteredFriends
}

// compareToxicityLevels ==> retornar un mensaje `Carlos is more toxic than Carla`
function compareToxicityLevels(pakoFriends, jessihFriends) {
  const randomIndex = Math.floor(Math.random() * pakoFriends.length)
  const pakoFriend = pakoFriends[randomIndex]
  const jessihFriend = jessihFriends[randomIndex]
  if (pakoFriend.toxicity < jessihFriend.toxicity) {
    return `${jessihFriend.name} is more toxic than ${pakoFriend.name}`
  } else if (pakoFriend.toxicity > jessihFriend.toxicity) {
    return `${pakoFriend.name} is more toxic than ${jessihFriend.name}`
  } else {
    return "Both are equally toxic"
  }
}

console.log(
  "EL RESULTADO DE LA BATALLA ==>",
  compareToxicityLevels(pakoFriends, jessihFriends)
)
