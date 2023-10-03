const toggleButton = document.querySelector('.btn-toggle');

toggleButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-theme');
    localStorage.setItem('darkMode', isDarkMode);
    toggleButton.querySelector('.spn2').textContent = isDarkMode ? 'LIGHT' : 'DARK';
});

const darkMode = localStorage.getItem('darkMode') === 'true';
document.body.classList.toggle('dark-theme', darkMode);

const sidebar = document.querySelector('.sidebar');
window.addEventListener('scroll', () => {
    sidebar.style.top = window.scrollY + 'px';
});