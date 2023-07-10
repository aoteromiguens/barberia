let agreg = `<div class="container-servis">
<div class="grid-container">
  <h1 class="nur">NUESTROS SERVICIOS</h1>`

for (let elemento of datos){
    agreg += `       
    <div class="grid-item">
    <div class="image-container">
      <img src="${elemento.imagen}" alt="${elemento.servicio}">
    </div>
    <div class="content-container">
      <input type="checkbox" id="P1">
      <label for="checkbox1">${elemento.servicio} $${elemento.precio}</label>
    </div>
  </div>
`
}
agreg += `</div>
    
<div id="descuento">

</div>

<div id="preciototal">

</div>

</div>`
document.querySelector("main").innerHTML = agreg