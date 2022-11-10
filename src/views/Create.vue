<template>
    <div class="create">
      <div class="container container1">
      
        <input type="text" class="create__input" v-model="title">
        <button class="create__button" v-on:click="addTask(title)">Create</button>
      </div>
    </div>
</template>
<script>
export default {
   name : "CreateVue" ,
   data(){
    return{
        title : "",
        
    }
   },
   methods : {
    addTask(text){
        this.$store.commit("addTodo",text)
        this.title = "";
    },

       
    }
   }

</script>
<style lang="scss">
    .create {
        padding: 15px 0;

		// .create__input

		&__input {
            width: 100%;
            height: 60px;
            border-radius: 3rem;
            border: none;
            background: rgb(2,0,36);
            background: linear-gradient(66deg, rgba(2,0,36,1) 0%, rgba(208,32,203,1) 11%, rgba(0,212,255,1) 100%);
            padding: 10px 20px;
            color: white;
            margin-bottom: 20px;
            &:hover,&:focus,&:active{
                outline: none;
            }
		}
        &__button{
            background: rgb(2,0,36);
            background: linear-gradient(66deg, rgba(2,0,36,1) 0%, rgba(208,32,203,1) 11%, rgba(0,212,255,1) 100%);
            width: 150px;
            height: 40px;
            border: none;
            border-radius: 3rem;
            color: white;
            font-size: 20px;

        }
}
.container1 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

</style>