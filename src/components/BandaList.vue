<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { goToDetail } from '@/services/goTo';
import { getListData } from '@/services/getData';

const router = useRouter()
const route = useRoute()
const apiData = ref('');

onMounted( async () => {
  apiData.value = await getListData('banda',route);

});
function showDate(fund,ext) {
  const funRes = (fund > 1800) ? fund : 's/f';
  const extRes = (ext == null) || (ext === 0) ? '' : ` - ${ext}`;
  return `${funRes}${extRes}`;
}
function showLocalidad(loc, prov) {
  const isLoc = loc != 0;
  const isProv = prov != 0 && prov !== undefined && prov != null;
  if(isLoc && isProv) return `${loc} (${prov})`;
  else if (isLoc) return `${loc}`;
  else return '';
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
            <a class="hover:underline cursor-pointer" @click="goToDetail(router, 'banda', b.ID_BANDA)">
              {{ b.NOMBRE_COMPLETO }}
            </a>
          </td>
          <td>
            {{ showLocalidad(b.LOCALIDAD, b.PROVINCIA) }}
          </td>
          <td>
            {{ showDate(b.FECHA_FUND,b.FECHA_EXT) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>