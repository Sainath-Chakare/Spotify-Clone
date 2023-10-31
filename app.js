let heart = document.querySelector(".music-system .music-info i");
let click = false;
let enter = false;
heart.addEventListener("click",() => {
   if(click == false){
      heart.style.color = "#1ED760";
      click = true;
      enter = true;
   }else{
      heart.style.color = "white";
      click = false;
      enter = false;
   }
})
heart.addEventListener("mouseenter",() => {
   if(enter == true){
      heart.style.transform = "scale(1.1)";
   }else{
      heart.style.transform = "scale(1)";
   }
})
heart.addEventListener("mouseleave",() => {
   heart.style.transform = "scale(1)";
})








