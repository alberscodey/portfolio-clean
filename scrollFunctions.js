const home = document.getElementById('home');
const skills = document.getElementById('skills');
const designs = document.getElementById('designs');
const contact = document.getElementById('contact');

function goHome() {
    home.scrollIntoView({behavior: "smooth"});
}

function goSkills() {
    skills.scrollIntoView({behavior: "smooth"});
}

function goDesigns() {
    designs.scrollIntoView({behavior: "smooth"});
}

function goContact() {
    contact.scrollIntoView({behavior: "smooth"});
}