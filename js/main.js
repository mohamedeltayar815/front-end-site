let imgs = document.querySelectorAll("#projects .img")


imgs.forEach(div => {
    div.addEventListener("click", addActiveClass)
});


function addActiveClass(){
    imgs.forEach((div)=>{
       
        this.classList.toggle("active")

    });


};

let frontEndAllPic = document.querySelectorAll("#projects .fEFilter");
let backEndAllPic = document.querySelectorAll("#projects .bEFilter");
let fullStackAllPic = document.querySelectorAll("#projects .fSFilter");


let frontEndFilter = document.querySelector(".febutton");
let backEndFilter = document.querySelector(".bebutton");
let fullStackFilter = document.querySelector(".fsbutton");
let allPicFilter = document.querySelector(".allPicbutton");

console.log(frontEndFilter);
console.log(backEndFilter);
console.log(fullStackFilter);
console.log(allPicFilter);

