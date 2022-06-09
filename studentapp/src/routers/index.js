import {createRouter,createWebHistory} from 'vue-router'

// import required components:
import MainComponent from "../MainComponent.vue"
import contactComponent from "../components/toDynamic/contactComponent.vue"
import dynamicComponent from "../components/toDynamic/dynamicComponent.vue"
import aboutComponent from "../components/toDynamic/aboutComponent.vue"
import catchComponent from "../components/catchComponent.vue"
import students from "../components/student.vue"

 // create routes array:

 const routes=[

    {path:'/',component:MainComponent},
    {path:'/about',component:aboutComponent},
    {path:'/contact',component:contactComponent},
    {path:'/dynamic',component:dynamicComponent},
    {path:'/student/:id',component:students,props:true},
    {path:'/:catchAll(.*)',component:catchComponent},
    
 ];

 // create router object:

 const router= createRouter({
     history:createWebHistory(),
     routes
 });

 // export router object

 export default router;