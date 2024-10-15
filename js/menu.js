
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    

    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menu.prepend(menuToggle);
    
 u
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
