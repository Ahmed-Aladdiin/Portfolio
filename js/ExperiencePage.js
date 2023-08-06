const track = document.querySelector('#imgs-track');
const aimMark = document.querySelector('#experience span');
const viewedImage = document.querySelector('#viewed-image');

viewedImage.style.opacity = 0;

myProjects.forEach((project, index) => {
  track.innerHTML += `
  <img src=${project.image} alt="${project.alt}" data-index="${index}">
  `
});

const images = document.querySelectorAll("#imgs-track img");

track.addEventListener('scroll', () => {
  let percentage = Math.round(track.scrollLeft/(track.scrollWidth - track.clientWidth) * 100);

  images.forEach(image => {
    image.animate({objectPosition: `${100 - percentage}% 50%`}, {duration: 200, fill: 'forwards'});    
  });
});

images.forEach(image => {
  image.addEventListener('click', () => {
    track.classList.remove('track');
    track.classList.add('tower');
    aimMark.style.opacity = 0;
    const i = image.dataset.index;
    document.querySelector('#viewed-image').innerHTML = `
    <img src="${myProjects[i].image}" alt="${myProjects[i].alt}">
    <div>${myProjects[i].details}</div>
    `;
    viewedImage.style.opacity = 1;
  });
});