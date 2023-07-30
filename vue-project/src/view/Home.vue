<template>

    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"> -->

    <div class="home">
        <router-link v-for="(product, index) in products" :key="index" :to="`/product/${product.id}`">        
            <ProductCard  :img="product.image" >
            <template #title>{{ product.title }}</template>
            <template #price>{{ product.price }} €</template>
        </ProductCard>
    </router-link>

    </div>   
   
    
</template>

<script setup>

import ProductCard from "../components/ProductCard.vue"
import { ref,onMounted } from 'vue';

const products = ref([])

onMounted(()=>{

    fetch('https://fakestoreapi.com/products')
    .then((response)=>response.json())
    .then((data)=> {
        products.value = data;
        console.log(data)
        console.log(products.value)
    })
})

</script>

<style scoped>
.home {
    width: 100%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

</style>