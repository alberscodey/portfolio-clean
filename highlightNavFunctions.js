//First, let's identify which elements need to be highlighted as you scroll.
const nav = document.getElementById('nav');

const landing = document.getElementById('home');

const skillsNavElement = document.getElementById('skills-nav-element');
const figmaProgress = document.getElementById('figma-progress');
const htmlProgress = document.getElementById('html-progress');
const javascriptProgress = document.getElementById('javascript-progress');
const adobeProgress = document.getElementById('adobe-progress');

const designsNavElement = document.getElementById('designs-nav-element');

//Okay, now as you scroll into a section of the site, a new class will be added to its corresponding nav element
//Landing
function enterLanding() {
    nav.classList.remove('portfolio-gradient');
}

//Skills
function enterSkills() {
    nav.classList.add('portfolio-gradient');
    skillsNavElement.classList.add('highlighted');
    
    //when you scroll into the skills section, the progress bars fill up
    figmaProgress.classList.remove('shrink');
    figmaProgress.classList.add('figma-grow');

    htmlProgress.classList.remove('shrink');
    htmlProgress.classList.add('html-grow');

    javascriptProgress.classList.remove('shrink');
    javascriptProgress.classList.add('javascript-grow');

    adobeProgress.classList.remove('shrink');
    adobeProgress.classList.add('adobe-grow');
};
function exitSkills() {
    skillsNavElement.classList.remove('highlighted');

    figmaProgress.classList.remove('figma-grow');
    figmaProgress.classList.add('shrink');

    htmlProgress.classList.remove('html-grow');
    htmlProgress.classList.add('shrink');

    javascriptProgress.classList.remove('javascript-grow');
    javascriptProgress.classList.add('shrink');

    adobeProgress.classList.remove('adobe-grow');
    adobeProgress.classList.add('shrink');
}

//Designs
function enterDesigns() {
    nav.classList.add('portfolio-gradient');
    designsNavElement.classList.add('highlighted');
};
function exitDesigns() {
    designsNavElement.classList.remove('highlighted');
};

/* //Centsible Spending Solutions
function enterCentsible() {
    nav.classList.add('green');
}
function exitCentsible() {
    nav.classList.remove('green');
}

//AGB
function enterAGB() {
    nav.classList.add('blue');
}
function exitAGB() {
    nav.classList.remove('blue');
}

//Finish.it
function enterFinishIt() {
    nav.classList.add('purple');
}
function exitFinishIt() {
    nav.classList.remove('purple');
}*/

//Contact
function enterContact() {
    nav.classList.add('portfolio-gradient');
}