<template>
    <div class="home">
        <div class="container">
            <div class="home__card card-home"  v-for="(task, index) in $store.state.todoList" :key="task">
                <div class="card-home__title">{{ task.title}}</div>
                <div class="card-home__buttons">
                    <button class="card-home__done" @click="doneTodo(index)"><font-awesome-icon icon="fa-solid fa-check" /></button>
                    <button class="card-home__delete" @click="deleteTask(index)"><font-awesome-icon icon="fa-solid fa-xmark" /></button>

                </div>
            </div>
         
        </div>
    </div>
  
</template>
<script>
export default {
    name : "HomeVue",
    data(){
        return{
       
        }
    },
    
    methods : {
        // save(){
        //     localStorage.setItem("VUE-Tasks" , JSON.stringify(this.$store.state.todoList))
        // },
        doneTask(i){
            let todos = this.$store.state.todoList;
            todos[i].done = !todos[i].done;
            todos.splice(i , 1);
            // this.save();    
        },
        deleteTask(i){
           this.$store.commit('deleteTodo' , i)
        },
        doneTodo(i){
            this.$store.commit('doneTodo' , i)
        }
          
    }
   
}
</script>
<style lang="scss">
    .home {
        padding: 2rem 0;
    }
    .card-home {
        margin-bottom: 15px;
        width: 100%;
        min-height: 3.5rem;
        border-radius: 2rem;
        background: rgb(2,0,36);
        background: linear-gradient(66deg, rgba(2,0,36,1) 0%, rgba(208,32,203,1) 11%, rgba(0,212,255,1) 100%);
        display: flex;
        padding: 10px 20px;
        align-items: center;
        justify-content: space-between;
        // .card-home__title
        &__title {
            font-size: 22px;
            color: white;
        }
        // .card-home__buttons
        &__buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 50px;
        }
        // .card-home__delete
        &__delete {
            width: 40px;
            height:40px;
            border-radius: 50%;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
            transition: all 0.5s ease 0s;
            &:hover{
                background-color: #000;
                color: #fff;
            }
        }
       // .card-home__done
        &__done {
            width: 40px;
            height:40px;
            border-radius: 50%;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.5s ease 0s;
            &:hover{
                background-color: #000;
                color: #fff;
            }
        }
    }

</style>