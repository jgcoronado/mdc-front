<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const estado = ref('');

onMounted( async () => {
  const apiUrl = `${BASE_URL}/stats/estado`;
  const res = await axios.get(apiUrl);
  estado.value = res.data;
  console.log("🚀 ~ estado.value:", estado.value)
  
});

</script>
<template>
    <div>Dimensión de la base de datos:
        {{ estado[0].MARCHAS }} marchas,
        {{ estado[0].AUTORES }} autores,
        {{ estado[0].BANDAS }} bandas y
        {{ estado[0].DISCOS }} discos.
    </div>
</template>