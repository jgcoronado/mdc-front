<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const apiData = ref('');

onMounted( async () => {
  const titulo = route.params.name;
  const apiUrl = `http://localhost:3000/autor/search/${titulo}`; // Replace with your API endpoint URL
  await axios.get(apiUrl)
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
</script>

<template>
  <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 m-10 pr-5 pl-5">
    <table class="table table-zebra">
      <thead>
        <tr>
          <td>Nombre</td>
        </tr>
      </thead>
      <tbody v-for="autor in apiData.data">
        <tr>
          <td>
            <a @click="goToAutor(autor.ID_AUTOR)">
              {{ autor.AUTOR }}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>