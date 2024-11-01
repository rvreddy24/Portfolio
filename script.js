function toggleDetails(projectId) {
    const details = document.getElementById(projectId);
    const button = event.currentTarget;
    const icon = button.querySelector('i');
    
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        icon.style.transform = 'rotate(90deg)';
        button.setAttribute('aria-expanded', 'true');
    } else {
        details.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
        button.setAttribute('aria-expanded', 'false');
    }
}