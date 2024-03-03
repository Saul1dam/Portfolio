/* Formulario*/

const datos={
    nombre:'',
    email:'',
    mensaje:''
}
const nombre=document.querySelector('#nombre')
const email=document.querySelector('#email')
const mensaje=document.querySelector('#mensaje')


const formulario=document.querySelector(".formulario");
nombre.addEventListener(`input`, leerTexto);
email.addEventListener(`input`, leerTexto);
mensaje.addEventListener(`input`, leerTexto);


formulario.addEventListener('submit', function(e){
    e.preventDefault();
    //Comprobar que no haya campos en datos vacios
    const {nombre, email, mensaje}=datos;

    if(nombre===""||email===""|| mensaje===""){
        //Si esta vacio muestro error
        mostrarError("error","Todos los campos son obligatorios")
        return;
    }

    //Si todo esta correcto enviar y mostrar mensaje de enviado
    console.log("Todo bien");
   mostrarMensaje("correct","Mensaje enviado correctamente");
})

function leerTexto(e){
    datos[e.target.id]=e.target.value;
    console.log(datos);
}
function mostrarMensaje(tipo, mensaje){
const alerta=document.createElement('p');
alerta.textContent=mensaje;
alerta.classList.add(tipo);
formulario.appendChild(alerta);
setTimeout(()=>{
alerta.remove();
},2000)
}




let imagen= document.querySelector(".contacto-bg");
console.log(imagen);
imagen.style.display = "none";


let formul= document.querySelector(".formulario");
console.log(formul);



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




