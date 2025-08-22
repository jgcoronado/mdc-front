<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const apiData = ref('');
const marchaDetailUrl = 'http://localhost:3000/marcha/';

onMounted( async () => {
  const titulo = route.params.name;
  const apiUrl = `http://localhost:3000/marcha/search/${titulo}`; // Replace with your API endpoint URL
  await axios.get(apiUrl)
    .then((response) => {
    apiData.value = response.data;
    })
    .catch((error) => {
    console.error('Error fetching data:', error);
  });
});
function goToMarcha(id) {
  router.push({
    name: 'marchaDetail',
    params: {
      id,
    },
  });
};
function goToAutor(id) {
  router.push({
    name: 'autorDetail',
    params: {
      id,
    },
  });
};
</script>

<template>
  <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 m-10 pr-5 pl-5">
    <table class="table table-zebra">
      <thead>
        <tr>
          <td>Título</td>
          <td>Compositor/es</td>
          <td>Fecha</td>
        </tr>
      </thead>
      <tbody v-for="marcha in apiData.data">
        <tr>
          <td>
            <a @click="goToMarcha(marcha.ID_MARCHA)">
              {{ marcha.TITULO }}
            </a>
          </td>
          <td>
            <div v-for="a in marcha.AUTOR">
              <a @click="goToAutor(a.autorId)">
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