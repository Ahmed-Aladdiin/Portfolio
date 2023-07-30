const skillsInfo = document.querySelectorAll('.hasInfo');

skillsInfo.forEach(element => {
  element.addEventListener('click', ()=>{
    document.querySelector(`#${element.dataset.info}`).classList.add('showSkillInfo');

    setTimeout(() => {
      document.querySelector(`#${element.dataset.info}`).classList.remove('showSkillInfo');
    }, 3500);
  })
})