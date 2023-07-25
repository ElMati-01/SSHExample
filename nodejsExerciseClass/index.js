const express = require("express");
const cors= require("cors");
const app = express();
const port = process.env.port || 3030;

app.use(cors())
app.use(express.json());


const materiales = [
    {id: 1, nombre:"Borrador", precio:8000, disponible: true},
    {id: 2, nombre: "Lapicero", precio: 2000, disponible: false},
    {id: 3, nombre: "Marcador", precio: 10000, disponible: true},
    {id: 4, nombre: "Calculadora", precio: 89000, disponible: false},

];

app.get("/", (req, res)=> {

    res.send("Bienvenidos a la paleleria");
});

app.get("/api/materiales", (req,res)=> {
    res.send(materiales);
});

app.get("/api/materiales/:id", (req,res)=>{
    const implemento = materiales.find((e) => e.id === parseInt(req.params.id));
    if(!implemento)
      return res
       .status(404)
       .send("Implemento no encontrado en nuestra base de datos");
    else res.send(implemento);
});



app.post("/api/materiales", (req, res) => {
    const mater = {
        id: materiales.length + 1,
        nombre: req.body.nombre,
        precio: parseInt(req.body.precio),
        disponible: req.body.disponible === true,

    };

    materiales.push(mater);
    res.send(mater);
});

app.put("/api/materiales/:id", (req, res) => {
    const implemento= materiales.find((e) => e.id === parseInt(req.params.id));
    if (!implemento)
        return res
            .status(404)
            .send("Implemento no encontrado en nuestra base de datos");

    implemento.nombre = req.body.nombre;
    implemento.precio = parseInt(req.body.precio);
    implemento.disponible = req.body.disponible === true;

    res.send(implemento);
});

app.delete("/api/materiales/:id", (req, res) => {
    const implemento = estudiantes.find((d) => d.id === parseInt (req.params.id));
    if(!implemento)return res.status(404).send("Implemento no encontrado");
    else res.send(implemento);

    const index = materiales.indexOf(implemento);
    materiales.splice(index, 1);
    res.send(implemento);
});

app.listen(port, () => console.log ("Escuchando el puerto: ", port));