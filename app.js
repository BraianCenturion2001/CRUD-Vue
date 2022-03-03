const app = new Vue({

    //Anclamos al div
    el: '#app',

    data: {
        titulo: 'Agregar Tareas',
        tareas: [],
        nuevaTarea: ''
    },

    methods:{
        agregarTarea: function(){
            //Añadimos la nueva Tarea
            console.log(this.nuevaTarea)
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })

            this.nuevaTarea = ''
        }
    }
})