<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="p-5">
    
    <nav class ="bg-white p-5 flex space shadow-md">
        <h1 class ="text-2x1 font-bold">Gestor de tareas</h1>
        <RouterLink
            class ="hover: text-blue-600 pb-2 transaition duration-150"
            to="add"
        >Agregar Tarea</RouterLink>
        <RouterLink
            class ="hover: text-blue-600 pb-2 transaition duration-150"
            to="/"
        >Inicio</RouterLink>
    </nav>

  </div>

  <RouterView />
</template>

<style scoped>

</style>
