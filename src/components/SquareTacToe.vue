<template>
    <button class="square" @click="onClick">{{ value }}</button>
  </template>
  
  <script>
  export default {
    props: ['value'],
    methods: {
      onClick() {
        this.$emit('click');
      },
    },
  };
  </script>
  
  <style scoped>
  .square {
    width: 50px;
    height: 50px;
    font-size: 20px;
    border: 1px solid #ccc;
    text-align: center;
  }
  </style>
  