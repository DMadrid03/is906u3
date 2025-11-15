<script lang="ts" setup>
import { reactive, ref } from 'vue'
import contador from '../components/MyCounter.vue'

//Typescript y composition api


const nombre = 'Pedro'
interface Postre {
    descripcion: string,
    calorias: number
}

const form = reactive<Postre>({
    descripcion: '',
    calorias: 0
})

const postres = reactive([
    { 
        descripcion: 'Pastel de chocolate', 
      calorias: 350 
    },
    {
      descripcion: 'Helado de vainilla', 
      calorias: 200
    },
    {
      descripcion: 'Tarta de fresa', 
      calorias: 250
    }
])

const guardarPostre = ()=>{
    postres.unshift(({
        descripcion: form.descripcion,
        calorias: form.calorias
    }))

    form.descripcion = ''
    form.calorias = 0
}

</script>

<template>
    <div id="app">
        <header>
            <h1>Welcome to My Vue.js App</h1>
        </header>

        <contador v-bind:value="10" v-bind:title="'Contador de ' + nombre" />
        <!-- <contador v-bind:value="10"  /> <!--error ya que no se proporciona un título y es obligatorio -->

        <hr>

        <div>
            <input @keypress.enter="guardarPostre" v-model="form.descripcion" type="text" placeholder="descripcion">
            <input @keypress.enter="guardarPostre" v-model="form.calorias" type="text" placeholder="calorias">
            <button @click="guardarPostre">Agregar</button>
        </div>
        <ul>
            <li v-for=" ({descripcion, calorias},index) in postres " :key="index">
                {{ index + 1 }}. {{ descripcion }}
                <blockquote>
                    Calorías: {{ calorias }}
                </blockquote>
            </li>
        </ul>
    </hr>
    </div>
</template>

<style>
h1 {
    color: #42b983;
}
</style>
