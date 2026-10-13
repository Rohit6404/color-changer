const colorCode = document.querySelector("#color-code");
const redBtn = document.querySelector("#red");
const greenBtn = document.querySelector("#green");
const blueBtn = document.querySelector("#blue");
const randomBtn = document.querySelector("#random");
const resetBtn = document.querySelector("#reset");

function changeColor(color){
    document.body.style.backgroundColor = color;
    colorCode.textContent = color;
}

redBtn.addEventListener("click", function(){
    changeColor("#FF0000");
})

greenBtn.addEventListener("click", function(){
    changeColor("#008000");
})

blueBtn.addEventListener("click", function(){
    changeColor("#0000FF");
})

randomBtn.addEventListener("click", function(){
    let randomNum = Math.floor(Math.random()*16777216);
    let hexColor = randomNum.toString(16).padStart(6, "0");
    let code = "#" + hexColor;
    changeColor(code);
})

resetBtn.addEventListener("click", function() {
    changeColor("#F3F4F6");
})


