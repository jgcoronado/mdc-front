<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const apiData = ref('');

onMounted(async () => {
  const { id } = route.params;
  const apiUrl = `http://localhost:3000/marcha/${id}`; // Replace with your API endpoint URL
  
  axios.get(apiUrl)
    .then((response) => {
    apiData.value = response.data;
    })
    .catch((error) => {
    console.error('Error fetching data:', error);
  });
});
function goToAutor(id) {
  router.push({
    name: 'autorDetail',
    params: {
      id,
    },
  });
};
function goToBanda(id) {
  router.push({
    name: 'bandaDetail',
    params: {
      id,
    },
  });
};
</script>

<template>
  <div v-if="apiData">
    <h1 class="p-4 text-center uppercase text-xl font-bold text-slate-600">{{ apiData.TITULO }}</h1>
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <tbody>
          <tr>
            <th>Fecha</th>
            <td>{{ apiData.FECHA }}</td>
          </tr>
          <tr>
            <th>Autor</th>
            <td>
              <div v-for="a in apiData.AUTOR">
                <a @click="goToAutor(a.autorId)">
                  {{ a.nombre }}
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <th>Dedicatoria</th>
            <td>{{ apiData.DEDICATORIA }}</td>
          </tr>
          <tr>
            <th>Estrenada por</th>
            <td>
              <a @click="goToBanda(apiData.BANDA_ESTRENO)">
                {{ apiData.BANDA }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <p v-else>Loading...</p>   
</template>