<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import HeaderNav from '@/layout/HeaderNav.vue';


export default defineComponent({
  name: 'HomeLayout',
  components: {
    HeaderNav
  }
})
</script>
<style></style>