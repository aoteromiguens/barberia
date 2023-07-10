const { createApp } = Vue

  createApp({
    data() {
      return {
       
        servicios:[],
        url:"./barberia.json",   
     }
    },
    methods: {
        fetchData(url) {
         fetch(url) 
           .then(response => response.json()) 
           .then(data => {
                this.servicios = data
                console.log(this.servicios)
           })
           .catch(error=>alert("Error "+ error))
       },
     },
    created() {
     this.fetchData(this.url)  
    }
  }).mount('#app')