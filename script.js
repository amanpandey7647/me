document.getElementById('more-info-btn').addEventListener('click', function() {
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        this.textContent = 'Less Info';
    } else {
        skillsSection.style.display = 'none';
        this.textContent = 'More Info';
    }
});
