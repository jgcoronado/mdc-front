<script setup>
import { onMounted, computed, ref } from 'vue';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const estado = ref('');

onMounted( async () => {
    const apiUrl = `${BASE_URL}/stats/estado`;
    const res = await axios.get(apiUrl);
    estado.value = res.data; 
});
</script>
<template>
    <div>Dimensión de la base de datos:
        {{ estado.MARCHAS }} marchas,
        {{ estado.AUTORES }} autores,
        {{ estado.BANDAS }} bandas y
        {{ estado.DISCOS }} discos.
    </div>
</template>