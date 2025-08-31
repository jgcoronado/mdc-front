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
  <div class="mockup-window border border-base-300 w-full">
    <div class="grid place-content-center border-t border-base-300 h-80 place-items-center text-3xl md:min-w-xl p-5">
      <p>
        ¡Bienvenido a Marchas de Cristo!
      </p>
      <p>
        HEMOS VUELTO
      </p>
    </div>
  </div>
</template>

