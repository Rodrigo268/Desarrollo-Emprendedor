let localizacionInicio = window.pageYOffset;

const header  = document.querySelector("header");

window.onscroll = function(){

    let nuevaLocalizacion = window.pageYOffset;

    if(localizacionInicio > nuevaLocalizacion){
        header.style.top = "0";
    }else{
        header.style.top = "-100px"
    }
    localizacionInicio = nuevaLocalizacion;
}