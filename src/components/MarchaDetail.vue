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
function goToDisco(id) {
  router.push({
    name: 'discoDetail',
    params: {
      id,
    },
  });
};
</script>

<template>
  <div v-if="apiData">
    <div class="card bg-accent-content rounded-box grid h-20 place-items-center text-3xl">{{ apiData.TITULO }}</div>
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
    <div class="divider">Esta marcha se ha grabado en {{ apiData.discosLength }} discos:</div>
      <table class="table table-zebra">
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Banda</td>
            <td>Fecha</td>
          </tr>
        </thead>
        <tbody v-for="d in apiData.discos">
          <tr>
            <td>
              <a @click="goToDisco(d.ID_DISCO)">
                {{ d.NOMBRE_CD }}
              </a>
            </td>
            <td>
              <a @click="goToBanda(d.ID_BANDA)">
                {{ d.BANDA }}
              </a>
            </td>
            <td>
              {{ d.FECHA_CD }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  <p v-else>Loading...</p>   
</template>