<template>
  <div v-bind:title = 'hello'>
    <!-- {{ hello }} -->
    <p v-text='hello'></p>
    <p v-html='hello'></p>
    {{ num + 1 }}
    {{ status ? 'success' : 'fail' }}
    <ul>
      <li v-for="(item,index) in list">
        {{ item.name }} - {{ item.price }} - {{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hello: '<span><img src="" alt="" />world</span>',
        num: 1,
        status: true,
        list: [
          {
            name: 'apple',
            price: 33
          },
          {
            name: 'banana',
            price: 22
          }
        ]
      }
    }
  }
</script>

<style>
  html {
    height: 100%;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  #app {
    color: #333;
    margin-top: -100px;
    max-width: 600px;
    text-align: center;
    font-family: Helvetica,sans-serif;
  }
</style>