const producto = "Monitor de 20 pulgadas";

// .repeat te permite repetir una cadena de texto...
const texto = " en promocion".repeat(3);
console.log(texto);
console.log(`${producto} ${texto}!!!`);

// .split divide un texto
const actividad = "Estoy aprendiendo JavaScript moderno";
console.log(actividad.split(" "));

const hobbies =
  "Leer, escribir, escuchar musica, caminar, aprender a  programar";
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript moderno #JSModerno";
console.log(tweet.split("#"));
