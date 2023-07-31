const skillsCards = [
  { //first
    skillInfoID: 'CPP',
    img: 'skill-1',
    imgAlt: 'C plus plus',
    skillInfo: 'C++'
  },
  { //second
    skillInfoID: 'SD',
    img: 'skill-2',
    imgAlt: "Software Engineer",
    skillInfo: 'Software<br>Developer'
  },
  { //third 3
    skillInfoID: 'FE',
    img: 'skill-3',
    imgAlt: 'FrontEnd',
    skillInfo: `
    <ul>
      <li>html</li>
      <li>css</li>
      <li>JavaScript</li>
    </ul>
    `
  },
  { //4
    skillInfoID: 'GIT',
    img: 'skill-4',
    imgAlt: 'Git',
    skillInfo: 'git'
  },
  { //5
    skillInfoID: 'SK',
    img: 'skill-5',
    imgAlt: 'Soft Skills',
    skillInfo: `
    <ul>
      <li>Communication</li>
      <li>TeamWork</li>
      <li>Flexibility</li>
      <li>Punctuality</li>
      <li>Scheduling</li>
    </ul>
    `
  },
  { //6
    skillInfoID: 'GH',
    img: 'skill-6',
    imgAlt: 'GitHub',
    skillInfo: 'git-hub'
  },
  { //7
    skillInfoID: 'JAVA',
    img: 'skill-7',
    imgAlt: 'Java',
    skillInfo: 'Java'
  },
  { //8
    skillInfoID: 'LA',
    img: 'skill-8',
    imgAlt: 'Languages',
    skillInfo: '<pre>&bull;Arabic   &bull;English   &bull;German</pre>'
  },
  { // 9
    skillInfoID: 'MO',
    img: 'skill-9',
    imgAlt: 'Microsoft Office',
    skillInfo: `
    <ul>
      <li>word</li>
      <li>excel</li>
      <li>powerpoint</li>
    </ul>
    `
  },
  {
    skillInfoID: 'AR',
    img: 'skill-10',
    imgAlt: 'Arduino',
    skillInfo: 'Arduino'
  }
];

let skillsHTML = '';

skillsCards.forEach((card, index) => {
  skillsHTML += `
  <!-- skill ${index} -->
  <div class="skillBox hasInfo" data-info=${card.skillInfoID}>
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