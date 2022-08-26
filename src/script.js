function journey(event) {
  event.preventDefault();

  document.querySelector("#about-category").innerHTML = `<div id="journey">
    <h3 class="text-white about-heading">My Journey</h3>
    <p class="d-block text-white journey-paragraph">
       I've worked as a Special educational needs practioner for many years;
      working in schools, theatre and even educational recruitment. However, with myself and my partner converting a
      Horse lorry into a tiny house, I knew it was time to realise my dreams and find my passion. 
      <br /> 
      <br />
      <strong>So, I discovered 
      the wonderous world of code...</strong>
      <br /> 
      <br />
      All I could think was: <strong>'Finally! I've found my passion"</strong>
      I begun my journey into Front end development exploring Freecodecamp and Code institute. I have recently graduated from 
      <a href="https://www.shecodes.io/graduates/49145-ishbel-fahey-theaker">SheCodes</a> and am currently nearing completion of <a href="https://scrimba.com/dashboard#overview">Scrimba's Frontend career Path.</a> 
      <br /> 
      <br />
      I am an extremely creative, logical and intuitive person; Frontend development marries these qualities 
      together perfectly. Learning to code has changed my life, I have found my <strong>passion</strong>, my <strong>creativity<strong> 
      ,  <a href="https://github.com/Ishbel95">my code.</a>
    </p>
  </div>`;
}

function hobby(event) {
  event.preventDefault();

  document.querySelector("#about-category").innerHTML = ` <div id="hobbies">
    <h3 class="text-white about-heading">My Hobbies</h3>
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
    <h3 class="text-white stack-heading">My Stack</h3>
    <div class = "stack-container">
      <i class="fa-brands fa-html5 stack-icon" title="HTML Icon"></i>
      <i class="fa-brands fa-css3 stack-icon" title="CSS Icon"></i>
      <i class="fa-brands fa-js stack-icon" title="Javascript Icon"></i>
      <i class="fa-brands fa-bootstrap stack-icon" title="Bootstrap Icon"></i>
      <i class="fa-brands fa-react stack-icon" title="React Icon"></i>
      <i class="fa-brands fa-node stack-icon" title="Node JS Icon"></i>
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
