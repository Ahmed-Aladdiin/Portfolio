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

// use horizontal scrolling when scrolling on the track
// const exPage = document.querySelector('#experience');
// let initial_x;
// let isWorking = false;
// let distance = 0;
// let z = 0;
// let I;

// exPage.addEventListener('mousedown', (event) => {
//   initial_x = event.clientX;
//   isWorking = true;
//   distance = 0;

//   I = setInterval( () => {
//     track.scrollLeft = ((track.scrollWidth - track.clientWidth) * distance / 100);
//     console.log(track.scrollLeft);
//   }, 40);

// });
// exPage.addEventListener('mouseup', () => {
//   isWorking = false;
//   clearInterval(I);
// })
// exPage.addEventListener('mousemove', (event) => {
//   if(isWorking)
//   {
//     distance = initial_x - event.clientX;
//     // distance in percentage
//     distance = 2 * distance/window.innerWidth * 100;
    
//     distance = Math.min(distance, 100);
//     distance = Math.max(distance, -100);
    
//     console.log(distance);
//   }
// });

//try another idea
// const windowMiddle = window.innerWidth/2;
// let direction = false; // if false then left, if true then right
// let left = null;
// let right = null;
// const timer = 55;
// const distance = 500;
// track.addEventListener('mousemove', (event) => {
//   if(windowMiddle > event.clientX)
//   {
//     if(direction)
//     {
//       console.log('left');
//       // if(right) {
//       //   clearInterval(right);
//       //   right = null;
//       // }
//       // left = setInterval(() => {
//       //   track.scrollLeft -= distance;
//       // }, timer);
//       direction = !direction;
//       // while(track.scrollLeft != 0) {
//       //   track.scrollLeft--;
//       // }
//     }
//   }
//   else
//   {
//     if(!direction) {
//       console.log('right');
//       // if(left) {
//       //   clearInterval(left);
//       //   left = null;
//       // }
//       // right = setInterval(() => {
//       //   track.scrollLeft += distance;
//       // }, timer);
//       direction = !direction;
//       // while (track.scrollLeft < (track.scrollWidth - track.clientWidth) - 10) {
//       //   track.scrollLeft++;
//       // }
//     }
//   }
// });


// This is the one that is working the best
//third solution
let scroll = true;
track.addEventListener('wheel', (event) => {
  
  if (!event.deltaY) {
    return;
  }

  event.preventDefault();

  if(scroll) {
  // event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.currentTarget.scrollLeft += Math.sign(event.deltaY) * 200;
    scroll = false;

    setTimeout(() => {
      scroll = true;
    }, 260);
  }
  
})


// forth solution
// const exPage = document.querySelector('#experience');
// function scrollHorizontally(e) {
//   e = exPage.event || e;
//   var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//   var scrollSpeed = 200; // Janky jank <<<<<<<<<<<<<<
//   document.documentElement.scrollLeft -= (delta * scrollSpeed);
//   track.scrollLeft -= (delta * scrollSpeed);
//   e.preventDefault();
// }

// if (exPage.addEventListener) {
//   // IE9, Chrome, Safari, Opera
//   exPage.addEventListener("mousewheel", scrollHorizontally, false);
//   // Firefox
//   exPage.addEventListener("DOMMouseScroll", scrollHorizontally, false);
// } else {
//   // IE 6/7/8
//   exPage.attachEvent("onmousewheel", scrollHorizontally);
// }