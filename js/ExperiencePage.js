const track = document.querySelector('#imgs-track');

myProjects.forEach((project, index) => {
  track.innerHTML += `
  <img src=${project.image} alt="${project.alt}" data-index="${index}">
  `
});

const images = document.querySelectorAll("#imgs-track img");

track.addEventListener('scroll', () => {
  let percentage = Math.round(track.scrollLeft/(track.scrollWidth - track.clientWidth) * 100);

  images.forEach(image => {
    image.animate({objectPosition: `${100 - percentage}% 50%`}, {duration: 1700, fill: 'forwards'});    
  });
})