const hasPath = (graph, src, dst) => {
    //   let stack = [src];
    //   let current; 
      
    //   while(stack.length > 0){
    //     current = stack.pop();
    //     if(current === dst) return true;
    //     graph[current].forEach(neighbor => {
    //       stack.push(neighbor);
    //     })
    //   }
    //   return false;
      
        if(src === dst) return true;
        for(let neighbor of graph[src]){
          if(hasPath(graph, neighbor, dst) === true){
            return true;
          }
        }
        return false;
        
    };