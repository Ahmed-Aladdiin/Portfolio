const main = document.querySelector('main');
main.addEventListener('wheel', event=> {
  event.preventDefault();

  if(event.deltaY > 0)
    main.scrollLeft += main.offsetWidth/3;
  else
    main.scrollLeft -= main.offsetWidth/3;

});
