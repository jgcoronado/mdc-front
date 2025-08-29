<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import { goToDetail } from '@/services/goTo';

const router = useRouter()
const route = useRoute()
const apiData = ref('');

const AUTOR = 'autor';

onMounted(async () => {
  const { id } = route.params;
  const apiUrl = `http://localhost:3000/marcha/${id}`; // Replace with your API endpoint URL
  console.log("🚀 ~ apiUrl:", apiUrl)
  
  axios.get(apiUrl)
    .then((response) => {
    console.log("🚀 ~ response:", response.data)
    apiData.value = response.data;
    })
    .catch((error) => {
    console.error('Error fetching data:', error);
  });
});
</script>

<template>
  <div v-if="apiData">
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <tbody>
          <tr>
            <th>Título</th>
            <td>
                <input
                  class="input"
                  type="text"
                  v-model="apiData.TITULO"
                  placeholder="apiData.TITULO"
              />
            </td>
          </tr>
          <tr>
            <th>Fecha</th>
            <td>
              <input
                class="input"
                type="text"
                v-model="apiData.FECHA"
                placeholder="apiData.FECHA"
            />
            </td>
          </tr>
          <tr>
            <th>Autor</th>
            <td>
              <div v-for="a in apiData.AUTOR">
                <a @click="goToDetail(router, AUTOR, a.autorId)">
                  {{ a.nombre }}
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <th>Dedicatoria</th>
            <td>
              <input
                class="input"
                type="text"
                v-model="apiData.DEDICATORIA"
                placeholder="apiData.DEDICATORIA"
              />
            </td>
          </tr>
          <tr>
            <th>Estrenada por</th>
            <td>
              <input
                class="input"
                type="text"
                v-model="apiData.BANDA_ESTRENO"
                placeholder="apiData.BANDA_ESTRENO"
              />
                {{ apiData.BANDA }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <p v-else>Loading...</p>   
</template>