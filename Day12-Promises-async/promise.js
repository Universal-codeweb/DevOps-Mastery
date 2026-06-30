function walkDog(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dogWalked = true;
            if(dogWalked){
                resolve("you walk the dog");
            }
            else{
                reject("you didn't walk the dog");
            }
        },1500)
    });
}
function readBook(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const readbook = true;
            if(readbook){
                resolve("you read the book");
            }
            else{
                reject("you didn't read the book");
            }
        },6500)
    });
}
function learnAstro(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const learnedAstro = true;
            if(learnedAstro){
                resolve("you learn astronomy");
            }
            else{
                reject("you didn't learn astronomy");
            }
        },10500)
    });
}
walkDog().then(value=>{console.log(value); return readBook()})
         .then(value=>{console.log(value); return learnAstro()})
         .then(value=>console.log(value))
         .catch(error=>console.log(error));