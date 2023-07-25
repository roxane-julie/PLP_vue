<template>
        <div class="product-card" >
        <img :src="props.imgage" alt="">
        <h3>title</h3>
        <p>paragraphe</p>
    </div>
</template>

<script>
import { defineProps } from "vue";

const props = defineProps({
    img: String
})

</script>

<style>
</style>