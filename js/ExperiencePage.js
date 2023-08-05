const track = document.querySelector('#imgs-track');

track.addEventListener('scroll', (e) => {
  
  let percentage = Math.round(track.scrollLeft/(track.scrollWidth - track.clientWidth) * 100);

  console.log(Math.round(track.scrollLeft), track.scrollWidth - track.clientWidth, percentage);
})