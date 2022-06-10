function journey(event) {
  event.preventDefault();

  document.querySelector("#about-category").innerHTML = `<div id="journey">
    <h3 class="text-white pb-4 about-heading">My Journey</h3>
    <p class="d-block text-white about-paragraphs">
      Front-end Development is the career made for me! I have had experience
      in theatre,recruitment, education and customer service but nothing has
      ever felt right... and then, I found coding.
    </p>
  </div>`;
}

function hobby(event) {
  event.preventDefault();

  document.querySelector("#about-category").innerHTML = ` <div id="hobbies">
    <h3 class="text-white pb-4 about-heading">My Hobbies</h3>
    <p class="d-block text-white about-paragraphs hobby-paragraph">When i'm not coding I love to...</p>
    <ul class="text-white hobby-list">
      <li>Practice Yoga</li>
      <li>Make clothes</li>
      <li>Write poetry and stories</li>
      <li>
        Spend time with my partner, family, friends and furry companions
      </li>
      <li>Convert a Horsebox into a tiny house with my partner!</li>
    </ul>
  </div>`;
}

function stack(event) {
  event.preventDefault();

  document.querySelector("#about-category").innerHTML = `<div id="stack">
    <h3 class="text-white pb-4 about-heading">My Stack</h3>
    <p class="d-block text-white about-paragraphs">
      <i class="fa-brands fa-html5 stack-icon"></i>
      <i class="fa-brands fa-css3 stack-icon"></i>
      <i class="fa-brands fa-js stack-icon"></i>
      <i class="fa-brands fa-bootstrap stack-icon"></i>
      <i class="fa-brands fa-react stack-icon"></i>
    </p>
  </div>`;
}

let journeyButton = document.querySelector("#journey-button");
journeyButton.addEventListener("click", journey);

let hobbyButton = document.querySelector("#hobby-button");
hobbyButton.addEventListener("click", hobby);

let stackButton = document.querySelector("#stack-button");
stackButton.addEventListener("click", stack);
