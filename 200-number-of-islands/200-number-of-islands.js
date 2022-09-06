/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dv = {
        dx: [-1, 0, 0, 1],
        dy: [0, 1, -1, 0]
    };
    
    grid = grid.map(row => row.map(col => Number.parseInt(col)));
    const isVisited = grid.map(row => row.map(col => false));
    let count = 1;
    
    const dfs = (grid, x, y, startNum) => {
        if (isVisited[x][y]) {
            return;
        } else {
            for (let i = 0; i < 4; i++) {
                const dx = x + dv.dx[i];
                const dy = y + dv.dy[i];
                
                if (dx >= 0 && dx < grid.length && dy >= 0 && dy < grid[0].length) {
                    if (grid[x][y] > 0) {
                        isVisited[x][y] = true;
                        
                        if (grid[x][y] === startNum) {
                            grid[x][y] += count;
                        }
                        
                        dfs(grid, dx, dy, startNum);    
                    }
                }
            }
        }
    };
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            dfs(grid, i, j, grid[i][j]);
            count++;
        }
    }
    
    return [...new Set(grid.flatMap(g => g).filter(e => e > 0))].length;
};