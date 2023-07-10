window.onload=DocumentoCargado; 
let servicios = [[0,1000],[0,1000],[0,1500],[0,1000],[0,1000],[0,1000]];
let precioTotal = 0;


function DocumentoCargado(){
  let checkboxP1 = document.getElementById("P1"); 
  checkboxP1.onclick = checkboxP1Apretado;
  let checkboxP2 = document.getElementById("P2"); 
  checkboxP2.onclick = checkboxP2Apretado;
  let checkboxP3 = document.getElementById("P3"); 
  checkboxP3.onclick = checkboxP3Apretado;
  let checkboxP4 = document.getElementById("P4"); 
  checkboxP4.onclick = checkboxP4Apretado;
  let checkboxP5 = document.getElementById("P5"); 
  checkboxP5.onclick = checkboxP5Apretado;
  let checkboxP6 = document.getElementById("P6"); 
  checkboxP6.onclick = checkboxP6Apretado;

  
  Mostrar();
};

function checkboxP1Apretado()
{
  
  if(document.getElementById("P1").checked == true)
   {    servicios[0][0] = 1; }
   else   {    servicios[0][0] = 0;   }
   Mostrar();
};
function checkboxP2Apretado()
{
  
  if(document.getElementById("P2").checked == true)
   {    servicios[1][0] = 1; }
   else   {    servicios[1][0] = 0;   }
   Mostrar();
};
function checkboxP3Apretado()
{
  
  if(document.getElementById("P3").checked == true)
   {    servicios[2][0] = 1; }
   else   {    servicios[2][0] = 0;   }
   Mostrar();
};
function checkboxP4Apretado()
{
  
  if(document.getElementById("P4").checked == true)
   {    servicios[3][0] = 1; }
   else   {    servicios[3][0] = 0;   }
   Mostrar();
};
function checkboxP5Apretado()
{
  
  if(document.getElementById("P5").checked == true)
   {    servicios[4][0] = 1; }
   else   {    servicios[4][0] = 0;   }
   Mostrar();
};
function checkboxP6Apretado()
{
  
  if(document.getElementById("P6").checked == true)
   {    servicios[5][0] = 1; }
   else   {    servicios[5][0] = 0;   }
   Mostrar();
};


function Mostrar(){
  let precio = calcularPrecio()
  let cantContratados = contarContratados();
  let descuento = calcularDescuento(cantContratados);
  MostrarPrecio(precio);
  mostrarDescuento(cantContratados);
  MostrarPrecioTotal(precio*descuento);
};

function MostrarPrecio(precio){
  let formateado = precio.toLocaleString("en");
  document.getElementById("precio").innerHTML="Precio antes del descuento: $ "+formateado;
};
function MostrarPrecioTotal(precio){
  let formateado = precio.toLocaleString("en");
  document.getElementById("preciototal").innerHTML="Precio con el descuento: $ "+formateado;
};

function calcularDescuento(cantContratados){
  let descuento = 1;
  if (cantContratados != 0) return descuento-((cantContratados-1)*.1);
  return descuento;

};


function calcularPrecio(){
  let precio = 0;
  
  for (let i in servicios){
    precio += servicios[i][0] * servicios[i][1];
    
  }

 return precio;

};

function contarContratados(){
  let cantidadof = 0;
 
  for (let i in servicios){
    cantidadof += servicios[i][0];
    
  }
  
  return cantidadof;
}


function mostrarDescuento(cantContratados){
  
  switch (cantContratados){
    case 2:
      document.getElementById("descuento").innerHTML= "Aplica un descuento del 10%";
      break;
    case 3:
      document.getElementById("descuento").innerHTML= "Aplica un descuento del 20%";
      break;
      case 4:
      document.getElementById("descuento").innerHTML= "Aplica un descuento del 30%";
      break;
    case 5:
      document.getElementById("descuento").innerHTML= "Aplica un descuento del 40%";
      break;
      case 6:
      document.getElementById("descuento").innerHTML= "Aplica un descuento del 50%";
      break;
      

    default:
      document.getElementById("descuento").innerHTML= "Se aplicará un descuento del 10% cuando se contrate dos servicios, del 20% cuando se contraten 3 servicios, del 30% cuando se contraten 4 servicios, del 40% cuando se contraten 5 servicios y del 50% cuando se contraten 6 servicios.";
  }}


