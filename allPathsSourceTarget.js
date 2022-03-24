var allPathsSourceTarget = function(graph) {
    let paths = [];
    const target = graph.length - 1;
    
    const dfs = function (currentNode = 0, currentPath = [0]){
        if(target === currentPath[currentPath.length - 1]){
           paths.push([...currentPath])
        return;
        }
        for(let node of graph[currentNode]){
            currentPath.push(node);
            dfs(node, currentPath);
            currentPath.pop();
        }
    }
    
    dfs();
    
    return paths;

};
