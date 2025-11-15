<script lang="ts">
    import {RouterLink} from 'vue-router'
</script>
<template>
    <nav class ="bg-white p-5 flex space shadow-md">
        <h1 class ="text-2x1 font-bold">Gestor de tareas</h1>
        <RouterLink
            class ="hover: text-blue-600 pb-2 transaition duration-150"
            to="add"
        ></RouterLink>
    </nav>
</template>

<style scoped>
    .router-link-active{
        color: blue;
    }
</style>