const alumno = {
nombre : "Natalia",
semestre : 6,
calif1 : 8,
calif2 : 9,
calif3 : 7
};
const promedio = (alumno.calif1 + alumno.calif2 + alumno.calif3)/3;

const aprobado = promedio >= 6;

console.log("Promedio", promedio);
console.log("Aprobado", aprobado);

