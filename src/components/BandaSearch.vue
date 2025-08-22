<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const text = ref('');

function goToBandaList(text) {
  router.push({
    name: 'bandaList',
    params: {
      name: text,
    },
  });
};
</script>

<template>
  <input
    class="input"
    type="text"
    v-model="text"
    @keyup.enter="goToBandaList(text)"
    placeholder="Busar por nombre"
  />
  <button
    class="btn"
    @click="goToBandaList(text)"
  >
  Buscar
  </button>
</template>

