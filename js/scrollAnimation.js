const skillsObserver = new IntersectionObserver ( entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting)
    {
      if(entry.target.classList.contains('hide-2'))
      { entry.target.classList.add('show-2'); }
      else
        entry.target.classList.add('show-1');
    }
    else
    {
      if(entry.target.classList.contains('hide-2'))
      { entry.target.classList.remove('show-2'); }
      else
        entry.target.classList.remove('show-1');
    }
  });
});


const hiddenSkillsRight = document.querySelectorAll('.hide-right-1');
const hiddenSkillsLeft = document.querySelectorAll('.hide-left-1');
// const hiddenProjects = document.querySelector('.hide-2');

hiddenSkillsLeft.forEach( el => skillsObserver.observe(el) );
hiddenSkillsRight.forEach( el => skillsObserver.observe(el) );
// skillsObserver.observe(hiddenProjects);