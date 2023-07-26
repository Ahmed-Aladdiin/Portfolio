let color = 'orange';

function box()
{
  let e = document.createElement("div");
  e.setAttribute('class', 'square');

  document.body.appendChild(e);
  setTimeout(()=>{
    document.body.removeChild(e);
  }, 40000);
  e.style = `
  border: 2px solid ${color};
  box-shadow: 0 0 10px ${color},
  0 0 30px ${color},
  0 0 60px ${color};
  box-shadow: inset 0 0 5px ${color};
  left:${Math.random() * 90}vw;
  top:${Math.random() * 90}vh;
  width: ${randInt(10, 20)}px;
  animation: Ydir${randInt(1,2)} 100s linear, Xdir${randInt(1,3)} 100s linear, opac 30s linear, rotation${randInt(1,2)} 40s linear;
  `;
}

setInterval(box, 1500);
// setInterval(box2, 1500);

function randInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}