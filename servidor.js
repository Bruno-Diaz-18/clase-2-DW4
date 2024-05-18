//main.js
import express from 'express';

const app = express ();
const puerto = 3000;

let data = [
    { id: 1, name: 'Objeto 1'},
    { id:2, name: 'Objeto 2'},
    ];

//Ruta de data
app.get ('/api/object'  , (req, res) => {
    res.json(data);
    });

//Ruta principal
app.get('/', (req, res) => {
res.send ('Hola, mundo con Express!');
});

//Iniciar el servidor
app.listen(puerto, () => {
console.log('Servidor en funcionamiento en el puerto ${puerto}');
});