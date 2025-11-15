<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    //NavBar component
    <nav class ="bg-white p-5 flex space shadow-md">
        <h1 class ="text-2x1 font-bold">Gestor de tareas</h1>
        <RouterLink
            class ="hover: text-blue-600 pb-2 transaition duration-150"
            to="add"
        >Agregar Tarea</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>

</style>
