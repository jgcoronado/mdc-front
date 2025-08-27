<script setup>
import { reactive } from 'vue'
import { login } from '../../services/authService';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const form = reactive({
    username: '',
    password: ''
});
async function handleLogin() {
  let login_status = false;
  console.log("🚀 ~ handleLogin ~ login:", login_status)
  try {
    await login(form);
    console.log(form.username);
    router.push({
      name: 'dashboard',
      params: {
        name: form.username,
      },
    });
  } catch (error) {
    console.error('Error al iniciar sesión', error);
  }
};
</script>
<template>
  <div>
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Usuario</label>
        <input type="text" v-model="form.username" required />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type="password" v-model="form.password" required />
      </div>
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>