document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.horizontal-menu a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => {
                section.classList.remove('active');
            });

            links.forEach(link => {
                link.classList.remove('active');
            });

            targetSection.classList.add('active');
            this.classList.add('active');
        });
    });

    // Show the first section by default
    if (sections.length > 0) {
        sections[0].classList.add('active');
        links[0].classList.add('active');
    }
});