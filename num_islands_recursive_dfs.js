var numIslands = function(grid) {
    let numIslands = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1'){
                numIslands++;
                dfs(grid, i, j);
            }
        }
    }
    return numIslands;
};

const dfs = function(grid, i, j){
    let numRows = grid.length;
    let numCols = grid[0].length;
    grid[i][j] = '0'
    if(j + 1 < numCols && grid[i][j + 1] === '1') dfs(grid, i, j + 1);
    if(j - 1 >= 0 && grid[i][j - 1] === '1') dfs(grid, i, j - 1);
    if(i + 1 < numRows && grid[i + 1][j] === '1') dfs(grid, i + 1, j);
    if(i - 1 >= 0 && grid[i - 1][j] === '1') dfs(grid, i - 1, j);
}