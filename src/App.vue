<script setup>
import DbCount from './components/molecules/DbCount.vue';
</script>

<template>
  <header>
  </header>
  <nav class="grid justify-items-center">
    <img class="h-10" alt="My Image" src="../src/assets/banner_mdc.png" />
    <ul class="menu menu-horizontal rounded-box">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/marcha">Marcha</RouterLink></li>
      <li><RouterLink to="/autor">Autor</RouterLink></li>
      <li><RouterLink to="/banda">Banda</RouterLink></li>
      <li><RouterLink to="/disco">Disco</RouterLink></li>
      <li><RouterLink to="/estadisticas">Estadisticas</RouterLink></li>
    </ul>  
  </nav>
  <body class="grid justify-items-center pb-10">    
    <div>
      <RouterView />
    </div>
  </body>
  <footer class="grid justify-items-center pb-10">
    <DbCount />
  </footer>
</template>
