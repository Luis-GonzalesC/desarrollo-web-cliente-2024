let array =[];

function countBy(x,y){
    if(x < 0 || y < 0){
        return array;
    }
    
    for(let i = 1; i <= y; i++){
        array[i-1] = i * x;
    }
    return array;
}