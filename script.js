
function myFunction() {
    let menu = document.querySelector(".top-nav")
    
    if (menu.className === 'top-nav') {
        menu.className += ' vertical'
    } else {
        menu.className = 'top-nav'
    }
    console.log(menu.className);
}