
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