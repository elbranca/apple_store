<template>
  <div class="product__list">
    <div class="product__item pl-20 pr-20" v-for="product in products" :key="product.name">
        <h4 class="no-margin">{{ product.name }}</h4>
        <span class="product__quantity">Quantity: {{ product.quantity }}</span>
    </div>
  </div>

</template>
<script lang="ts">
import Product from '@/models/Product';
import store from '@/store'
import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'CartProducts',
    computed:{
      products(){
        let productByQuantity: any[] = [];
        let currentProducts = store.getters.productsAdded;
        currentProducts.forEach((product: Product) => {
          if(productByQuantity.find(x=> x.id === product.id)){
            let productFind = productByQuantity.find(x=> x.id === product.id);
            productFind.quantity++;
          }else{
            productByQuantity.push({...product, quantity: 1});
          }
        });
        return productByQuantity;
      }
    }
  });
</script>
<style>
  .no-margin{
    margin: 0;
  }
  .pl-20{
    padding-left: 20px;
  }
  .pr-20{
    padding-right: 20px;
  }
  .product__list{
    background-color: white;
    width: 300px;
  }
  .product__item{
    height: 50px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
</style>