let btn = document.getElementById("b");
btn.addEventListener("click", function(event){
    let p = document.createElement("p");
    p.innerText = "To create click on yellow colored create button on the top";
    document.body.appendChild(p);
})