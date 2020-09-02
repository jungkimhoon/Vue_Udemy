<template>
    <div class="container">
      <app-header></app-header>
      <hr>
      <div class="row">
        <app-server></app-server>
        <app-server-details></app-server-details>
      </div>
      <hr>
      <app-footer></app-footer>
    </div>
</template>

<script>
  import Header from './components/Shared/Header.vue';
  import Footer from './components/Shared/Footer.vue';
  import Servers from './components/Server/Servers.vue';
  import ServerDetails from "./components/Server/ServerDetails.vue";

  export default {
    components: {
      'app-header' : Header,
      'app-server' : Servers,
      'app-server-details' : ServerDetails,
      'app-footer' : Footer,
    }
  }
</script>

<style>

</style>

