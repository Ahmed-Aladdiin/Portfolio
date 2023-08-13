const testimoniesContainer = document.querySelector('.testimonies-container');

{
  let html = ``;

  Reviewers.forEach(re => {
    html += `
      <div class="testCard">
        <div class="stars">
          <img src="imgs/testimonies/stars/16.png">
          <img src="imgs/testimonies/stars/16.png">
          <img src="imgs/testimonies/stars/16.png">
          <img src="imgs/testimonies/stars/16.png">
          <img src="imgs/testimonies/stars/16.png">
        </div>
        <div class="testimony">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eius vitae accusamus excepturi ut distinctio dolor dignissimos magni!
        </div>
        <div class="reviewer">
          <div class="rev-img"><img src=${re.image}></div>
          <div class="rev-info"><p class="rev-name">${re.name}</p><p class="rev-postion">${re.position}</p></div>
        </div>
      </div>
    `
  });

  testimoniesContainer.innerHTML = html;
}