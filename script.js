//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
let button1 = document.getElementById('button1');
const hexColor = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
let button2 = document.getElementById('button2');
let textcolor = document.querySelector('h1')

let changeColor=(color)=>{
    return document.querySelector('.textField').style.color=color
}
  changeColor("red")
  // document.querySelector('.button1').onclick=colorGreen;

button1.onclick=()=>{
    const colorindex = Math.floor(Math.random()*colors.length);
    changeColor('yellow');
    textcolor.innerText = colors[colorindex]
    document.body.style.backgroundColor = colors[colorindex];
  }
  
  const colorindex = () => Math.floor(Math.random()*hexColor.length);

button2.onclick=()=>{
  const colorCode = hexColor[colorindex()] + hexColor[colorindex()] + hexColor[colorindex()] + hexColor[colorindex()] +hexColor[colorindex()] +hexColor[colorindex()]
  document.body.style.backgroundColor = '#'+colorCode;
  let reverseColor = colorCode.split("").reverse().join("");
  console.log(reverseColor);
  textcolor.innerText = '#' + colorCode;
  textcolor.style.color = '#'+ reverseColor;

}
