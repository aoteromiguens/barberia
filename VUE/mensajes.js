const { createApp } = Vue
  createApp({
    data() {
      return {
        mensajes:[],
        //url:'http://localhost:5000/productos', 
   // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
        url:'https://aoteromiguens.pythonanywhere.com/mensajes',   // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /*atributos para el guardar los valores del formulario */
        id:0,
        
        
        
        
    }  
    },

    methods: {
      fetchData(url) {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            this.mensajes = data.map(mensaje => {
              return {
                ...mensaje,
                hora_envio: this.formatearFechaHora(mensaje.hora_envio)
              };
            });
            this.cargando = false;
          })
          .catch(err => {
            console.error(err);
            this.error = true;
          });
      },
      
      formatearFechaHora(fechaHoraIso) {
        const fechaHora = new Date(fechaHoraIso);
        const dia = fechaHora.getUTCDate().toString().padStart(2, "0");
        const mes = (fechaHora.getUTCMonth() + 1).toString().padStart(2, "0");
        const anio = fechaHora.getUTCFullYear().toString();
        const hora = fechaHora.getUTCHours().toString().padStart(2, "0");
        const minutos = fechaHora.getUTCMinutes().toString().padStart(2, "0");
        const segundos = fechaHora.getUTCSeconds().toString().padStart(2, "0");
        return `${dia}/${mes}/${anio} ${hora}:${minutos}:${segundos}`;
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
    
    grabar(var1,var2,var3,var4){
        const fechaHoraActual = new Date();
        let enviar = {
          email:var1,
          hora_envio:fechaHoraActual,
          leido:false,
          message:var2,
          name:var3, 
          phone:var4,
            
        }
        
        var options = {
            body:JSON.stringify(enviar),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow'
        }
        fetch(this.url, options)
            .then(function () {
                alert(new Date().toISOString())
                window.location.href = "./contacto.html";  // recarga productos.html
            })
            .catch(err => {
                console.error(err);
                alert("Error envio")  // puedo mostrar el error tambien
            })      
    }
},
created() {
    this.fetchData(this.url)
},
}).mount('#app')


