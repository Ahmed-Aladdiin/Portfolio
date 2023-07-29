const main = document.querySelector('main');
let x = 0;
const limit = 300;
main.addEventListener('wheel', event=> {
  event.preventDefault();

  x += event.deltaY;

  if(x > limit)
  {
    main.scrollLeft += main.scrollWidth/3.5;
    x = 0;
  }
  else if ( x < -limit)
  {
    main.scrollLeft -= main.scrollWidth/3.5;
    x = 0;
  }

  console.log(event.deltaY);

});