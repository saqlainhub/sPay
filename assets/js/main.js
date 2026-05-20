// ==================== NavBar ===============================
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(item => item.classList.remove('nav-active'));

        link.classList.add('nav-active');
    });
});


const sideLinks = document.querySelectorAll('.sidebar-link');

sideLinks.forEach(link => {
    link.addEventListener('click', function(){
        sideLinks.forEach(ITEM => ITEM.classList.remove('sidebar-active'));

        link.classList.add('sidebar-active');
    });
});
