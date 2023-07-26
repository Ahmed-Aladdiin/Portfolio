

function box()
{
  let e = document.createElement("div");
  e.setAttribute('class', 'square');

  document.body.appendChild(e);
  setTimeout(()=>{
    document.body.removeChild(e);
  }, 40000);
  e.style = `
  left:${Math.random() * 90}vw;
  top:${Math.random() * 90}vh;
  width: ${randInt(10, 20)}px;
  animation: Ydir${randInt(1,2)} 100s linear, Xdir${randInt(1,3)} 100s linear, opac 40s linear, rotation${randInt(1,2)} 40s linear;
  `;
}

setInterval(box, 1500);
// setInterval(box2, 1500);

function randInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}