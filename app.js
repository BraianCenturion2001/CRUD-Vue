const app = new Vue({

    //Anclamos al div
    el: '#app',

    //Datos
    data: {
        titulo: 'Agregar Tareas',
        tareas: [],
        nuevaTarea: ''
    },

    //Funciones
    methods:{
        //Añadimos la nueva Tarea
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })

            this.nuevaTarea = ''
        },
        //Cambiamos el estado de la Tarea
        editarTarea: function(index){
            this.tareas[index].estado = true;
        },
        //Eliminamos la Tarea
        eliminarTarea: function(index){
            this.tareas.splice(index, 1);
        }
    }
})