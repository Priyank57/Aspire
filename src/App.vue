<template>
  <section class="main-wapper" id="nav">
    <sidebar-component />
    <router-view />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Sidebar from "./components/sidebar.vue";
@Options({
  components: {
    "sidebar-component": Sidebar,
  },
})
export default class App extends Vue {}
</script>

