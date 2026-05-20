const btnToogle = document.getElementById("themeToogle");
const root = document.documentElement;


btnToogle.addEventListener('click', ()=>{
    const currentTheme = root.getAttribute('data-theme');

    if(currentTheme == 'dark'){
        root.removeAttribute('data-theme');
        btnToogle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        btnToogle.style.padding = '10px 11px'
    } else {
        root.setAttribute('data-theme','dark');
        btnToogle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        btnToogle.style.padding = '10px 13px'
    }
})



