
// Crear una promesa que se resuelve después de 2 segundos
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa cumplida");
  }, 2000); 
});


miPromesa.then((mensaje) => {
  console.log(mensaje); 
});
