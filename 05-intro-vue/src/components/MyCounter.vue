<script setup lang="ts">
import { ref } from 'vue'

interface Props {
    value: number,
    title?: string
}

const props = defineProps<Props>()

const nombre = 'Juan'
const contador = ref<number>(props.value || 0)

const aumentarContador = ()=>{

    contador.value++
}
</script>


<template>
    <div>
        <h1>{{ props.title || 'Mi contador' }}</h1>
         <h3>Hola {{ nombre }}</h3>
        <!-- <p>Edad: {{ edad }}</p> -->
        <hr>
        
        <h3>Contador {{ contador }}</h3>
        <button @click="aumentarContador">Aumentar contador</button>
        <button v-if="contador > 0" @click="contador--">Disminuir contador</button>
        <span v-else>
            el valor debe ser positivo
        </span>
        </hr>
    </div>
</template>




<style scoped>

</style>