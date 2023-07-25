function generarTablaMateriales () {
    const tbody= document.getElementById("tbody-materiales");
    
    fetch("http://localhost:3030/api/materiales")
    
     .then(response => response.json())
     .then(materiales => {
        materiales.forEach(function (material) {
        const fila= tbody.insertRow();
        const celdaId= fila.insertCell();
        const celdaNombre= fila.insertCell();
        const celdaPrecio= fila.insertCell();
        const celdaDisponible= fila.insertCell();
    
        celdaId.textContent= material.id;
        celdaNombre.textContent= material.nombre;
        celdaPrecio.textContent= material.precio;
        celdaDisponible.textContent= material.disponible;
    });
})

}



generarTablaMateriales();