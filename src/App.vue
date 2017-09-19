<template>
  <div v-bind:title = 'hello'>
    <!-- {{ hello }} -->
    <p v-text='hello'></p>
    <p v-html='hello'></p>
    {{ num + 1 }}
    {{ status ? 'success' : 'fail' }}
    <ul>
      <li v-for="(item,index) in myList" :class="{odd:index%2}">
        {{ item.name }} - {{ item.price }} - {{ index }}
      </li>
    </ul>
    <button @click='changeList'>change</button>
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
    <input type="text" @keydown.13="onKeydown">
    <input type="text" v-model.lazy='myVal'>
    {{ myValueCompute }}
    <input type="checkbox" value="banana" v-model='checkboxVal'>
    <label for="">banana</label>
    <input type="checkbox" value="apple" v-model='checkboxVal'>
    <label for="">apple</label>
    <input type="checkbox" value="orange" v-model='checkboxVal'>
    <label for="">orange</label>
    {{checkboxVal}}
    <input type="radio" value="banana" v-model='radioVal'>
    <label for="">banana</label>
    <input type="radio" value="apple" v-model='radioVal'>
    <label for="">apple</label>
    <input type="radio" value="orange" v-model='radioVal'>
    <label for="">orange</label>
    {{radioVal}}
    <select name="" id="" v-model="selectVal">
      <option v-for="item in options" :value="item.val">{{item.name}}</option>
      <!--       <option value="1">banana</option>
      <option value="2">orange</option> -->
    </select>
    {{selectVal}}
    <!-- 父组件给子组件传值 -->
    <!-- <component-a v-for='(value,key) in objList' :key="key" :value="value"></component-a> -->
    <!-- 自定义事件 -->
    <component-a @my-event='onComaMyEvent'></component-a>
    <p :is="comToRender" number-to-do='88'></p>
    <input type="text" v-model="myVal">
    <component-a :my-value="myVal"></component-a>
  </div>
</template>

<script>
  import Vue from 'Vue'
  import componentA from './components/a'
  export default {
    // 组件注册
    components: {
      // componentA  es6
      componentA: componentA
    },
    data () {
      return {
        comToRender: 'component-a',
        hello: '<span><img src="" alt="" />world</span>',
        num: 1,
        myVal: '',
        checkboxVal: [],
        radioVal: '',
        selectVal: '',
        myList: [
          {
            name: 'apple',
            price: 22
          },
          {
            name: 'banana',
            price: 13
          }
        ],
        options: [
          {
            name: 'apple',
            val: 0
          },
          {
            name: 'orange',
            val: 1
          }
        ],
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
    computed: {
      myValueCompute() {
        return Date.now();
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
        },
        onKeydown(){
          console.log('on key down');
        },
        onComaMyEvent(parm){
          console.log('onComaMyEvent '+parm);
        },
        getMyValueCompute() {
          return Date.now();
        },
        changeList(){
          Vue.set(this.myList,1,{
            name: 'pinaapple',
            price: 256
          });
          // this.tellUser();
        },
        removeItem(){
          // this.tellUser();
        },
        tellUser() {
          alert('list change');
        }
    },
    watch: {
      myVal: function(val,oldVal){
        console.log(val,' ',oldVal);
      },
      myList: function(){
        this.tellUser();
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