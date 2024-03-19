<template>
  <div class="card">
    <div class="card__content-top">
      <img src="../assets/img/iphone1.jpeg" alt="">
      <h2 class="card__name">{{ product?.name }}</h2>
      <p></p>
      <p>{{ product?.description }}</p>
    </div>
    <div class="card__content-bottom">
      <p class="card__price">$ {{ product?.price }}</p>
      <button @click="addProduct" class="card__button-add">Add</button>
    </div>
  </div>
</template>
<script lang="ts">
import  { PropType, defineComponent } from 'vue';
import Product from '@/models/Product';
import store from '@/store'

  export default defineComponent({
    name: 'UiCard',
    props: {
      product: {
        type: Object as PropType<Product>,
      }
    },
    methods:{
      addProduct(){
        store.commit('addProduct', this.product);
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