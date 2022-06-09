<template>
  <div class="row d-flex justify-content-center mt-5 col-12">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary col-4"
      style="width: 10 rem"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add student
    </button>
  </div>

  <div class="row">
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="0"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add your Data</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- start of the fom -->
            <form class="col-12 w-75 m-auto my-2">
              <!-- <div class="input-group col-12">
                <i
                  class="input-group-append input-group-text"
                  >ID : </i
                >
                <input
                  type="text"
                  class="form-control"
                 
                  v-model="student.id"
                  placeholder="id"
                />
              </div> -->
              <div class="input-group col-12">
                <i
                  class="input-group-append input-group-text fa-solid fa-user"
                  ></i
                >
                <input
                  type="text"
                  class="form-control"
                 
                  v-model="student.name"
                  placeholder="name"
                />
              </div>
              <div class="input-group col-12">
                <i
                  class=" input-group-append input-group-text fa-solid fa-city"
                  ></i
                >
                <input
                  type="text"
                  class="form-control"
                
                  v-model="student.city"
                  placeholder="city"
                />
              </div>
            </form>
            <!-- end of the form -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="dontSave()"
            >
              Close
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="sendData()"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end of modal -->
</template>

<script>

export default {
  data() {
    return {
        
      student: {
       
        name: "",
        city: "",
      },
    };
  },

  methods: {
   
   sendData(){
       this.$emit("comingData",this.student);
   }
   
  },
  
};
</script>

<style></style>
