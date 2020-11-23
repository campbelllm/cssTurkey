
const feathers = document.getElementById("feathers");

console.log('TURKEY', turkey)

const rotateFeathers = () => {
  let deg = -90;
  let arrNum = 0
  const featherColors = ["#a8362d", "#F7A82F", "#360F0F"]
  for(let i = 0; i < 19; i++){
   if(arrNum < 3){
     arrNum++
   }else{
     arrNum = 0;
   }
    const newFeather = document.createElement("div");
    newFeather.style.cssText = `background-color: ${featherColors[arrNum]}; transform: rotate(${deg}deg);`
    newFeather.classList.add("feather")
    feathers.appendChild(newFeather);

    deg+=10;
  }
}

rotateFeathers();