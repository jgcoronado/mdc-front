<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import { goToDetail } from '@/services/goTo';

const router = useRouter()
const route = useRoute()
const apiData = ref('');

const AUTOR = 'autor';

const BASE_URL = import.meta.env.VITE_BASE_URL;

onMounted( async () => {
  const { name } = route.params;
  const apiUrl = `${BASE_URL}/${AUTOR}/search/${name}`;
  
  const res = await axios.get(apiUrl);
  apiData.value = res.data;
});
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
            <a class="hover:underline cursor-pointer" @click="goToDetail(router, 'autor', autor.ID_AUTOR)">
              {{ autor.AUTOR }}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>