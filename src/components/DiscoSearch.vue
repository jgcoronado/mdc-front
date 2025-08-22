<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const text = ref('');

function goToDiscoList(text) {
  router.push({
    name: 'discoList',
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
    @keyup.enter="goToDiscoList(text)"
    placeholder="Buscar disco por nombre"
  />
  <button
    class="btn"
    @click="goToDiscoList(text)"
  >
  Buscar
  </button>
</template>

