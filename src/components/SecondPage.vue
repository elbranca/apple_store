<template>
  <div class="homepage">
    <div class="homepage__wrapper">
      <h1 class="homepage__title">SECOND Store</h1>
      <p class="homepage__description">Add, sign and search.</p>
      <div class="homepage__buttons-wrapper">
        <button>Learn more</button>
        <button>Buy</button>
      </div>
    </div>
</div>
</template>

<script>

export default {
name: 'SecondPage',
props: {
  msg: String
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homepage{
  height: 770px;
  width: 100vw;
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
</style>
