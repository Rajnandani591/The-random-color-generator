let btn = document.querySelector("button");
btn.classList.add('btn1');
btn.addEventListener("click", function(){

   let h = document.querySelector("h1");
   let randomColor = getRandomColor();
   h.innerText = randomColor;
   h.style.color = randomColor;

   let div = document.querySelector("div");
   div.style.backgroundColor = randomColor;
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

   let color = `rgb(${red} , ${green} , ${blue})`;
   return color;
}