const skillsObserver = new IntersectionObserver ( entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting)
    {
      entry.target.classList.add('show-1');
    }
    else
    {
      entry.target.classList.remove('show-1');
    }
  });
});


const hiddenSkillsRight = document.querySelectorAll('.hide-right-1');
const hiddenSkillsLeft = document.querySelectorAll('.hide-left-1');

hiddenSkillsLeft.forEach( el => skillsObserver.observe(el) );
hiddenSkillsRight.forEach( el => skillsObserver.observe(el) );

