const { createApp } = Vue

  createApp({
    data() {
      return {
       
        servicios:[],
        url:"./Prueba-API/barberia.json",   
     }
    },
    methods: {
        fetchData(url) {  // necesite un async y await porque seguia de largo y no me cargaba el array recipes ni las listas desplegables
         fetch(url) 
           .then(response => response.json()) 
           .then(data => {
                this.servicios = data
                console.log(this.servicios)
           })
           .catch(error=>alert("Ups... se produjo un error: "+ error))
       },
     },
    created() {
     this.fetchData(this.url)  
    }
  }).mount('#app')