<template>
  <div class="card">
    <div class="card__content-top">
      
      <img src="../assets/img/iphone1.jpeg" alt="">
      <h2 class="card__name">Iphone 14 Pro Max</h2>
      <p>{{ product?.name }}</p>
      <p>Silver, 128GB, A15 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU, 16‑core Neural Engine</p>
    </div>
    <div class="card__content-bottom">
      <p class="card__price">$ 1099</p>
      <button class="card__button-add">Add</button>
    </div>
  </div>
</template>
<script lang="ts">
import  { PropType, defineComponent } from 'vue';
import Product from '@/models/Product';

  export default defineComponent({
    name: 'UiCard',
    props: {
      product: {
        type: Object as PropType<Product>,
      }
  }

  })
</script>
<style scoped>
  .card{
    width: 300px;
    box-shadow: 0 .125rem .25rem #00000013!important;
  }
  .card__content-top{
    display: flex;
    padding: 10px;
    flex-direction: column;
  }
  .card__name{
    text-align: center;
  }
  .card__content-top img{
    width: 50%;
    margin: auto;
  }
  .card__content-bottom{
    display: flex;
    flex-direction: column;
  }
  .card__button-add{
    background-color: #0d6efd;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 7px;
  }
  .card__button-add:hover{
    cursor: pointer;
  }
  .card__price{
    margin: auto;
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: bold;
  }
</style>