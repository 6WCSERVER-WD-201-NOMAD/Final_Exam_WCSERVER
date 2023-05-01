<template>
  <div id="app">
   <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">NOMAD</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
            <span class="visually-hidden">(current)</span>
          
        </li>
        <li class="nav-item">
          <router-link to="/services" class="nav-link">Services</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contacts" class="nav-link">Contacts</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/appointment" class="nav-link">Appointment</router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link" to="/list">View Clients</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-view/>
  </div>
  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

</style>
