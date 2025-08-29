<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { goToDetail } from '@/services/goTo';
import { getListData } from '@/services/getData';

const r = useRouter()
const route = useRoute()
const apiData = ref('');

const MARCHA = 'marcha';
const AUTOR = 'autor';

onMounted( async () => {
  apiData.value = await getListData(MARCHA,route);
});
</script>

<template>
  <div class="divider"> Se han encontrado {{ apiData.rowsReturned }} marchas:</div>
  <div class="tableList">
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
            <a class="hover:underline cursor-pointer" @click="goToDetail(r, MARCHA, marcha.ID_MARCHA)">
              {{ marcha.TITULO }}
            </a>
          </td>
          <td>
            <div v-for="a in marcha.AUTOR">
              <a class="hover:underline cursor-pointer" @click="goToDetail(r,AUTOR,a.autorId)">
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