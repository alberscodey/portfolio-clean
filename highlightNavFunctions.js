//First, let's identify which elements need to be highlighted as you scroll.
const nav = document.getElementById('nav');
const skillsNavElement = document.getElementById('skills-nav-element');
const designsNavElement = document.getElementById('designs-nav-element');

//Okay, now as you scroll into a section of the site, a new class will be added to its corresponding nav element

//Skills
function enterSkills() {
    /*nav.classList.add('portfolio-gradient');*/
    skillsNavElement.classList.add('highlighted');
};
function exitSkills() {
    /*nav.classList.remove('portfolio-gradient');*/
    skillsNavElement.classList.remove('highlighted');
}

//Designs
function enterDesigns() {
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
}

//Contact
function enterContact() {
    nav.classList.add('portfolio-gradient');
}
function exitContact() {
    nav.classList.remove('portfolio-gradient');
} */