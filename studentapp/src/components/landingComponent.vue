<template>
    <div class="row d-flex">
        <ul class="d-flex text-center justify-content-center">
            <h1 class=" btn-success text-center "> landing component here </h1>

            <li  class="btn  "><router-link class="btn btn-warning" to="/">home</router-link></li>
            <li  class="btn  "><router-link class="btn btn-warning" to="/about">About</router-link></li>
            <li  class="btn  "><router-link class="btn btn-warning" to="/contact">contact</router-link></li>
            <li  class="btn  "><router-link class="btn btn-warning" to="dynamic">dynamic</router-link></li>
        </ul>
    </div>
      <div class="row">
        <router-view></router-view>
    </div>
    
</template>