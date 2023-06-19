fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const tarjetasContainer = document.getElementById("tarjetas-container");

    data.forEach(Objecto => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("card");

      const titulo = document.createElement("h2");
      titulo.textContent = Objecto.titulo;

      const contenido = document.createElement("p");
      titulo.textContent = Objecto.contenido;

      tarjeta.appendChild(titulo);
      tarjeta.appendChild(contenido);

      tarjetasContainer.appendChild(tarjeta);
    });
  })
 
  .catch(error=> console.error(error));
