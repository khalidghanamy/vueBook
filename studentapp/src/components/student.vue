<template>
  <template>{{loadStudent($route.params.id)}}</template>

  <div class=" d-flex text-center justify-content-center">
      <ul class=" m-0  w-50">
          <li class=" list-group-item">Student Details :  </li>
          <li class=" list-group-item">id : {{stdid}}</li>
          <li class=" list-group-item">name : {{stdname}}</li>
          <li class=" list-group-item">  citey : {{stdcity}}</li>
         
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            stdid:'',
            stdname:'',
            stdcity:'',
        }
    },
    methods:{

        async loadStudent(_id){

          const res=  await fetch(`http://localhost:5000/students/${_id}`);

                let obj =await res.json();
                this.stdid=obj.id;
                this.stdname=obj.name;
                this.stdcity=obj.city;
        }
    }


}
</script>

<style>

</style>