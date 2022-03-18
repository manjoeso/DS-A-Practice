costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1])) // similar to spaceship operator
// a = [10,20] b = [30, 200]; is 30 bigger than ten? (a-b), increasing order
// two elements in array, being sorted
// a - b, returns in increasing order
// b - a, returns in decreasing order
let costTotal = 0;
for(let i = 0; i < costs.length/2; i++){
    costTotal += costs[i][0] + costs[i + costs.length/2][1];
}
return costTotal;