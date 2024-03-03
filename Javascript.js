


/* Toggle*/

const toggle=document.getElementById('toggle')
const toggleIcon=document.getElementById('toggle-icon')
const menu=document.getElementById('menu')
let showMenu=false;

toggle.addEventListener('click', toggleMenu)


function toggleMenu(){
    if(!showMenu){
        toggleIcon.src='./images/icon-close.svg';
        menu.style.display= "flex";
        showMenu=true;
    }else{
        toggleIcon.src='./images/icon-hamburger.svg';
        menu.style.display="none";
        showMenu=false;
    }
}
console.log(showmenu);




