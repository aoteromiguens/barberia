const { createApp } = Vue
  createApp({
    data() {
      return {
        servicios:[],
        //url:'http://localhost:5000/productos', 
   // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
        url:'https://aoteromiguens.pythonanywhere.com/servicios',   // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /*atributos para el guardar los valores del formulario */
        id:0,
        nombre:"", 
        imagen:"",
        descripcion:"",
        precio:0,
        mostrar_precio:0,
        
        calcular_descuento:0,
        seleccionados: [],
    }  
    },

    computed: {
        serviciosSeleccionados() {
          return this.servicios.filter(servicio => this.seleccionados.includes(servicio.id)).map(servicio => servicio.precio)
        },
        descuento(){
            mostrar = ""
            switch (this.seleccionados.length){
                case 0:
                    this.calcular_descuento=0;
                    mostrar ="Se aplicará un descuento del 10% cuando se contrate dos servicios, del 20% cuando se contraten 3 servicios, del 30% cuando se contraten 4 servicios, del 40% cuando se contraten 5 servicios y del 50% cuando se contraten más de 5 servicios.";
                  break;
                case 1:
                    this.calcular_descuento=0;
                    mostrar ="Se aplicará un descuento del 10% cuando se contrate dos servicios, del 20% cuando se contraten 3 servicios, del 30% cuando se contraten 4 servicios, del 40% cuando se contraten 5 servicios y del 50% cuando se contraten más de 5 servicios.";
                  break;
                case 2:
                    this.calcular_descuento=10;
                    mostrar ="Aplica un descuento del 10%";
                  break;
                case 3:
                    this.calcular_descuento=20;
                    mostrar ="Aplica un descuento del 20%";
                  break;
                  case 4:
                    this.calcular_descuento=30;
                    mostrar ="Aplica un descuento del 30%";
                  break;
                case 5:
                    this.calcular_descuento=40;
                    mostrar ="Aplica un descuento del 40%";
                  break;
                  
                  
            
                default:
                    this.calcular_descuento=50;
                    mostrar ="Aplica un descuento del 50%";
                    
              }
            return mostrar;
        },
        total() {
            variable = this.serviciosSeleccionados.reduce((sum, precio) => sum + precio, 0);  
            this.mostrar_precio = variable;   
          return variable
        },
        precio_total(){
            mostrar = this.mostrar_precio * (1-(this.calcular_descuento/100));
            return mostrar;
        }

      },




    methods: {
        fetchData(url) {
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.servicios = data;
                this.cargando=false
            })
            .catch(err => {
                console.error(err);
                this.error=true              
            })
    },
    eliminar(id) {
        const url = this.url+'/' + id;
        var options = {
            method: 'DELETE',
        }
        fetch(url, options)
            .then(res => res.text()) // or res.json()
            .then(res => {
         alert('Registro Eliminado')
                location.reload(); // recarga el json luego de eliminado el registro
            })
    },
    cancelar(){
        alert('Operación cancelada');
        window.location.href = 'admin.html';
    },
    
    grabar(){
        let servicio = {
            nombre:this.nombre,
            precio: this.precio,
            descripcion: this.descripcion,
            imagen:this.imagen
        }
        var options = {
            body:JSON.stringify(servicio),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow'
        }
        fetch(this.url, options)
            .then(function () {
                alert("Registro grabado")
                window.location.href = "./admin.html";  // recarga productos.html
            })
            .catch(err => {
                console.error(err);
                alert("Error al Grabar")  // puedo mostrar el error tambien
            })      
    }
},
created() {
    this.fetchData(this.url)
},
}).mount('#app')


