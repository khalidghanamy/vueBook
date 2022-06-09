<template>
  <ul class="list-group">
    <li class="list-group-item">
      <a class="btn btn-success px-5" href="#" @click.prevent="targetPage = ''"
        >home</a
      >
    </li>
    <li class="list-group-item">
      <a
        class="btn btn-primary px-5"
        href="#"
        @click.prevent="targetPage = 'aboutComponent'"
        >About</a
      >
    </li>
    <li class="list-group-item">
      <a
        class="btn btn-danger px-5"
        href="#"
        @click.prevent="targetPage = 'contactComponet'"
        >Contact</a
      >
    </li>
  </ul>
  <component :is="targetPage" />
</template>

<script>
import mainComponet from "../MainComponent.vue";
import aboutComponent from "./toDynamic/aboutComponent.vue";
import contactComponet from "./toDynamic/contactComponent.vue";

export default {
  data() {
    return {
      targetPage: "home",
    };
  },
  components: {
    mainComponet,
    aboutComponent,
    contactComponet,
  },
};
</script>

<style scoped></style>
