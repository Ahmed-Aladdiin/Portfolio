const timeout_1 = 500;
const track = document.querySelector('#imgs-track');
const viewedImage = document.querySelector('#viewed-image');
const filter = document.querySelector('#filter');
const filters = document.querySelectorAll('#filter button');

viewedImage.style.opacity = 0;

track.innerHTML = `<img src="imgs/icons/arrow.png" id="left-arrow"/>`;
// insert the projects images into their space
myProjects.forEach((project, index) => {
  track.innerHTML += `
  <img src=${project.image} alt="${project.alt}" data-index="${index}" class="hide-2" draggable="false" data-type="${project.type}">
  `
});
track.innerHTML += `
<button>Back</button>
`;
track.lastElementChild.style.display = 'none';

const scrollButton = document.querySelector('#left-arrow');
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
images.forEach((image, index) => {
  if(!index) return;
  image.addEventListener('click', () => {
    // clear the old styling, and give the new styling
    if(track.dataset.isExpanded)
    { track.animate({opacity: 0}, {duration: timeout_1, fill:'forwards'}); }
    filter.animate({opacity: 0}, {fill: 'forwards', duration: timeout_1});
    
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
        scrollButton.style.display = 'none';
        viewedImage.animate({opacity: 1}, {duration: timeout_1, fill:'forwards'});
      }

      filter.style.display = 'none';
      
      // set the track to contracted
      track.dataset.isExpanded = '';
    }, timeout_1);

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
  filter.style.display = 'block';
  
  setTimeout(() => {
    track.classList.remove('tower');
    track.classList.add('track');
    backButton.style.display = 'none';
    scrollButton.style.display = 'block';
    track.dataset.isExpanded = 'true';
    track.animate({opacity: 1}, {duration: timeout_1, fill:'forwards'});
    filter.animate({opacity: 1}, {fill: 'forwards', duration: 2*timeout_1});

    setTimeout(() => {
      images.forEach(im => { 
        im.classList.add('hide-2');
        im.classList.add('show-2');
      });
    }, timeout_1);
  }, timeout_1);
};

// filtering section
filters.forEach(filter => {
  //handle clicking on one of the filters
  filter.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');

    images.forEach(image=> {
      if(event.target.innerHTML === 'All' || image.dataset.type === event.target.innerHTML)
      {
        image.style.display = 'inline';
      }
      else 
      {
        image.style.display = 'none';
      }
    })
  });
});

scrollButton.addEventListener('click', scrollTrack);
function scrollTrack () {
  track.scrollBy((track.scrollWidth - track.clientWidth)/2, 0);
}