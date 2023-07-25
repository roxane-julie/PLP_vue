<template>
    <div class="product-card" v-if="products.length > 0">
        <img :src= products[0].image alt="">
    </div>
</template>

<script setup>

import ProductCard from "../components/ProductCard.vue"
import { onMounted, ref } from 'vue';

const products = ref([])

fetch('https://fakestoreapi.com/products')
    .then((response)=>response.json())
    .then((data)=> {
        products.value = data;
        console.log(data)
        console.log(products.value)
    })

onMounted(()=>{
})

</script>

<style></style>