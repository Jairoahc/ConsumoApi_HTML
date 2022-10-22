//Importar libreria express
const express = require ("express");
//Llamar una constante para ejecutar las funciones de express de manera mas fácil:
const app = express();
//Definir el puerto que se va a escuchar en una constante:
const port = 5000;

//Especificar las rutas y que funciones ejecutaran esas rutas, por ejemplo, get:

/* Por medio de un input el estudiante debe desarrollar una pagina web que consuma un api De su autoria con lo siguiente
En la pagina se debe recibir el nombre de una persona, pasarse al api y esta debe responder con un saludo {message: "Hola <el nombre> como estas?"}
 que sera impreso en la misma pagina web que debe recibir la respuesta
 */

 app.get("/apiJairo", (req, res) => {
 
    return res.status(200).json({message:`Hola ${req.query.name}, ¿Como estas?`})
})
 


 function getapi(){

    let name = document.getElementById("name").value

    fetch (`http://127.0.0.1:5000/apiJairo?name=${name}`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data)
    })
    
 } 



//Establecer a través de que puerto estará procesando o escuchando el servidor
app.listen(port,() => console.log(`Servidor escuchando el puerto ${port}` ))