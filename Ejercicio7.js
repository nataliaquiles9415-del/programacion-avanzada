const plataforma = {
    nombre: "IntelFlix",
    plan: "Premium",
    usuario: {
        nombre: "Natalia",
        edad: 20,
    },
    perfiles: [
        {
            nombre: "Natalia",
            favoritos: ["Dark", "Breaking Bad"],
            historial: ["Dark"],
        },
        {
            nombre: "Camila",
            favoritos: ["Gossip Girl", "Stranger Things"],
            historial: [],
        },
    ]
};

// 1. Muestra el nombre
console.log("Usuario principal: " + plataforma.usuario.nombre);


let nuevoPlan = "Basico"; 
if (nuevoPlan !== plataforma.plan) {
    plataforma.plan = nuevoPlan; 
}


let nuevaSerie = "UP";
let existeSerie = false;

for (let i = 0; i < plataforma.perfiles[0].favoritos.length; i++) {
    if (plataforma.perfiles[0].favoritos[i] === nuevaSerie) {
        existeSerie = true;
    }
}

if (!existeSerie) {
    plataforma.perfiles[0].favoritos.push(nuevaSerie);
}

if (plataforma.perfiles[0].historial.length > 0) {
    for (let i = 0; i < plataforma.perfiles[0].historial.length; i++) {
        console.log("Historial:", plataforma.perfiles[0].historial[i]);
    }
} else {
    console.log("Historial vacio");
}

// 5. Mayor o menor de edad
if (plataforma.usuario.edad >= 18) {
    console.log(plataforma.usuario.nombre + " es mayor de edad.");
} else {
    console.log(plataforma.usuario.nombre + " es menor de edad.");
}