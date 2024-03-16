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
        <UiCard :product=productOne></UiCard>
        <UiCard></UiCard>
        <UiCard></UiCard>
        <UiCard></UiCard>
        <UiCard></UiCard>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiCard from './UiCard.vue';
import Product from '@/models/Product';

const productOneObj: Product = {
  name: 'P1',
  description: 'P1',
  price: '2'
}
export default defineComponent({
  name: 'Home',
  components:{
    UiCard
  },
  computed:{
    productOne(): Product{
      return {
        name: 'P1',
        description: 'P1',
        price: '2'
      };
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
