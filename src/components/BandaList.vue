<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const apiData = ref('');

onMounted( async () => {
  const { name } = route.params;
  const apiUrl = `http://localhost:3000/banda/search/${name}`; // Replace with your API endpoint URL
  await axios.get(apiUrl)
    .then((response) => {
    apiData.value = response.data;
    })
    .catch((error) => {
    console.error('Error fetching data:', error);
  });
});
function showDate(fund,ext) {
  const funRes = (fund > 1800) ? fund : 's/f';
  const extRes = (ext == null) || (ext === 0) ? '' : ` - ${ext}`;
  return `${funRes}${extRes}`;
}
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
  <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 m-10 pr-5 pl-5">
    <table class="table table-zebra">
      <thead>
        <tr>
          <td>Nombre</td>
          <td>Localidad</td>
          <td>Fundación</td>
        </tr>
      </thead>
      <tbody v-for="b in apiData.data">
        <tr>
          <td>
            <a @click="goToBanda(b.ID_BANDA)">
              {{ b.NOMBRE_COMPLETO }}
            </a>
          </td>
          <td>{{ b.LOCALIDAD }} ({{ b.PROVINCIA }})</td>
          <td>
            {{ showDate(b.FECHA_FUND,b.FECHA_EXT) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>