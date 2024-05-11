var red = document.getElementById('red'),
 green = document.getElementById('green'),
 blue = document.getElementById('blue'),
 alpha = document.getElementById('alpha'),
 text = document.getElementById('text');

function setBg(){
    
    document.body.style.backgroundColor = `rgba(${red.value},${green.value},${blue.value},${alpha.value})`;
    text.innerText =   `rgba(${red.value},${green.value},${blue.value},${alpha.value})`;
}


document.getElementById('copy').addEventListener("click", function(){navigator.clipboard.writeText(text.innerText)})
  