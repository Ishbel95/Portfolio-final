function journey(event) {
  event.preventDefault();

  document.querySelector("#about-category").innerHTML = `<div id="journey">
    <h3 class="text-white about-heading">My Journey</h3>
    <p class="d-block text-white journey-paragraph">
       I've worked as a Special educational needs practioner for many years;
      working in schools, theatre and even educational recruitment.
       However, with myself and my partner converting a
      Horse lorry into a tiny house, I knew it was time to realise my dreams and find my passion. 
      <br /> 
      <br />
      <strong>So, I discovered 
      the wonderous world of code...</strong>
      <br /> 
      <br />
      All I could think was: <strong>'Finally, I've found my calling!"</strong>
      I begun my journey into Front end development exploring Freecodecamp and Code institute. 
      I have recently graduated from 
      <a href="https://www.shecodes.io/graduates/49145-ishbel-fahey-theaker" 
      title="Ishbel SheCodes certifications"
      target="_blank">SheCodes</a> and am currently nearing completion of 
      <a href="https://scrimba.com/dashboard#overview" 
      target="_blank" title="Scrimba Homepage">Scrimba's Frontend Developer career Path.</a> 
      <br /> 
      <br />
      I am an extremely creative, logical and intuitive person; Frontend development marries these qualities 
      together perfectly. Learning to code has changed my life, 
      I have found my <strong>passion</strong>, my <strong>creativity<strong> 
      ,  <a href="https://github.com/Ishbel95" target="_blank" title="Ishbel Github">my code.</a>
    </p>
  </div>`;
}

function hobby(event) {
  event.preventDefault();

  document.querySelector("#about-category").innerHTML = ` <div id="hobbies">
    <h3 class="text-white about-heading">My Hobbies</h3>
    <ul class="text-white hobby-list">
      <li>I love to exercise, my favourite types being; running, yoga and swimming...</li>
  
      <li>I taught myself how to make clothes a few years back, 
      I love to experiement with bright colours, sequins and spray paint!</li>
      <li>The written word has always provided great comfort to me. I write 
      poetry often and have be known to come up with a song or two.</li>
      <li>
        Make-up is also one of my favourite past times. I tend to go bold and bright!
      </li>
      <li>I love to listen to music and occasionally give my favourite songs a go on my Ukulele.</li>
      <li>Me and my partner are converting a Horsebox into a tiny home! So contruction and DIY is another hobby I guess?!</li>
      
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
