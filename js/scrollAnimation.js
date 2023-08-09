const skillsObserver = new IntersectionObserver ( entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting)
    {
      if(entry.target.classList.contains('hide-2'))
      { entry.target.classList.add('show-2'); }
      else if(entry.target.classList.contains('hide-right-1') || entry.target.classList.contains('hide-left-1'))
        entry.target.classList.add('show-1');
    }
    else
    {
      if(entry.target.classList.contains('hide-2'))
      { entry.target.classList.remove('show-2'); }
      else if(entry.target.classList.contains('hide-right-1') || entry.target.classList.contains('hide-left-1'))
        entry.target.classList.remove('show-1');
    }
  });
});


const hiddenSkillsRight = document.querySelectorAll('.hide-right-1');
const hiddenSkillsLeft = document.querySelectorAll('.hide-left-1');
const hiddenProjects = document.querySelectorAll('.hide-2');

hiddenSkillsLeft.forEach( el => skillsObserver.observe(el) );
hiddenSkillsRight.forEach( el => skillsObserver.observe(el) );
hiddenProjects.forEach( el => skillsObserver.observe(el) );

// change focus to the track
window.addEventListener('wheel', ()=>{
  if(pos == 2)
    track.focus();
  else
    track.blur();
  console.log(pos)
  console.log(document.activeElement)
  // console.log(track);
});