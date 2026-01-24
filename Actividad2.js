const producto = {
nombre : "celular",
precio : 12500,
cantidad : 1
};
const  subtotal = producto.precio * producto.cantidad;
const iva = subtotal * 0.16;
const total = subtotal + iva;

console.log("Producto:", producto.nombre);
console.log("Subtotal: $", subtotal);
console.log("IVA:", iva);
console.log("Total a pagar:", total);