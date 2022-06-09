<template>
  <div class="container">
    <div class="row my-2">
      <div class="col-12 bg-warning text-light g-0">
        <headerComponenet/>
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <listComponenet/>
      </div>

      <div class="col-8">
       <bodyComponenet/>
      </div>
    </div>

    <div class="row">
      <div class="col-12 bg-primary text-light g-0">
        <footerComponenet/>
      </div>
    </div>
  </div>

  <!-- router -->

  <div class="row" >

  </div>
</template>


<script>
import headerComponenet from './components/headerComponent.vue'
import listComponenet from './components/listComponent.vue'
import bodyComponenet from './components/bodyComponenet.vue'
import footerComponenet from './components/footerComponent.vue'

export default {
  data: () => ({}),
  methods: {},
  computed: {},
  components: {
    headerComponenet,
    listComponenet,
    bodyComponenet,
    footerComponenet
  },
};
</script>
