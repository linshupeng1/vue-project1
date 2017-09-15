<template>
  <div v-bind:title = 'hello'>
    <!-- {{ hello }} -->
    <p v-text='hello'></p>
    <p v-html='hello'></p>
    {{ num + 1 }}
    {{ status ? 'success' : 'fail' }}
    <ul>
      <li v-for="(item,index) in list" :class="{odd:index%2}">
        {{ item.name }} - {{ item.price }} - {{ index }}
      </li>
    </ul>
    <ul>
      <li v-for="(value,key) in objList">
        {{ key }} - {{ value }}
      </li>
    </ul>
    <a class="btn" v-bind:href="link" :title="hello" :class="{'btn-error':hasError}" :style="linkCss">to baidu</a>
    <a v-if="isPartA">partA</a>
    <a v-else>no data</a>
    <a v-show="!isPartA">partB</a>
    <button v-on:click ='addItem'>addItem</button>
    <button v-on:click ='toggle'>toggle</button>
    <!-- 父组件给子组件传值 -->
    <componentA v-for='(value,key) in objList' :key="key" :value="value"></componentA>
      
  </div>
</template>

<script>
  import Vue from 'Vue'
  import componentA from './components/a'
  export default {
    // 组件注册
    components: {
      componentA: componentA
    },
    data () {
      return {
        hello: '<span><img src="" alt="" />world</span>',
        num: 1,
        font: 'font-red',
        className: {
          'red': true,
          'blue': false
        },
        class1: 'hello',
        class2: 'world',
        hasError: true,
        linkCss: {
          'color': 'red',
          'font-size': '14px'
        },
        isPartA: true,
        status: true,
        link: 'https://www.baidu.com',
        list: [
          {
            name: 'apple',
            price: 33
          },
          {
            name: 'banana',
            price: 22
          }
        ],
        objList: {
          name: 'apple',
          price: 33,
          color: 'red',
          weight: 14
        }
      }
    },
    methods: {
        addItem(){
          console.log(this.list);
          this.list.push({
            name: 'peach',
            price: 24
          });
          Vue.set(this.list,1,{
            name: 'orange',
            price: 11
          });
        },
        toggle(){
          this.isPartA = !this.isPartA;
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