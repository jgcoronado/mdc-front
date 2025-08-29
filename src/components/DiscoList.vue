<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import { goToDetail } from '@/services/goTo';

const router = useRouter()
const route = useRoute()
const apiData = ref('');

const DISCO = 'disco';

onMounted( async () => {
  apiData.value = await getListData(DISCO,route);
});

function showDate(fund,ext) {
  const funRes = (fund > 1800) ? fund : 's/f';
  const extRes = (ext == null) || (ext === 0) ? '' : ` - ${ext}`;
  return `${funRes}${extRes}`;
}
</script>

<template>
  <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 m-10 pr-5 pl-5">
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
</template>