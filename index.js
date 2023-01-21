function myEach(collection, callback) {
    let modifiedCollection;
    if(Array.isArray(collection)){
        for(let i =0; i<collection.length; i++){
            callback(collection[i])
        }
    }else{
       modifiedCollection = Object.values(collection)
       for(let i =0; i<modifiedCollection.length; i++){
        callback(modifiedCollection[i])
    }
}    
    return collection
}


function myMap(collection, callback) {
    let modifiedCollection;
    let newArr = [];

    if(Array.isArray(collection)){
        for(let i =0; i<collection.length; i++){
            newArr.push(callback(collection[i]))            
        }
    }else{
       modifiedCollection = Object.values(collection)
       for(let i =0; i<modifiedCollection.length; i++){
        newArr.push(callback(modifiedCollection[i]))
    }
}    
    return newArr
}



function myReduce(collection, callback, acc) {
    let modifiedCollection;
    let reduce =0;
   
    if(Array.isArray(collection)){
        console.log(collection)
        for(let i=0; i<collection.length; i++){
            console.log("i",i)
            if (acc ==undefined){
                acc =collection[i]
                console.log("inside acc if", acc)
                let val = collection[i+1]
                console.log("val", val)
                reduce = callback(acc, val, collection)
                i= i+1;
                reduce= acc;
                console.log("reduce",reduce)
            }else{
            let val = collection[i]
            reduce = callback(acc, val , collection)
            acc = reduce;
            console.log("reduce",reduce)}
        }
    }else{
        modifiedCollection = Object.values(collection)
        console.log(acc)
        if (acc ==undefined){
            acc =0;
        }
        console.log("modified acc",acc)
        console.log("collection",modifiedCollection)
        for(let i=0; i<modifiedCollection.length; i++){
            console.log("inside else ifArray", i , "times")
            let val = modifiedCollection[i]
            reduce = callback(acc, val, modifiedCollection)
            console.log(reduce)
            acc = reduce;
        }
}
    return reduce;
   
}

