const { createApp } = Vue

  createApp({
    data() {
      return {
       
        clima:[],
        url:"https://api.openweathermap.org/data/2.5/weather?lat=-34.61&lon=-58.37&appid=cf0a45575b88f6bd6ec6f9c302c24ee6&units=metric",   
     }
    },
    methods: {
        fetchData(url) {  // necesite un async y await porque seguia de largo y no me cargaba el array recipes ni las listas desplegables
         fetch(url) 
           .then(response => response.json()) 
           .then(data => {
                clima = data
                console.log(clima)
           })
           .catch(error=>alert("Ups... se produjo un error: "+ error))
       },
     },
    created() {
     this.fetchData(this.url)  
    }
  }).mount('#app')