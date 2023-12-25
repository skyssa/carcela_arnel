<template>
    <div>
      <div class="board-row" v-for="row in 3" :key="row">
        <SquareTacToe
          v-for="col in 3"
          :key="col"
          :value="squares[(row - 1) * 3 + col - 1]"
          @click="handleClick((row - 1) * 3 + col - 1)"
        />
      </div>
    </div>
  </template>
  
  <script>
  import SquareTacToe from './SquareTacToe.vue';
  
  export default {
    components: {
      SquareTacToe,
    },
    props: ['squares'],
    methods: {
      handleClick(index) {
        console.log(`Square clicked! Index: ${index}`);
        this.$emit('click', index);
      },
    },
  };
  </script>
  