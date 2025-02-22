function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle i');
    if (sidebar.style.display === 'flex') {
        sidebar.style.display = 'none';
        menuToggle.classList.remove('fa-times');
        menuToggle.classList.add('fa-bars');
    } else {
        sidebar.style.display = 'flex';
        menuToggle.classList.remove('fa-bars');
        menuToggle.classList.add('fa-times');
    }
}