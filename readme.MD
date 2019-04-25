# ai-tic-tac-toe

a simple AI for tic-tac-toe

## Installation
```sh
 npm i ai-tic-tac-toe
```

## Usage

```js
 let tictactoe = require('tictactoe');
 let board = ['x','x','o',
              '','o','',
              '','','']
let position = tictactoe.getmove(board,'x');//solve for x
console.log(position);
//=> 6
```