
// Objeto con propiedades de menu Movil

var propMenu = {

    burguer_menu : document.getElementById('burguer_menu'),
    slideMenu : document.getElementById('slide_menu'),
    active_menu : false

}

//Objeto con los métodos de menu Movil

var metMenu = {
    inicio : function(){        
        propMenu.burguer_menu.addEventListener('click', metMenu.toggleMenu);
    },

    toggleMenu : function(){        
        if(propMenu.active_menu==false){
            propMenu.active_menu=true;
            propMenu.slideMenu.className=propMenu.slideMenu.className+' active';
        }
        else{
            propMenu.active_menu=false;
            propMenu.slideMenu.className=propMenu.slideMenu.className.replace(' active','');
        }
    }
}

metMenu.inicio();

