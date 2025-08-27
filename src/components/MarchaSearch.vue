<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const titulo = ref('');
const fecha = ref('');
const dedicatoria= ref('');
const localidad= ref('');
const provincia= ref('');

function goToMarchaList() {
  const url = [];
  if(titulo.value) url.push(`titulo=${titulo.value}`);
  if(fecha.value) url.push(`fecha=${fecha.value}`);
  if(dedicatoria.value) url.push(`dedicatoria=${dedicatoria.value}`);
  if(localidad.value) url.push(`localidad=${localidad.value}`);
  if(provincia.value) url.push(`provincia=${provincia.value}`);

  const urlJoin = url.join('&');
  router.push({
    name: 'marchaList',
    params: {
      query: urlJoin,
    }
  });
};
</script>

<template>
  <div>
    <input
      class="input"
      type="text"
      v-model="titulo"
      placeholder="Buscar marcha por título"
    />
  </div>
  <div>
    <input
      class="input"
      type="text"
      v-model="fecha"
      placeholder="Buscar marcha por fecha"
    />
  </div>
  <div>
    <input
      class="input"
      type="text"
      v-model="dedicatoria"
      placeholder="Buscar marcha por dedicatoria"
    />
  </div>
  <div>
    <input
      class="input"
      type="text"
      v-model="localidad"
      placeholder="Buscar marcha por localidad"
    />
  </div>
  <div>
    <input
      class="input"
      type="text"
      v-model="provincia"
      placeholder="Buscar marcha por provincia"
    />
  </div>
    <button
    class="btn"
    @keyup.enter="goToMarchaList()"
    @click="goToMarchaList()"
  >
  Buscar
  </button>
</template>

