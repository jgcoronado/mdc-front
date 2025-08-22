<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const text = ref('');

function goToAutorList(text) {
  router.push({
    name: 'autorList',
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
    @keyup.enter="goToAutorList(text)"
    placeholder="Busar por nombre"
  />
  <button
    class="btn"
    @click="goToAutorList(text)"
  >
  Buscar
  </button>
</template>

