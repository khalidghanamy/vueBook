<template>
<div class="row d-flex justify-content-center ">

        <div class="row d-flex bg-info justify-content-center mt-1">
      <a class="btn btn-success col-1 " href="#" @click.prevent="targetPage='mainComponet'">home</a>
      <a class="btn btn-primary col-1 " href="#" @click.prevent="targetPage='aboutComponent'">About</a>
      <a class="btn btn-danger col-1 " href="#" @click.prevent="targetPage='contactComponet'">Contact</a>
  </div>
  <keep-alive>
  <component :is="targetPage"/>
  </keep-alive>
</div>
</template>

<script>

import  mainComponet  from '../../MainComponent.vue'
import  aboutComponent  from './aboutComponent.vue'
import  contactComponet  from './contactComponent.vue'

export default {

    data(){
        return{
            targetPage:'home'
        }
      
    },  
    components:{
            mainComponet,aboutComponent,contactComponet
        }

}
</script>

<style>

</style>