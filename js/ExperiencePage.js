const timeout_1 = 500;
const track = document.querySelector('#imgs-track');
const aimMark = document.querySelector('#experience span');
const viewedImage = document.querySelector('#viewed-image');

viewedImage.style.opacity = 0;

// insert the projects images into their space
myProjects.forEach((project, index) => {
  track.innerHTML += `
  <img src=${project.image} alt="${project.alt}" data-index="${index}" class="hide-2" draggable="false">
  `
});
track.innerHTML += `
<button>Back</button>
`;
track.lastElementChild.style.display = 'none';

const images = document.querySelectorAll("#imgs-track img");
const backButton = track.lastElementChild;

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
    if(track.dataset.isExpanded)
    { track.animate({opacity: 0}, {duration: timeout_1, fill:'forwards'}); }
    
    setTimeout(() => {
      
      if(track.dataset.isExpanded)
      { 
        track.classList.remove('track');
        images.forEach(im => { 
          im.classList.remove('hide-2');
          im.classList.remove('show-2');
        });
        track.classList.add('tower');
        track.animate({opacity: 1}, {duration: timeout_1, fill:'forwards'});
        backButton.style.display = 'block';
        viewedImage.animate({opacity: 1}, {duration: timeout_1, fill:'forwards'});
      }
      
      // set the track to contracted
      track.dataset.isExpanded = '';
    }, timeout_1);

    aimMark.style.display = 'none';

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

// back button functionality
backButton.onclick = () => {
  track.animate({opacity: 0}, {duration: timeout_1, fill:'forwards'});
  viewedImage.animate({opacity: 0}, {duration: timeout_1, fill:'forwards'});

  setTimeout(() => {
    track.classList.remove('tower');
    track.classList.add('track');
    backButton.style.display = 'none';
    track.dataset.isExpanded = 'true';
    track.animate({opacity: 1}, {duration: timeout_1, fill:'forwards'});
    aimMark.style.display = 'inline';

    setTimeout(() => {
      images.forEach(im => { 
        im.classList.add('hide-2');
        im.classList.add('show-2');
      });
    }, timeout_1);
  }, timeout_1);
};