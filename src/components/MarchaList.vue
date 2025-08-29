<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'
import { goToDetail } from '@/services/goTo';

const r = useRouter()
const route = useRoute()
const apiData = ref('');

onMounted( async () => {
  const { query } = route.params;
  const apiUrl = `http://localhost:3000/marcha/search?${query}`; // Replace with your API endpoint URL
  await axios.get(apiUrl)
    .then((response) => {
    apiData.value = response.data;
    })
    .catch((error) => {
    console.error('Error fetching data:', error);
  });
});
</script>

<template>
  <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 m-10 pr-5 pl-5 md:min-w-xl">
    <table class="table table-zebra">
      <thead>
        <tr>
          <td>Título</td>
          <td>Compositor/es</td>
          <td>Fecha</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="marcha in apiData.data">
          <td>
            <a class="hover:underline cursor-pointer" @click="goToDetail(r, 'marcha', marcha.ID_MARCHA)">
              {{ marcha.TITULO }}
            </a>
          </td>
          <td>
            <div v-for="a in marcha.AUTOR">
              <a class="hover:underline cursor-pointer" @click="goToDetail(r,'autor',a.autorId)">
                {{ a.nombre }}
              </a>
            </div>
          </td>
          <td> {{ marcha.FECHA }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>