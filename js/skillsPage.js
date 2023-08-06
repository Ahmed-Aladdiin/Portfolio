let skillsHTML = '';

skillsCards.forEach((card, index) => {
  skillsHTML += `
  <!-- skill ${index} -->
  <div class="skillBox hasInfo ${card.scrollAnimation.from}" data-info=${card.skillInfoID}>
    <div class="skillContent">
      <img src="imgs/skills/${card.img}.png" alt=${card.imgAlt}>
      <div class="skillInfo" id=${card.skillInfoID}>
        ${card.skillInfo}
      </div>
    </div>
  </div>
  `;
})

document.querySelector('#skillsContainer').innerHTML = skillsHTML;

const skillsInfo = document.querySelectorAll('.hasInfo');

skillsInfo.forEach(element => {
  element.addEventListener('click', ()=>{
    document.querySelector(`#${element.dataset.info}`).classList.add('showSkillInfo');

    setTimeout(() => {
      document.querySelector(`#${element.dataset.info}`).classList.remove('showSkillInfo');
    }, 3500);
  })
})