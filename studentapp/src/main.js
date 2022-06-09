import { createApp } from 'vue'
// import App from './App.vue'
import  mainComponet  from './MainComponent.vue'
import  landingComponent  from './components/landingComponent.vue'
import  router  from './routers/index.js'
// import  dynamicComponent  from './components/dynamicComponent.vue'

createApp(landingComponent).use(router).mount('#app')
// createApp(dynamicComponent).mount('#app')
