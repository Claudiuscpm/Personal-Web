
const typed = new Typed('.multiple-text', {
    strings: ['Front-End Developer', 'Tech Enthusiast', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};


document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.progress-bar span');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%'; 
        setTimeout(() => {
            bar.style.width = width;
        }, 100); 
    });

    const skillCircles = document.querySelectorAll('.professional-skills .circle');
    skillCircles.forEach(circle => {
        const percentage = parseInt(circle.getAttribute('data-percentage'));
        const radius = 60; 
        const circumference = 2 * Math.PI * radius; // 376.99
        const dashOffset = circumference - (percentage / 100) * circumference;

        const progressCircle = circle.querySelector('.progress');
        progressCircle.style.setProperty('--dashoffset', dashOffset); 
    });
});