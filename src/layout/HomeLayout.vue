<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <main>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import HeaderNav from '@/layout/HeaderNav.vue';
import Footer from '@/layout/Footer.vue';

export default defineComponent({
  name: 'HomeLayout',
  components: {
    HeaderNav,
    Footer
  }
})
</script>
<style></style>