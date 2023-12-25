<!-- GameTacToe.vue -->
<template>
    <div>
      <div>{{ status }}</div>
      <BoardTacToe :squares="history[stepNumber]" @click="handleClick" />
    </div>
  </template>
  
  <script>
  import BoardTacToe from './BoardTacToe.vue';
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (const line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  
    return null;
  }

  
  export default {
    components: {
      BoardTacToe,
    },
    data() {
      return {
        history: [Array(25).fill(null)],
        stepNumber: 0,
        xIsNext: true,
      };
    },
    computed: {
      currentSquares() {
        return this.history[this.stepNumber];
      },
      status() {
        const winner = calculateWinner(this.currentSquares);
        if (winner) {
          return `Winner: ${winner}`;
        } else if (this.stepNumber === 24) {
          return 'Draw!';
        } else {
          return `Next player: ${this.xIsNext ? 'X' : 'O'}`;
        }
      },
    },
    methods: {
      handleClick(index) {
        console.log(`GameTacToe - handleClick called! Index: ${index}`);
        const history = this.history.slice(0, this.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.slice();
  
        if (calculateWinner(squares) || squares[index]) {
          return;
        }
  
        squares[index] = this.xIsNext ? 'X' : 'O';
  
        this.history = history.concat([squares]);
        this.stepNumber = history.length;
        this.xIsNext = !this.xIsNext;
      },
    },
  };
  
  </script>
  