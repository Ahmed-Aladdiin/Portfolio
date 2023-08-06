const track = document.querySelector('#imgs-track');
const aimMark = document.querySelector('#experience span');
const viewedImage = document.querySelector('#viewed-image');

viewedImage.style.opacity = 0;

// insert the projects images into their space
myProjects.forEach((project, index) => {
  track.innerHTML += `
  <img src=${project.image} alt="${project.alt}" data-index="${index}">
  `
});
track.innerHTML += `
<button>Back</button>
`;
track.lastElementChild.style.display = 'none';

const images = document.querySelectorAll("#imgs-track img");

// create the parallax effect
track.addEventListener('scroll', () => {
  let percentage = Math.round(track.scrollLeft/(track.scrollWidth - track.clientWidth) * 100);
  
  images.forEach(image => {
    image.animate({objectPosition: `${100 - percentage}% 50%`}, {duration: 200, fill: 'forwards'});    
  });
});

// give the images a functionality when one of them is clicked
images.forEach(image => {
  image.addEventListener('click', () => {
    // clear the old styling, and give the new styling
    const timeout_1 = 500;
    if(track.dataset.isExpanded)
    { track.animate({opacity: 0}, {duration: timeout_1, fill:'forwards'}); }
    
    setTimeout(() => {
      
      if(track.dataset.isExpanded)
      { 
        track.classList.remove('track');
        track.classList.add('tower');
        track.animate({opacity: 1}, {duration: timeout_1, fill:'forwards'});
        track.lastElementChild.style.display = 'block';
        viewedImage.animate({opacity: 1}, {duration: timeout_1, fill:'forwards'});
      }
      
      // set the track to contracted
      track.dataset.isExpanded = '';
    }, timeout_1);

    aimMark.style.opacity = 0;

    const i = image.dataset.index;
    if(track.dataset.isExpanded)
    {
      viewedImage.innerHTML = `
      <img src="${myProjects[i].image}" alt="${myProjects[i].alt}">
      <div>${myProjects[i].details}</div>
      `;
      viewedImage.dataset.index = i;
    }
    else if (viewedImage.dataset.index != i)
    {
      viewedImage.animate({opacity: 0}, {duration: timeout_1/2, fill:'forwards'});
      
      setTimeout(() => {
        viewedImage.innerHTML = `
        <img src="${myProjects[i].image}" alt="${myProjects[i].alt}">
        <div>${myProjects[i].details}</div>
        `;
        viewedImage.dataset.index = i;

        viewedImage.animate({opacity: 1}, {duration: timeout_1/2, fill:'forwards'});
      }, timeout_1/2);
    } 
  });
});