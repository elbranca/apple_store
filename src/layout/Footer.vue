<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__column">
        <ul>
          <li>Prices</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="footer__column">
        <ul>
          <li>Apple store</li>
          <li>March 2024</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Footer',
    data(){
      return
    },
  })
</script>
<style>
  ul li{
    list-style: none;
    line-height: 25px;
  }
  ul li:hover{
    cursor: pointer;
  }
  .footer{
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #f1f3f4;
    widows: 100%;
    display: flex;
  }
  .footer__wrapper{
    max-width: 1024px;
    width: 100%;
    margin: auto;
    display: flex;
  }
  .footer__column{
    width: 20%;
  }
</style>