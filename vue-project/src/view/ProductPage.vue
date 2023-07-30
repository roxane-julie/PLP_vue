<template>

    <div class="product-card">
    <img :src="product?.image" alt="">
    <h3>{{ product?.title }}</h3>
    <p>{{ product?.description }}</p>
    <p>{{ product?.price }}€</p>
</div>
</template>

<script setup>

import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue';
const route = useRoute()
const product = ref();

onMounted(()=>{

    fetch(`https://fakestoreapi.com/products/${route.params.id}`)
    .then((response)=>response.json())
    .then((data)=> {
        product.value = data;
        })
})


</script>

<style>
.product-card {
    
    width: 200px;
    border: 1px solid red;
    flex-wrap: wrap;
    margin: 10px;

    }
.product-card img {
    width: 100%;
}
.product-card h3 {
    margin: 10px 0px;
}

</style>