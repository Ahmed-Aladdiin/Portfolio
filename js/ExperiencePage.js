const track = document.querySelector('#imgs-track');
const images = document.querySelectorAll("#imgs-track img");

track.addEventListener('scroll', (e) => {
  
  let percentage = Math.round(track.scrollLeft/(track.scrollWidth - track.clientWidth) * 100);

  images.forEach(image => {
    image.animate({objectPosition: `${100 - percentage}% 50%`}, {duration: 700, fill: 'forwards'});    
  });
})