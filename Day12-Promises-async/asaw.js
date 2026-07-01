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
async function routine(){
    const dwork = await walkDog();
    console.log(dwork);
    const rbwork = await readBook();
    console.log(rbwork);
    const lawork = await learnAstro();
    console.log(lawork);
}
routine();
