let expanded = false;
const nav = document.querySelector('nav');
const main = document.querySelector('main');
let Xmark ;
let navLinks = null;
let pos = 0;
let Xpos = 0;

nav.addEventListener('click', navExpand);
main.addEventListener('wheel', ()=>changeSelectedNav(400));
window.addEventListener('keydown', ()=>changeSelectedNav(400));

function navExpand() {
  if (expanded)
  return;
  else
  {
    nav.classList.add('expanded');
    nav.innerHTML = `
    <a class="animation" href="#home">Home</a>
    <a class="animation" href="#skills">Skills</a>
    <a class="animation" href="#experience">Experience</a>
    <a class="animation" href="#contacts">Contacts</a>
    <div id="Xmark">
    <div class="Xedge"></div>
    <div class="Xedge"></div>
    </div>
    `;
    
    expanded = true;
    
    Xmark = document.querySelector('#Xmark');
    Xmark.addEventListener('click', navContract);
    navLinks = document.querySelectorAll('.expanded a');
    
    nav.removeEventListener('click', navExpand);
    console.log('called');

    setTimeout(() => {
      navLinks.forEach(element => {
        element.classList.remove('animation');
        element.addEventListener('click', (event)=>{
          navLinks.forEach(i => i.classList.remove('selected'));
          element.classList.add('selected');
          console.log(event);
        });
        changeSelectedNav(1);
      });
    }, 700);
  }
}

function navContract() {
  if (expanded)
  {
    nav.classList.remove('expanded');
    nav.innerHTML = `
    <div class="HamburgerIcon"></div>
    <div class="HamburgerIcon"></div>
    <div class="HamburgerIcon"></div>
    `;
    expanded = false;
    console.log(expanded);
    
    Xmark.removeEventListener('click', navContract);
    Xmark = null;

    setTimeout(() => {
      nav.addEventListener('click', navExpand);
    }, 500);
  }
}



function changeSelectedNav(timer) {
  setTimeout(() => {
    pos = Math.round((main.scrollTop) / window.innerHeight);
    if(expanded)
    {
      navLinks.forEach(i=>i.classList.remove('selected'));
      navLinks[pos].classList.add('selected');
    }
  }, timer);
}