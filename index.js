require("array-lib");

let grid = [0, 0, 0,
    0, 0, 0,
    0, 0, 0
]


module.exports = {
    getmove: function (grid, initial_player) {
         grid = grid.map(x => {
            if (x === "x") {
                return 1
            } else if (x === "o") {
                return 2;
            } else {
                return 0;
            }
        });
        initial_player = initial_player === "x" ? 1 : 2;
        let x_player = 1;
        let o_player = 2;
        function did_win(grid, player) {
            const win_combs = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            for (let i = 0; i < 8; i++) {
                if (grid[win_combs[i][0]] === player &&
                    grid[win_combs[i][1]] === player &&
                    grid[win_combs[i][2]] === player) {
                    return true
                }

            }
            return false;
        }

        function minimax(grid, player, depth) {
            if (did_win(grid, initial_player)) {
                return 10 - depth;
            } else if (did_win(grid, initial_player === 1 ?2 : 1)) {
                return depth - 10;
            } else if (!grid.pos(0)) {
                return 0;
            } else {
                let scores = Array.vector(9, player === initial_player ? -11 : 11);
                grid.forEach((e, i) => {
                    let gridCopy = grid.clone();
                    if (gridCopy[i] === 0) {
                        gridCopy[i] = player;
                        scores[i] = minimax(gridCopy, player === x_player ? 2: 1, depth + 1);
                    }
                });
                if (depth === 0) {
                    return scores.maxIndex();
                } else {
                    if (player === initial_player) {
                        return scores.max();
                    } else {
                        return scores.min();
                    }
                }

            }
        }

        return minimax(grid,initial_player,0);

    }
}