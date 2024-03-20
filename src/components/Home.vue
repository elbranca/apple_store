<template>
    <div class="homepage">
      <div class="homepage__wrapper">
        <h1 class="homepage__title">Apple Store</h1>
        <p class="homepage__description">Add, sign and search.</p>
        <div class="homepage__buttons-wrapper">
          <button>Learn more</button>
          <button>Buy</button>
        </div>
      </div>
  </div>
  <div class="homeproducts">
    <div class="homeproducts__wrapper">
      <div class="homeproducts__title">
        <h2>Products</h2>
      </div>
      <div class="homeproducts__items">
        <template  v-for="product in products" :key="product.name">
          <UiCard :product="product"></UiCard>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiCard from './UiCard.vue';
import Product from '@/models/Product';

export default defineComponent({
  name: 'Home',
  components:{
    UiCard
  },
  computed:{
    products(): Product[]{
      return [{
        id: 'ba555065-8713-4083-b7cf-7542b50a4384',
        name: 'Iphone 14 Pro Max',
        description: 'Silver, 128GB, A15 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU, 16‑core Neural Engine',
        price: '1099'
      },
      {
        id:'9380d2b3-3a89-4f0c-a1f9-796e7b840d76',
        name: 'Iphone 14 Pro',
        description: 'Silver, 128GB, A15 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU, 16‑core Neural Engine',
        price: '999'
      },
      {
        id: '20df8bda-c42c-4e23-b4ee-9c1a3a82fe8c',
        name: 'Iphone 14',
        description: 'Starlight, 128GB, A15 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU, 16‑core Neural Engine',
        price: '799'
      },
      {
        id: 'aa5778a6-356d-4567-9b95-4ba8a274620f',
        name: 'AirPods',
        description: '(3rd generation) with MagSafe Charging Case, Dual beamforming microphones, Dual optical sensors, Motion-detecting accelerometer, Up to 5 hours of listening',
        price: '179'
      },
      {
        id: '1c746e3d-e854-40fb-8e6b-03eb6f238fc0',
        name: 'AirPods Pro',
        description: '(2nd generation), Dual beamforming microphones, Dual optical sensors, Motion-detecting accelerometer, Up to 5 hours of listening time with a single charge',
        price: '249'
      }];
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .homepage{
    height: 770px;
    width: 100%;
    padding-top: 1px;
    background-image: url('../assets/img/background.jpeg');
    color: white;
    display: flex;
  }
  .homepage__wrapper{
    margin: auto;
  }
  .homepage__title{
    font-size: 60px;
    margin-bottom: 15px;
  }
  .homepage__buttons-wrapper{
    display: flex;
    justify-content: space-evenly;
  }
  .homepage__buttons-wrapper button{
    background-color: white;
    padding-left: 21px;
    padding-right: 21px;
    padding-top: 11px;
    padding-bottom: 11px;
    border-radius: 20px;
    border: none;
  }
  .homepage__buttons-wrapper button:hover{
    cursor: pointer;
  }
  .homepage__description{
    font-size: 20px;
  }
  .homeproducts{
    padding-top: 10px;
    padding-bottom: 50px;
    width: 100%;
    display: flex;
  }
  .homeproducts__wrapper{
    width: 1024px;
    margin: auto;
  }
  .homeproducts__title{
    text-align: center;
  }
  .homeproducts__items{
    display: flex;
    max-width: 960px;
    margin: auto;
    /* justify-content: space-between; */
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  @media screen and (max-width: 1024px) {
    .homeproducts__items{
      justify-content: center;
    }
  }
</style>
