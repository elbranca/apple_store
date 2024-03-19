<template>
  <div class="nav-bar">
    <div class="nav-bar__wrapper">
      <div class="nav-bar__item-left">
        <div class="nav-bar__item nav-bar__logo">
          <div class="nav-bar__item-name">
            <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg>
          </div>
        </div>
        <div class="nav-bar__item">
          <div class="nav-bar__item-name">Store</div>
        </div>
        <div class="nav-bar__item">
          <div class="nav-bar__item-name">Mac</div>
        </div>
      </div>
      <div class="nav-bar__item nav-bar__cart">
        <div class="nav-bar__item-name nav-bar__item-cart">
          <p class="nav-bar__cart">Cart
            <span class="nav-bar__item-count" v-if="getProductsCount > 0">{{ getProductsCount }}</span>
          </p>
          
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store'

export default defineComponent({
  name: 'HeaderNav',
  props: {
    msg: String
  },
  computed: {
    getProductsCount(){
      return store.getters.productsCount;
    }
  }
})
</script>

<style scoped>
  .nav-bar{
    width: 100%;
    background-color: #151917;
    font-family: 'SF Pro Regular', sans-serif;
    display: flex;
  }
  .nav-bar__wrapper{
    width: 1024px;
    margin: auto;
    height: 45px;
    display: flex;
    justify-content: space-between;
  }
  .nav-bar__item-left{
    display: flex;
  }
  .nav-bar__logo{
    color: white;
    fill: white;
  }
  .nav-bar__item{
    margin-left: 10px;
    display: flex;
  }

  .nav-bar__item-name{
    font-size: 14px;
    margin: auto;
    color: white;
  }
  .nav-bar__item-name:hover{
    cursor: pointer;
    opacity: 0.8;
  }
  .nav-bar__cart{
    margin-left: 0;
    margin-right: 0;
  }
  .nav-bar__item-cart{
    background-color: #0d6efd;
    border-radius: 10px;
    padding: 5px;
    position: relative;
  }
  .nav-bar__item-cart p{
    margin-top: 0;
    margin-bottom: 0;
  }
  .nav-bar__item-count{
    color: white;
    border-radius: 20px;
    height: 15px;
    width: 15px;
    background-color: red;
    position: absolute;
    font-size: 12px;
    top: -5px;
    text-align: center;
  }

</style>