<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import { goToDetail } from '@/services/goTo';
import { getListData } from '@/services/getData';

const router = useRouter()
const route = useRoute()
const apiData = ref('');

const DISCO = 'disco';

const BASE_URL = import.meta.env.VITE_BASE_URL;

onMounted( async () => {
  const { name } = route.params;
  const apiUrl = `${BASE_URL}/${DISCO}/search/${name}`;
  
  const res = await axios.get(apiUrl);
  apiData.value = res.data;
});


function showDate(fund,ext) {
  const funRes = (fund > 1800) ? fund : 's/f';
  const extRes = (ext == null) || (ext === 0) ? '' : ` - ${ext}`;
  return `${funRes}${extRes}`;
}
</script>

<template>
  <div v-if="apiData.rowsReturned > 0" class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 m-10 pr-5 pl-5">
    <table class="table table-zebra">
      <thead>
        <tr>
          <td>Nombre</td>
          <td>Banda</td>
          <td>Fecha</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in apiData.data">
          <td>
            <a class="hover:underline cursor-pointer" @click="goToDetail(router, 'disco', d.ID_DISCO)">
              {{ d.NOMBRE_CD }}
            </a>
          </td>
          <td>
            <a class="hover:underline cursor-pointer" @click="goToDetail(router, 'banda', d.ID_BANDA)">
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
  <div v-else class="divider py-10 my-0"> Lo sentimos, hay ningún resultado para su búsqueda.</div>
</template>