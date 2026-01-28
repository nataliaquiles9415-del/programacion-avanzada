const tickets = {
  id: "TCK-001",
    titulo: "Error en impresora",
    estado: "abierto",
    prioridad: "alta",
    area: "Sistema",
    fecha: "2024-06-15-10:30:00",
    creador: {
        nombre: "Jacob",
        email: "jacob@gmail.com",
    },
    asignados: ["Andres", "Ana"],
    comentarios:[
        {usuario: "Ana", mensaje: "Revisando el equipo" },
        {usuario: "Andres", mensaje: "Falta tóner" },
    ],
};
//Muestra el titulo y ek estado en consola 
console.log(tickets.titulo, tickets.estado);

//Cerrar solo si esta abierto
if(tickets.estado ==="abierto"){
    tickets.estado = "cerrado";
}

//agregar comentario solo si el mensaje no esta vacio
let nuevoMensaje = "Problema solucionado";

if(nuevoMensaje !== ""){
tickets.comentarios.push({
    usuario: "pedro",
    mensaje: nuevoMensaje,
});
}

//mostrar asignado solo si hay asignado
if(tickets.asignados.length > 0){
    for(let i = 0; i < tickets.asignados.length; i++){
console.log("Asignado:", tickets.asignados[i]);
    }
}

//cambiar prioridad solo si es valida
let nuevaPrioridad = "media";

if(
nuevaPrioridad === "alta" ||
nuevaPrioridad === "media" ||
nuevaPrioridad === "baja"
){
    tickets.prioridad = nuevaPrioridad;
}

//verificar si ana ya comento
let anaComento = false;
 
for(let i = 0; i < tickets.comentarios.length; i++){
    if(tickets.comentarios[i].usuario == "Ana"){
        anaComento = true;
    }
}

if(anaComento){
    console.log("Ana ya comento en el ticket");
}else{
    console.log("Ana no ha comentado");
}

