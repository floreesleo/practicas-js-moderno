const producto = "Monitor de 20 pulgadas ";
const precio = "30 USD";

console.log(producto.concat(precio)); // Concatena ambos strings
console.log(producto.concat("en descuento"));

console.log(producto + "con un precio de " + precio);

console.log("El producto " + producto + " tiene el precio de: " + precio);
console.log("El producto ", producto, " tiene el precio de: ", precio);

console.log(`El producto ${producto} tiene un precio de $ ${precio}`);
