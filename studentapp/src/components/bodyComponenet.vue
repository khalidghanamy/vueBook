<template>

  <addComponent @comingData="saveNewData" />

  <table class="table table-bordered table-striped text-center">
    <thead class="thead-light">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>City</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{ student.id }}</td>
        <td><router-link :to="'/student/'+student.id">{{ student.name }}</router-link></td>
        <td>{{ student.city }}</td>
        <td><i class="fa-solid fa-circle-xmark" @click.ctrl="deleteStudent(student.id)"></i> | <i class="fa-solid fa-pen-to-square" @click="addDataToModal(student)" data-bs-toggle="modal" data-bs-target="#mymodal"></i> </td>



        <div class="row">
    <!-- Modal -->
    <div class="modal fade" id="mymodal" tabindex="0" aria-labelledby="mymodalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="mymodalLabel">Add  Data</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- start of the fom -->
                    <form class="col-12 w-75 m-auto my-2">
                        <div class="input-group col-12">
                                                      <i class="fa-solid fa-newspaper input-group-append input-group-text" hidden="true"></i>

                            <input type="text" class="form-control" v-model="stdcity"  placeholder="id" hidden="true"/>
                        </div>
                        <div class="input-group col-12">
                            <i class="fa-solid fa-newspaper input-group-append input-group-text"></i>
                            <input type="text" class="form-control" v-model="stdname"  placeholder="name" />
                        </div>
                        <div class="input-group col-12">
                            <i class="fa-solid fa-newspaper input-group-append input-group-text"></i>
                            <input type="text" class="form-control" v-model="stdcity"  placeholder="city" />
                        </div>
                    </form>
                    <!-- end of the form -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" @click="updateStudent()">
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="3">Number of students : {{ students.length }}</th>
      </tr>
    </tfoot>
  </table>
  
</template>

<script>
import addComponent from './addComponent.vue'

export default {
  data: () => ({
    stdId:"",
    stdname:"",
    stdcity:"",
    
    students: [],
  }),
  methods: {

   async saveNewData(data){

            await fetch ("http://localhost:5000/students",  {

              method:"POST",
              headers:{
                "content-type":"application/json"
              },
              
                body:JSON.stringify(data)
              
            });
            //update UI:
            this.students.push(data);

    },
    async deleteStudent(_id){

            await fetch (`http://localhost:5000/students/${_id}`,  {

              method:"DELETE",
              headers:{
                "content-type":"application/json"
              },
              
               
            });
            this.students=this.students.filter(std=>std.id!=_id);

    },
    async updateStudent(_id){

                  let updatedObject={id:this.stdId,name:this.stdname,city:this.stdcity};
            await fetch (`http://localhost:5000/students/${this.stdId}`,  {

              method:"PUT",
              headers:{
                "content-type":"application/json"
              },
              
               body:JSON.stringify(updatedObject)
            });
            this.students.find(std=>std.id==this.stdId).name=this.stdname;
            this.students.find(std=>std.id==this.stdId).city=this.stdcity;

    },
    addDataToModal(student){

            this.stdId=student.id;
            this.stdname=student.name;
            this.stdcity=student.city;

    }

    
  },
  async created(){

          const res= await fetch("http://localhost:5000/students");
            this.students= await res.json();
  },
  computed: {},
  components: {
    addComponent,
   
  },
};
</script>

<style scoped>
.fa-circle-xmark{
  color:red;
  cursor: pointer;
}
.fa-pen-to-square{
  color: yellowgreen;
  cursor: pointer;

}

</style>
