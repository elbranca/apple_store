<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HeaderNav from '@/layout/HeaderNav.vue';
export default {
  name: 'HomeLayout',
  components: {
    HeaderNav
  }
}
</script>
<style></style>