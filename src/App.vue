<script setup>
</script>

<template>
  <header>
  </header>
  <nav class="grid justify-items-center">
    <ul class="menu menu-vertical lg:menu-horizontal rounded-box">
      <img class="h-10" alt="My Image" src="../src/assets/banner_mdc.png" />
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/marcha">Marcha</RouterLink></li>
      <li><RouterLink to="/autor">Autor</RouterLink></li>
      <li><RouterLink to="/banda">Banda</RouterLink></li>
      <li><RouterLink to="/disco">Disco</RouterLink></li>
    </ul>  
  </nav>
  <body class="grid justify-items-center">    
    <div>
      <RouterView :key="$route.fullPath" />
    </div>
  </body>
  <footer>
  </footer>
</template>
