<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import CdList from './molecules/CdList.vue';
import { goToDetail } from '@/services/goTo';

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
function getDedicatoria(ded, loc) {
  const isDed = ded != 0;
  const isLoc = loc != 0 && loc !== undefined;
  if(isDed && isLoc) return `${ded} (${loc})`;
  else if (isDed) return `${ded}`;
  else return '';
};
</script>

<template>
  <div v-if="apiData">
    <div class="card bg-accent-content rounded-box grid h-20 place-items-center text-3xl md:min-w-xl">{{ apiData.TITULO }}</div>
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <tbody>
          <tr v-if="apiData.FECHA">
            <th>Fecha</th>
            <td>{{ apiData.FECHA }}</td>
          </tr>
          <tr>
            <th>Autor</th>
            <td>
              <div v-for="a in apiData.AUTOR">
                <a class="hover:underline cursor-pointer" @click="goToDetail(router,'autor',a.autorId)">
                  {{ a.nombre }}
                </a>
              </div>
            </td>
          </tr>
          <tr  v-if="apiData.DEDICATORIA">
            <th>Dedicatoria</th>
            <td>
              {{ getDedicatoria(apiData.DEDICATORIA, apiData.LOCALIDAD) }}
            </td>
          </tr>
          <tr>
            <th>Estrenada por</th>
            <td>
              <a class="hover:underline cursor-pointer" @click="goToDetail(router,'banda',apiData.BANDA_ESTRENO)">
                {{ apiData.BANDA }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <div v-if="apiData.discosLength !== 0" class="divider">Esta marcha se ha grabado en {{ apiData.discosLength }} discos:</div>
      <CdList v-for="d in apiData.discos" v-bind:disco="d" />
    <div v-if="apiData.discosLength === 0" class="divider">Esta marcha aún no ha sido grabada en disco.</div>
  </div>
  <p v-else>Loading...</p>   
</template>