<template>
        <div class="product-card" >
        <img :src="props.img" alt="">
        <h3><slot name="title"></slot></h3>
        <p><slot name="price"></slot></p>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    img:String
})

</script>

<style scoped>
.product-card {
    
    max-width: 200px;
    border: 1px solid red;
    }
.product-card img {
    width: 100%;
}
.product-card h3 {
    margin: 10px 0px;
}

</style>