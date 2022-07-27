function journey(event) {
  event.preventDefault();

  document.querySelector("#about-category").innerHTML = `<div id="journey">
    <h3 class="text-white pb-4 about-heading">My Journey</h3>
    <p class="d-block text-white journey-paragraph">
       I've worked as a Special educational needs practioner for many years;
      working in schools, theatre and even educational recruitment. However, with myself and my partner converting a
      Horse lorry into a tiny house, I knew it was time to realise my dreams and find my passion. And so, I discovered 
      the wonderous world of code...All I could think was: 'Finally! I've found a realisation of how my brain works!"
      I begun my journey into Front end development exploring Freecodecamp, Code institute and am 
      currently continuing my studies at SheCodes. I am an extremely creative, logical and intuitive person; front-end development marries these qualities 
      together perfectly. Learning to code has changed my life, I have found my passion, my creativity 
      , my code.
    </p>
  </div>`;
}

function hobby(event) {
  event.preventDefault();

  document.querySelector("#about-category").innerHTML = ` <div id="hobbies">
    <h3 class="text-white pb-4 about-heading">My Hobbies</h3>
    <p class="d-block text-white hobby-heading hobby-paragraph">When i'm not coding I love to...</p>
    <ul class="text-white hobby-list">
      <li>Practice Yoga</li>
      <li>Make clothes</li>
      <li>Write poetry</li>
      <li>
        Experiment with Make-up
      </li>
      <li>Listen to music</li>
      <li>Tiny home conversion</li>
      <li>Play Ukulele</li>
    </ul>
  </div>`;
}

function stack(event) {
  event.preventDefault();

  document.querySelector("#about-category").innerHTML = `<div id="stack">
    <h3 class="text-white pb-4 about-heading">My Stack</h3>
    <div class = "stack-container">
      <i class="fa-brands fa-html5 stack-icon" title="HTML Icon"></i>
      <i class="fa-brands fa-css3 stack-icon" title="CSS Icon"></i>
      <i class="fa-brands fa-js stack-icon" title="Javascript Icon"></i>
      <i class="fa-brands fa-bootstrap stack-icon" title="Bootstrap Icon"></i>
      <i class="fa-brands fa-react stack-icon" title="React Icon"></i>
      <i class="fa-brands fa-node-js stack-icon" title="Node JS Icon"></i>
      <i class="fa-brands fa-npm stack-icon" title="NPM Icon"></i>
      <i
      class="fa-solid fa-laptop stack-icon"
      title="Responsive Icon"
    ></i>
      <i class="fa-brands fa-figma stack-icon" title="Figma Icon"></i>
    </div>
  </div>`;
}

let journeyButton = document.querySelector("#journey-button");
journeyButton.addEventListener("click", journey);

let hobbyButton = document.querySelector("#hobby-button");
hobbyButton.addEventListener("click", hobby);

let stackButton = document.querySelector("#stack-button");
stackButton.addEventListener("click", stack);
