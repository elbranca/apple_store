<template>
  <div class="nav-bar">
    <div class="nav-bar__wrapper">
      <div class="nav-bar__item-left">
        <div class="nav-bar__item nav-bar__logo">
          <div class="nav-bar__item-name">
            <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg>
          </div>
        </div>
        <div class="nav-bar__item" id="store" >
          <div class="nav-bar__item-name" @mouseover="showOption('store-wrapper')" @mouseleave="showOption('')">Store</div>
        </div>
        <div class="nav-bar__item" id="mac">
          <div class="nav-bar__item-name" @mouseover="showOption('mac-wrapper')" @mouseleave="showOption('')">Mac</div>
        </div>
      </div>
      <div class="nav-bar__item nav-bar__cart nav-bar__cartWrapper">
        <div class="nav-bar__item-name nav-bar__item-cart" @mouseover="cartHover = true" @mouseleave="cartHover = false">
          <p class="nav-bar__cart">Cart
            <span class="nav-bar__item-count" v-if="getProductsCount > 0">{{ getProductsCount }}</span>
          </p>
        </div>
        <div class="nav-bar__productList" v-if="cartHover">
          <CartProducts></CartProducts>
        </div>
      </div>
    </div>
  </div>
  <div class="nav-bar__options">
    <div class="nav-bar__options-wrapper" id="store-wrapper">
        <div class="nav-bar__option-column">
          <ul class="nav-bar__option-explore">
            <li class="nav-bar__option-title">Shop</li>
            <li>Shop the latest</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
          </ul>
        </div>
        <div class="nav-bar__option-column">
          <ul>
            <li class="nav-bar__option-title">Quick Links</li>
            <li>Find a Store</li>
            <li>Order Status</li>
            <li>Financing</li>
          </ul>
        </div>
    </div>
    <div class="nav-bar__options-wrapper" id="mac-wrapper">
        <div class="nav-bar__option-column">
          <ul class="nav-bar__option-explore">
            <li class="nav-bar__option-title">Shop</li>
            <li>MacBook Air</li>
            <li>MacBook Pro</li>
            <li>iMac</li>
            <li>Mac mini</li>
          </ul>
        </div>
        <div class="nav-bar__option-column">
          <ul>
            <li class="nav-bar__option-title">Shop Mac</li>
            <li>Shop Mac</li>
            <li>Mac Accessories</li>
            <li>Apple Trade In</li>
          </ul>
        </div>
    </div>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store'
import CartProducts from '@/components/CartProducts.vue';

export default defineComponent({
  name: 'HeaderNav',
  data(){
    return{
      cartHover: false
    }
  },
  components:{
    CartProducts
  },
  props: {
    msg: String
  },
  methods:{
    showOption(option: any){
      if(!option){
        let wrapperElements = document.getElementsByClassName('nav-bar__options-wrapper');
        Array.from(wrapperElements).forEach((element: any) => {
            element.setAttribute('style', 'display:none');
        });
        // wrapperElements?.forEach((element: any) => {
        //     element.setAttribute('style', 'display:none');
        // });
      }
      document.getElementById(option)?.setAttribute('style','display: flex;');
    }
  },
  computed: {
    getProductsCount(){
      return store.getters.productsCount;
    }
  }
})
</script>

<style scoped>
  .nav-bar__options{
    width: 100%;
    display: flex;
    color: white;
    background-color: #161617;
    position: absolute;
  }
  .nav-bar__option-explore li{
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
  }
  .nav-bar__option-title{
    font-size: 12px !important;
    line-height: 20px !important;
  }
  .nav-bar__options-wrapper{
    max-width: 1024px;
    display: none;
    width: 100%;
    margin: auto;
  }
  .nav-bar{
    width: 100%;
    background-color: #161617;
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
  .nav-bar__cartWrapper{
    position: relative;
  }
  .nav-bar__productList{
    position: absolute;
    top: 45px;
    right: -50px;
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