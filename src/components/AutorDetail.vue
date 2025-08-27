<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute()
const apiData = ref('');

onMounted(async () => {
  const id = route.params.id;
  const apiUrl = `http://localhost:3000/autor/${id}`; // Replace with your API endpoint URL
  
  axios.get(apiUrl)
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
</script>

<template>
    <div class="card bg-accent-content rounded-box grid h-20 place-items-center text-3xl">{{ apiData.NOMBRE }} {{ apiData.APELLIDOS }}</div>
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <tbody>
          <tr>
            <th>Fecha de nacimiento</th>
            <td>{{ apiData.F_NAC }}</td>
          </tr>
          <tr>
            <th>Lugar de nacimiento</th>
            <td>{{ apiData.LUGAR_NAC }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="divider">Ha compuesto {{ apiData.marchasLength }} marchas:</div>
      <table class="table table-zebra">
        <thead>
          <tr>
            <td>Marcha</td>
            <td>Fecha</td>
          </tr>
        </thead>
        <tbody v-for="m in apiData.marchas">
          <tr>
            <td>
              <a class="hover:underline cursor-pointer" @click="goToMarcha(m.ID_MARCHA)">
                {{ m.TITULO }}
              </a>
            </td>
            <td>{{ m.FECHA }}</td>
          </tr>
        </tbody>
      </table>
</template>