//Cuando ocurre el evento página Web cargada el navegador llama a la función DocumentoCargado()
window.onload=DocumentoCargado; 



//En esta función se capturan todos los eventos requeridos por el script
function DocumentoCargado(){
   let checkboxP1 = document.getElementById("P1"); //obtiene los elementos del documento html y los asigna a variables
   let checkboxP2 = document.getElementById("P2"); 
   let checkboxP3 = document.getElementById("P3");
   let checkboxP4 = document.getElementById("P4");
   let checkboxP5 = document.getElementById("P5"); 
   let checkboxP6 = document.getElementById("P6");  
   
   //alert(algo);
   
   checkboxP1.onclick = checkboxP1Apretado; 
   checkboxP2.onclick = checkboxP2Apretado;
   checkboxP3.onclick = checkboxP3Apretado;
   checkboxP4.onclick = checkboxP4Apretado; 
   checkboxP5.onclick = checkboxP5Apretado;
   checkboxP6.onclick = checkboxP6Apretado;

   MostrarPrecioTotal(); // llama a la función 
}
//Cuando el usuario aprieta el checkbox, se debe mostrar u ocultar el objeto select


// En base a los checkbox y los objetos select, esta función calcula el precio total
function MostrarPrecioTotal()
{
  
  let precio = 0;
  let porcentajeDescuento = 0;
  let servicios = ["Afeitado","Claritos","Corte","Lavado","Modelado","Spa"];
  let precioAfeitado = 1000;
  let precioClaritos = 1000;
  let precioCote = 1500;
  let precioLavado = 1000;
  let precioModelado = 1000;
  let precioSpa = 1000;
  let contratados = [0,0,0,0,0,0]
  
  



  if (document.getElementById("P1").checked) {

    contratados[0] = 1;
    alert(algo);
    }

    if (document.getElementById("P2").checked) {

      contratados[1] = 1;
      
      }

      if (document.getElementById("P3").checked) {

        contratados[2] = 1;
        
        } 



        if (document.getElementById("P4").checked) {

          contratados[3] = 1;
          
          }
          if (document.getElementById("P5").checked) {

            contratados[4] = 1;
            
            }
            if (document.getElementById("P6").checked) {

              contratados[5] = 1;
              
              }
precio = precioAfeitado * contratados[0] + precioClaritos * contratados[1] + precioCote * contratados[2]  + precioLavado * contratados[3] + precioModelado * contratados[4] + precioSpa * contratados[5];
  
let cantContratados = contar(contratados);
  

  mostrarDescuento(cantContratados);
  porcentajeDescuento = tipoDescuento(cantContratados);
  precio = (precio * (1-porcentajeDescuento));


  let formateado = precio.toLocaleString("en");  
  document.getElementById("preciototal").innerHTML= "Precio total: $" + formateado;

}

function contar(vector){
  return vector[0]+vector[1]+vector[2]+vector[3]+vector[4]+vector[5];
}


function  tipoDescuento(cantContratados){
  if (cantContratados == 3) return 0.2;
  if (cantContratados == 2) return 0.1;
  if (cantContratados == 4) return 0.3;
  if (cantContratados == 5) return 0.4;
  if (cantContratados == 6) return 0.5;
  return 0;
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
  }



  }





function presentarResumen(numTour,tour,precioTour){

  let textTour = "Precio base "+tour[0]+" = $"+ precioTour[0];
  let parcialAdulto = precioTour[1]*document.getElementById("cantP"+numTour).value;
  let textAdult = "Costo por adulto "+precioTour[1]+" X " + document.getElementById("cantP"+numTour).value+" = $"+parcialAdulto;
  let parcialMenor = precioTour[2]*document.getElementById("cantN"+numTour).value;
  let textMenor = "Costo por menor "+precioTour[2]+" X " + document.getElementById("cantN"+numTour).value+" = $"+parcialMenor;
  let parcialMayor = precioTour[3]*document.getElementById("cantM"+numTour).value;
  let textMayor = "Costo por adulto mayor "+precioTour[3]+" X " + document.getElementById("cantM"+numTour).value+" = $"+parcialMayor;
  let parciales =  parcialAdulto + parcialMenor + parcialMayor;
  let subtotal = 0;
  if (parciales>0) subtotal = precioTour[0] + parciales;
  let formateado = subtotal.toLocaleString("en");

  document.getElementById("tourP"+numTour).innerHTML = textTour ;
  document.getElementById("adultoP"+numTour).innerHTML = textAdult;
  document.getElementById("menorP"+numTour).innerHTML = textMenor;
  document.getElementById("adultoMayorP"+numTour).innerHTML = textMayor;
  document.getElementById("subTotalP"+numTour).innerHTML = "Subtotal: $"+formateado;


}


function hayGente(adulto, menorEdad, adultoMayor){
    return (document.getElementById(adulto).value > 0 || document.getElementById(adultoMayor).value > 0 || document.getElementById(menorEdad).value > 0 );
}

function calcularCostoTour(precioTour, adulto, menorEdad, adultoMayor){

    return precioTour[0] + precioTour[1] * document.getElementById(adulto).value + precioTour[2] * document.getElementById(menorEdad).value + precioTour[3] * document.getElementById(adultoMayor).value;

}


//Se ejecuta cuando cambia el valor del select
function selectP1personas()
{
  MostrarPrecioTotal();
}
function selectM1personas()
{
  MostrarPrecioTotal();
}
function selectN1personas()
{
  MostrarPrecioTotal();
}
function selectP2personas()
{
  MostrarPrecioTotal();
}
function selectM2personas()
{
  MostrarPrecioTotal();
}
function selectN2personas()
{
  MostrarPrecioTotal();
}

function selectP3personas()
{
  MostrarPrecioTotal();
}
function selectN3personas()
{
  MostrarPrecioTotal();
}
function selectM3personas()
{
  MostrarPrecioTotal();
}