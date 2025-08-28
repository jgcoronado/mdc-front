<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import { goToDetail } from '@/services/goTo';

const router = useRouter()
const route = useRoute()
const apiData = ref('');

onMounted(async () => {
  const { id } = route.params;
  const apiUrl = `http://localhost:3000/disco/${id}`; // Replace with your API endpoint URL
  
  axios.get(apiUrl)
    .then((response) => {
    apiData.value = response.data;
    })
    .catch((error) => {
    console.error('Error fetching data:', error);
  });
});
</script>

<template>
  <div v-if="apiData">
    <div
      class="card bg-accent-content rounded-box grid h-20 place-items-center text-3xl"
    >
      {{ apiData.NOMBRE_CD }}
    </div>
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <tbody>
          <tr>
            <th>Fecha</th>
            <td>{{ apiData.FECHA_CD }}</td>
          </tr>
          <tr>
            <th>Banda</th>
            <td>
              <a
                class="hover:underline cursor-pointer"
                @click="goToDetail(router, 'banda', apiData.ID_BANDA)"
              >
                {{ apiData.BANDA }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="divider">Este disco contiene {{ apiData.marchasLength }} marchas:</div>
      <table class="table table-zebra">
        <thead>
          <tr>
            <td>Marcha</td>
            <td>Autor</td>
            <td>Fecha</td>
          </tr>
        </thead>
        <tbody v-for="m in apiData.marchas">
          <tr>
            <td>
              <a 
                class="hover:underline cursor-pointer"
                @click="goToDetail(router, 'marcha', m.ID_MARCHA)"
              >
                {{ m.TITULO }}
              </a>
            </td>
          <td>
            <div v-for="a in m.AUTOR">
              <a
                class="hover:underline cursor-pointer"
                @click="goToDetail(router, 'autor', a.autorId)"
              >
                {{ a.nombre }}
              </a>
            </div>
          </td>
            <td>{{ m.FECHA }}</td>
          </tr>
        </tbody>
      </table>
  </div>
  <p v-else>Loading...</p>   
</template>