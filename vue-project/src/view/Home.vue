<template>
    <div class="home" v-if="products.length > 0">
        <ProductCard v-for="(product, index) in products" :img="product.image" :key="index">
            <template #title>{{ product.title }}</template>
            <template #price>{{ product.price }} €</template>
        </ProductCard>
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

<style scoped>
.home {
    width: 100%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
}

</style>