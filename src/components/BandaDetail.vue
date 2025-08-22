<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute()
const apiData = ref('');

onMounted(async () => {
  const id = route.params.id;
  const apiUrl = `http://localhost:3000/banda/${id}`; // Replace with your API endpoint URL
  
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
    <div class="card bg-accent-content rounded-box grid h-20 place-items-center text-3xl">{{ apiData.NOMBRE_BREVE }}</div>
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <tbody>
          <tr>
            <th>Nombre completo</th>
            <td>{{ apiData.NOMBRE_COMPLETO }}</td>
          </tr>
          <tr>
            <th>Localidad</th>
            <td>{{ apiData.LOCALIDAD }}</td>
          </tr>
          <tr>
            <th>Fecha de fundación</th>
            <td>{{ apiData.FECHA_FUND }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="divider">Esta banda ha estrenado {{ apiData.marchasLength }} marchas:</div>
      <table class="table table-zebra">
        <thead>
          <tr>
            <td>Marcha</td>
            <td>Fecha</td>
          </tr>
        </thead>
        <tbody v-for="m in apiData.marchas">
          <tr>
            <td>{{ m.FECHA }}</td>
            <td>
              <a @click="goToMarcha(m.ID_MARCHA)">
                {{ m.TITULO }}
              </a>
            </td>
            <td>
              <div v-for="a in m.AUTOR">
                <a @click="goToAutor(a.autorId)">
                  {{ a.nombre }}
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</template>