let localizacionInicio = window.pageYOffset;

const header  = document.querySelector("header");

window.onscroll = function(){

    let nuevaLocalivacion = window.pageYOffset;

    if(localizacionInicio > nuevaLocalivacion){
        header.style.top = "0";
    }else{
        header.style.top = "-100px"
    }
    localizacionInicio = nuevaLocalivacion;
}