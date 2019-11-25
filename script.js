const tareasVue = new Vue({
    el:"#app",
    data:{
        tareas:[],
        editar: false
    },
    methods:{
        addItem: function (){
            const item = document.getElementById('dato')
            if(item.value !==''){
                this.tareas.push({
                    dato:item.value
                })
                return item.value = ''
            }
        },
        deleteItem: function(a){
            this.tareas.splice(a,1)
        },
        editItem: function(a){
            a.stopPropagation()
            this.editar = true
        },
        doneEdit: function(){
            this.editar=false
        }
    },
    
})
