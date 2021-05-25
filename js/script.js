
var x=[1,2,-100,200,0,32,10,64]



////// array -reverse--methode




var reverse = (arr)=>{
    for(var i = 0;i<=arr.length/2;i++){
        var result =arr[i]
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]=result

    }
    return arr
}



///array--sort-method




var sorter =(arr)=>{

    for(let i = 0; i < arr.length - 1; i++){
       var test = false;

        for(var j = 0; j < arr.length -i + 1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]];
                test = true;
            }
        }
        if(!test){
            break;
        }   
    }
    return arr;
}



