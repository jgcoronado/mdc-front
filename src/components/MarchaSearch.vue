<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const text = ref('');

function goToMarchaList(text) {
  router.push({
    name: 'marchaList',
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
    @keyup.enter="goToMarchaList(text)"
    placeholder="Buscar marcha por título"
  />
  <button
    class="btn"
    @click="goToMarchaList(text)"
  >
  Buscar
  </button>
</template>

