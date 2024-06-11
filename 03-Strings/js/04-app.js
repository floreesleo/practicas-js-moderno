const productos =
  "                      Monitor de 20 pulgadas                ";

console.log(productos);
console.log(productos.length);

// Eliminar del inicio
console.log(productos.trimStart()); // Elimina espacios al inicio del string
console.log(productos.trimEnd()); // Elimina espacios al final del string

console.log(productos.trimStart().trimEnd());

console.log(productos.trim());
