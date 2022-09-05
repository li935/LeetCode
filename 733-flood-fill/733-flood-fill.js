/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    // Direction vector
    const dv = {
        dx: [-1, 0, 0, 1],
        dy: [0, 1, -1, 0]
    };
    
    const prevColor = image[sr][sc];
    
    // Depth first search
    const dfs = (r, c) => {
        if (image[r][c] === prevColor) {
            image[r][c] = color;
            
            for (let i = 0; i < dv.dx.length + dv.dy.length / 2; i++) {
                const x = r + dv.dx[i];
                const y = c + dv.dy[i];
            
                if (x >= 0 && x < image.length && y >= 0 && y < image[0].length) {
                    dfs(x, y);
                }
            }
            
        }
    };
    
    if (prevColor !== color) dfs(sr, sc);
    
    return image;
};