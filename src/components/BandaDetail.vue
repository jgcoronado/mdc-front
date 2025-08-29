<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'
import CdList from './molecules/CdList.vue';
import Timeline from './molecules/Timeline.vue';
import { goToDetail } from '@/services/goTo';
import { getDetailData } from '@/services/getData';

const router = useRouter();
const route = useRoute()
const apiData = ref('');

onMounted(async () => {
  apiData.value = await getDetailData('banda',route);
});
</script>

<template>
    <div class="card bg-accent-content rounded-box grid h-20 place-items-center text-3xl">
      {{ apiData.NOMBRE_BREVE }}
    </div>
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
    <div class="grid place-items-center">  
      <Timeline v-bind:apiData/>
    </div>

    <div class="divider">Esta banda ha grabado {{ apiData.discosLength }} discos:</div>
      <div v-for="d in apiData.discos">
        <div>
          <CdList v-bind:disco="d" />
        </div>
      </div>
    <div class="divider">Esta banda ha estrenado {{ apiData.marchasLength }} marchas:</div>
      <table class="table table-zebra">
        <thead>
          <tr>
            <td>Marcha</td>
            <td>Fecha</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="m in apiData.marchas">
            <td>{{ m.FECHA }}</td>
            <td>
              <a
                class="hover:underline cursor-pointer"
                @click="goToDetail(router, 'marcha', m.ID_MARCHA)"
              >
                {{ m.TITULO }}
              </a>
            </td>
            <td>
              <div v-for="a in m.AUTOR">
                <a
                  class="hover:underline cursor-pointer"
                  @click="goToDetail(router, 'autor', a.autorId)"
                >
                  {{ a.nombre }}
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</template>